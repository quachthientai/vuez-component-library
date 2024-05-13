import { makePropsFactory } from '@/utils/makePropFactory';
import { generateComponentId } from '@/utils/ComponentIDGenerator';
import { Helpers } from '@/utils/helpers';
import { Input } from '@/components/Input/Input';
import { Chip } from '@/components/Chip/Chip';
import { MenuTest } from '@/components/MenuTest/MenuTest';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { CheckboxGroup } from '@/components/CheckboxGroup/CheckboxGroup';
import { SelectKey } from '@/constants/injectionKey';
import { SelectOptionModel } from '../Select/types';
import { MenuItemTest } from '@/components/MenuItemTest/MenuItemTest';
import { makeIconProps } from '@/composable/icon';
import { computed, defineComponent, type PropType, provide, Ref, toRef, getCurrentInstance, ref, nextTick, h, watch } from 'vue';
import { makeColorProp } from '@/composable';
import { Icon } from '@iconify/vue';

enum NAMESPACES {
	SELECT = 'vz-select',
	SELECT_DISABLED = 'vz-select--disabled',
	
	SELECT_SELECTIONS_LIST = 'vz-select__selections-list',
	SELECT_SELECTIONS_ITEMS = 'vz-select__selections-items',
	SELECT_SELECTIONS_ITEM_SELECT_ALL = 'vz-select__selections-item-all',

	SELECT_SELECTION = 'vz-select__selection',
	SELECT_SELECTIONS = 'vz-select__selections',
	SELECT_SELECTION_TEXT = 'vz-select__selection-text',
	SELECT_SELECTION_CHIPS = 'vz-select__selection-chips',
	SELECT_SELECTION_MAX_VALUE = 'vz-select__selection-max',
	
	SELECT_DROPDOWN_ICON = 'vz-select__dropdown-icon'
	

};

