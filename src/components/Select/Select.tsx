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
import { computed, defineComponent, type PropType, provide, Ref, toRef, getCurrentInstance, ref } from 'vue';
import { makeColorProp } from '@/composable';

enum NAMESPACES {
	SELECT = 'vz-select',
	SELECT_CONTROL = 'vz-select__control',
	SELECT_LABEL = 'vz-select__label',
	SELECT_FIELD = 'vz-select__field',
	SELECT_FIELD_WRAPPER = 'vz-select__field-wrapper',
	SELECT_SELECTION = 'vz-select__selection'
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
	options: {
		type: Array as PropType<SelectOptionModel[]>,
		default: () => [],
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
		// const selectedSingleValue = ref<>
		
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
				return (props.modelValue as any[] || []).some(
					(modelOption) => modelOption.value === option.value
				)
			}
			return !!option.value;
		}

		function getOptionValue(modelValue: any[] | any) {
			if(props.multiple) {
				return modelValue.map((option: SelectOptionModel) => option.value);
			}
			
			return modelValue.value;
		}

		function onOptionSelect(e: Event, option: SelectOptionModel) {
			let newModelValue: any[] | any;
			const selected = isSelected(option);

			if(props.multiple) {
				newModelValue = selected 
					? (props.modelValue as any[]).filter((item: any) => item.value !==option.value)
					: [...(props.modelValue as any[]), option]
			} else {
				newModelValue = option
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
		provide(SelectKey, {
			chips: toRef(props, 'chips') as Ref<Boolean>,
			multiple: toRef(props, 'multiple') as Ref<Boolean>,
			selectedOptions: toRef(props, 'modelValue') as Ref<any>
		});
		
		return {
			hasModel,
			rootRef,
			hasLabel,
			handleKeyDown,
			menu,
			handleClick,
			handleFocus,
			componentID,
			instance,
			onToggle,
			isOpen,
			componentAttrs,
			onOptionSelect,
			getOptionValue,
			isSelected,
			onClearable
		};
	},
	render() {
		return (
			<>
				<div class={NAMESPACES.SELECT}
					ref={this.rootRef}
					{...this.componentAttrs}
					onClick={this.handleClick}
					onKeydown={this.handleKeyDown}
				>	
					<Input readonly 
						appendIcon={{
							icon: 'mdi-chevron-down'
						}}
						label={this.label}
						color={this.color}
						disabled={this.disabled}
						modelValue={this.getOptionValue(this.modelValue)}
						onFocus={this.handleFocus}
						clearable={this.clearable}
						helperText={this.helperText}
						onClear={this.onClearable}
					> 	
						<div class=" vz-select__selections">
							{this.modelValue.map((item, idex) => {
								return (
									<>	
										<Chip size="sm" content={item.content}/>
									
									</>
								)
							})}
						</div>
						
					
						
						
					</Input>

					<MenuTest matchTriggerWidth
						onShow={this.onToggle}
						onHide={this.onToggle}
						ref="menu"
					>	
						{ this.hasModel && (this.options as SelectOptionModel[])?.map((option, index) => {
							return (
								<>
									<MenuItemTest
										value={option.value}
										content={!this.multiple ? option.content : undefined}
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
									{/* {this.multiple ?
										<MenuItemTest value={option.value} onClick={this.handleItemClick}>
											<Checkbox label={option.label} value={option.value} />
										</MenuItemTest>
										: <MenuItemTest onClick={this.handleItemClick} {...option} />
									} */}
								</>
							)
						})}
					</MenuTest>
				</div>
			</>
		);
	}
});

type SelectType = InstanceType<typeof Select>;

export {
	Select,
	SelectType,
};