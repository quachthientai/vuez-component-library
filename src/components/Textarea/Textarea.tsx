import { makePropsFactory } from '@/utils/makePropFactory';
import { generateComponentId } from '@/utils/ComponentIDGenerator';
import { Helpers } from '@/utils/helpers';
import { makeColorProp, useColor } from '@/composable/color';
import { makeIconProps } from '@/composable/icon';
import { computed, defineComponent, type PropType, provide, Ref, toRef, getCurrentInstance } from 'vue';
import { Icon } from '@iconify/vue';

enum NAMESPACES {
	TEXTAREA = 'vz-textarea',
	TEXTAREA_LABEL = 'vz-textarea__label',
	TEXTAREA_FIELD = 'vz-textarea__field',
	TEXTAREA_ICON = 'vz-textarea__icon',
	
	TEXTAREA_CONTROL = 'vz-textarea__control',
	TEXTAREA_DISABLED = 'vz-textarea--disabled',
	TEXTAREA_CLEARABLE = 'vz-textarea__clearable',
	TEXTAREA_HELPER_TEXT = 'vz-textarea__helper-text',
	TEXTAREA_APPEND_ICON = 'vz-textarea__append-icon',
	TEXTAREA_PREPEND_ICON = 'vz-textarea__prepend-icon',
	TEXTAREA_FIELD_WRAPPER = 'vz-textarea__field-wrapper',
};

const vTextareaProps = makePropsFactory({
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
	name: {
		type: String,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	helperText: {
		type: String,
		default: undefined,
	},
	label: {
		type: String,
		default: undefined,
	},
	...makeIconProps(),
	...makeColorProp([
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
	], 'primary')
});

const Textarea = defineComponent({
	name: 'Textarea',
	props: vTextareaProps,
	inheritAttrs: false,
	emits: ['update:modelValue', 'clear'],
	setup(props, { slots, emit, attrs }) {

		const componentID = generateComponentId(NAMESPACES.TEXTAREA);

		const booleanContext = computed(() => {
			return {
			}
		});

		const hasHelperText = computed(() => {
			return props.helperText !== undefined;
		})

		const hasAppendIcon = computed(() => {
			return !!(slots.append || props.appendIcon);
		})

		const hasPrependIcon = computed(() => {
			return !!(slots.prepend || props.prependIcon);
		})

		const isClearable = computed(() => {
			return props.clearable && !props.disabled && props.modelValue !== '';		
		})

		const {
		} = booleanContext.value;

		const componentClasses = computed(() => {
			return {
				color: useColor(NAMESPACES.TEXTAREA, props.color as string),
				disabled: props.disabled && NAMESPACES.TEXTAREA_DISABLED,
			}
		});

		function onClear(e: Event) {
			e.stopPropagation();
			emit('update:modelValue', '');	
			emit('clear');
		}

		function onInput(e: Event) {
			const target = e.target as HTMLTextAreaElement;
			e.stopPropagation();

			if(target.value) {
				emit('update:modelValue', target.value);
			}
		}

		return {
			onClear,
			onInput,

			isClearable,
			hasAppendIcon,
			hasHelperText,
			hasPrependIcon,
			componentClasses
		};
	},
	render() {
		const { color, disabled } = this.componentClasses;
		return (
			<div class={[
					color,
					disabled,
					NAMESPACES.TEXTAREA,
				]}
			>
				<div class={NAMESPACES.TEXTAREA_CONTROL}>
					{ this.hasPrependIcon && (
						<div class={[
								NAMESPACES.TEXTAREA_PREPEND_ICON, 
								NAMESPACES.TEXTAREA_ICON
							]}>
								<i>
									{ this.prependIcon 
										? <Icon icon={this.prependIcon.icon}/>
										: this.$slots.prepend?.() 
									}
								</i>
						</div>
					)}

					<div class={NAMESPACES.TEXTAREA_FIELD_WRAPPER}>
						<textarea
							onInput={this.onInput}
							value={this.modelValue}
							class={NAMESPACES.TEXTAREA_FIELD}
							placeholder=""
						>
							{this.$slots.default}
						</textarea>
						{ this.label && (
							<label class={NAMESPACES.TEXTAREA_LABEL}
								
							>
								{this.label}
							</label>
						)}
						
					</div>

					{ this.isClearable && (
						<div class={[NAMESPACES.TEXTAREA_CLEARABLE, 
								NAMESPACES.TEXTAREA_ICON
							]}
							onClick={this.onClear}
						>
							<i><Icon icon="mdi:close-box"/></i>
						</div>
					)}

					{ this.hasAppendIcon && (
						<div class={[
								NAMESPACES.TEXTAREA_APPEND_ICON, 
								NAMESPACES.TEXTAREA_ICON
							]}
						>
							<i>
								{ this.appendIcon 
									? <Icon icon={this.appendIcon.icon}/>
									: this.$slots.append?.() 
								}
							</i>
						</div>
					)}
				</div>
				
				{ this.hasHelperText && (
					<div class={NAMESPACES.TEXTAREA_HELPER_TEXT}>
						{ this.helperText }
					</div>
				)}
			</div>
			
			
		);
	}
});

type TextareaType = InstanceType<typeof Textarea>;

export {
	Textarea,
	TextareaType,
};