const vSelectProps = makePropsFactory({
	value: {
		default: undefined,
	},
	modelValue: {
		default: undefined,
	},
	clearable: {
		type: Boolean,
		default: false,
	},
	helperText: {
		type: String,
		default: undefined,
	},
	label: {
		type: String,
		default: undefined
	},
	name: {
		type: String,
		default: undefined,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	counter: {
		type: Boolean,
		default: false
	},
	options: {
		type: Array as PropType<SelectOptionModel[]>,
		default: () => [],
	},
	closableChips: {
		type: Boolean,
		default: false,
	},
	chips: {
		type: Boolean,
		default: false
	},
	multiple: {
		type: Boolean,
		default: false
	},
	checkMark: {
		type: Boolean,
		default: false
	},
	readonly: {
		type: Boolean,
		default: false
	},
	selectAllToggle: {
		type: Boolean,
		default: false
	},
	exceedMaxSelectedLabel: {
		type: String,
		default: '(+{0} others)'
	},
	maxSelectedLabels: {
		type: Number,
		default: 0
	},
	limitSelection: {
		type: Number,
		default: 0,
	},
	...makeColorProp([
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
	], 'primary')
});

const Select = defineComponent({
	name: 'Select',
	props: vSelectProps,
	inheritsAttrs: false,
	emits: {
		'update:modelValue': null,
		'clear': null
	},
	setup(props, { slots, emit, attrs }) {
		const instance = getCurrentInstance();
		const componentID = generateComponentId(NAMESPACES.SELECT);
		
		const menu = ref();
		const root = ref<HTMLElement>(null);
		const isOpen = ref<Boolean>(false);
		
		const booleanContext = computed(() => {
			return {
				hasLabel: props.label || undefined,
				hasModel: (props.options as SelectOptionModel[]).length > 0
			}
		});

		const {
			hasLabel,
			hasModel
		} = booleanContext.value;

		const componentClasses = computed(() => {
			return {
				disabled: props.disabled && NAMESPACES.SELECT_DISABLED
			}
		})

		const componentAttrs = computed(() => {
			return {
				...attrs,
				'role': 'combobox',
				'data-vz-component': Helpers.toPascalCase(NAMESPACES.SELECT, '-'),
				'aria-expanded': isOpen.value
			};
		});


		function rootRef(el: HTMLElement) {
			return root.value = el;
		};

		function onToggle(e) {
			return isOpen.value = e.value;
		};
		
		function handleClick(e: Event) {
			return menu.value.toggle(e);
		};

		function isSelected(option: SelectOptionModel) {
			if(props.multiple) {
				return (props.modelValue as any[] || [])
					.some((modelOption) => modelOption.value === option.value)
			}
			
			return (props.modelValue as SelectOptionModel).value === option.value
		}

		function allSelected() {
			return (props.options as any[]).every((option) => isSelected(option));
		}

		function isIndeterminate() {
			return !allSelected() 
				&& (props.modelValue as any[])
						.some((option) => isSelected(option));
		}

		function isLimitSelectionReach(modelValue: SelectOptionModel[]) {
			return modelValue.length > (props.limitSelection as number);
		}

		function onOptionSelect(e, option: SelectOptionModel) {
			let newModelValue: any[] | any;
			const selected = isSelected(option);

			if(props.multiple) {
				newModelValue = selected 
					? (props.modelValue as any[]).filter((item: any) => item.value !==option.value)
					: [...(props.modelValue as any[]), option]
			} else {
				newModelValue = option
				menu.value.toggle(e.originalEvent);
			}
			
			if((props.limitSelection as number) > 0 && isLimitSelectionReach(newModelValue)) {
				return;
			}

			emit('update:modelValue', newModelValue);
		}

		function handleFocus(e: Event) {
		
		}

		function handleKeyDown(e: KeyboardEvent) {
			const { code } = e;
			const prevent = true;

			switch(code) {
				case 'Enter':
				case 'Space':
				case 'ArrowUp':
				case 'ArrowDown':
					handleClick(e);
				break;
			}

			if(prevent) e.preventDefault();
		}

		function onClearable() {
			const newModelValue = Array.isArray(props.modelValue) 
				? [] 
				: ''
			emit('update:modelValue', newModelValue);
			emit('clear');
		}

		function onChipClose(e, option) {
			const newModelValue = (props.modelValue as any[]).filter((item) => item.value !== option);
			emit('update:modelValue', newModelValue);
		}

		function onToggleSelectAll(e) {
			const newModelValue = allSelected() ? [] : props.options;
			emit('update:modelValue', newModelValue);
		}

		function getExceedMaxSelectedLabel(modelValueLength: number) {
			const pattern : RegExp = /{(.*?)}/;

			const maxSelectedLabels : number = props.maxSelectedLabels as number;
			const exceedMaxSelectedLabel : string = props.exceedMaxSelectedLabel as string;

			if(pattern.test(exceedMaxSelectedLabel) && modelValueLength > maxSelectedLabels && maxSelectedLabels !== undefined) { 
				return exceedMaxSelectedLabel.replace(exceedMaxSelectedLabel.match(pattern)[0], String(modelValueLength - maxSelectedLabels));
			}
		}

		function getSelectedValue(modelValue: any[] | any) {
			if(props.multiple) {
				return modelValue.map((option: SelectOptionModel) => option.value);
			}
			
			return modelValue.value;
		}

		function getMaxSelectedLabel(modelValueLength: number) {
			const maxSelectedLabels : number = props.maxSelectedLabels as number;
			const modelValue : any[] = props.modelValue as any[];

			return modelValue.slice(0, maxSelectedLabels).map((item) => item.value)
		}

		//for single selection
		function getLabel(modelValue: any) {
			return getSelectedValue(modelValue);
		}

		//for multiple selections
		function getLabels(modelValue: any[]) {
			debugger;
			const selectedValue = getSelectedValue(modelValue);

			if((props.maxSelectedLabels as number) > 0) {
				const exceedMaxSelectedLabel = getExceedMaxSelectedLabel(modelValue.length);
				const maxSelectedLabels = getMaxSelectedLabel(modelValue.length);
				
				return [maxSelectedLabels, exceedMaxSelectedLabel]
			}

			return selectedValue
		}

		provide(SelectKey, {
			chips: toRef(props, 'chips') as Ref<Boolean>,
			multiple: toRef(props, 'multiple') as Ref<Boolean>,
			selectedOptions: toRef(props, 'modelValue') as Ref<any>
		});

		return {
			menu,
			isOpen,
			rootRef,
			hasModel,
			getLabels,
			hasLabel,
			instance,
			onToggle,
			isSelected,
			onClearable,
			handleClick,
			handleFocus,
			onChipClose,
			componentID,
			handleKeyDown,
			componentAttrs,
			onOptionSelect,
			getSelectedValue,
			componentClasses,
			getLabel,
			onToggleSelectAll,
			allSelected,
			isIndeterminate
		};
	},
	render() {
		const { disabled } = this.componentClasses;

		return (
			<div class={[
				disabled,
				NAMESPACES.SELECT
			]}
				ref={this.rootRef}
				{...this.componentAttrs}
				onClick={this.handleClick}
				onKeydown={this.handleKeyDown}
			>	
				<Input readonly 
					label={this.label}
					color={this.color}
					disabled={this.disabled}
					onClear={this.onClearable}
					onFocus={this.handleFocus}
					clearable={this.clearable}
					helperText={this.helperText}
					counter={(this.multiple) && this.counter}
					modelValue={this.getSelectedValue(this.modelValue)}
				> 	
					{{	
						default: () => {
							return (
								<div class={NAMESPACES.SELECT_SELECTIONS}>
									{ (this.chips && this.multiple) 
										//chips
										? 	<div class={NAMESPACES.SELECT_SELECTION_CHIPS}>
												{this.getLabels(this.modelValue)
													.flat()
													.map((labelValue: any, index: number, arr: any[]) => {
														if(this.maxSelectedLabels > 0 && (index + 1 === arr.length)) {
															return (
																<div class={[NAMESPACES.SELECT_SELECTION, 
																	NAMESPACES.SELECT_SELECTION_MAX_VALUE
																]}>{labelValue}</div>
															)
														}
														return (
															<div class={NAMESPACES.SELECT_SELECTION}>
																<Chip key={index}
																	size="sm"
																	closable={this.closableChips}
																	modelValue={true}
																	content={labelValue}
																	onRemove={(e) => this.onChipClose(e, labelValue)}
																/>
															</div>
														)
													})}
											</div>
										//comma
										: 	<div class={NAMESPACES.SELECT_SELECTION_TEXT}>
												{ this.multiple 
													? this.getLabels(this.modelValue)
														.flat()
														.map((labelValue: any, index: number, arr: any[]) => {
															return (
																<div class={[NAMESPACES.SELECT_SELECTION,
																	(this.maxSelectedLabels > 0 && (index + 1 === arr.length)) 
																	&& NAMESPACES.SELECT_SELECTION_MAX_VALUE
																]}>
																	{labelValue}
																</div>
															)
														})
													: <div class={NAMESPACES.SELECT_SELECTION}>
														{this.getLabel(this.modelValue)}
													</div>
												}
											</div>
									}
								</div>
							)
						},
						append: () => {
							return (
								<Icon icon="mdi-chevron-down" 
									class={[NAMESPACES.SELECT_DROPDOWN_ICON, 
										this.isOpen && 'rotate-180'
									]}
								/>
							)
						},
						counter: () => {
							return this.limitSelection > 0 
								? `${this.modelValue.length} / ${this.limitSelection}`
								: this.modelValue.length
						}
					}}
				</Input>
				<MenuTest ref="menu"
					class={NAMESPACES.SELECT_SELECTIONS_LIST}
					matchTriggerWidth
					onShow={this.onToggle}
					onHide={this.onToggle}
				>	
					{ (this.selectAllToggle && this.limitSelection === 0) && (
						<div class={NAMESPACES.SELECT_SELECTIONS_ITEM_SELECT_ALL}>
							<MenuItemTest divider 
								type="header" 
							>
								<Checkbox binary 
									label="Select All"
									modelValue={this.allSelected()}
									onChange={this.onToggleSelectAll}
									indeterminate={this.isIndeterminate()}
								/>
							</MenuItemTest>
						</div>
						
					)}
					{ this.hasModel && (
						<div class={NAMESPACES.SELECT_SELECTIONS_ITEMS}>
							{ (this.options as SelectOptionModel[])?.map((option: SelectOptionModel) => {
								return (
									<MenuItemTest
										value={option.value}
										icon={
											(!this.multiple && this.checkMark && this.isSelected(option))
												? 'mdi-check' 
												: ''
										}
										content={!this.multiple ? option.label : undefined}
										onClick={(e: Event) => this.onOptionSelect(e, option)}
									>	
										{this.multiple && (
											<Checkbox binary
												label={option.label}
												value={option.value} 
												modelValue={this.isSelected(option)}
											/>
										)}
									</MenuItemTest>
								)
							})}
						</div>
					)}
				</MenuTest>
			</div>
		);
	}
});

type SelectType = InstanceType<typeof Select>;

export {
	Select,
	SelectType,
};