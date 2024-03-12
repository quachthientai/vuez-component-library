import { makePropsFactory } from '@/utils/makePropFactory';
import { generateComponentId } from '@/utils/ComponentIDGenerator';
import { Helpers } from '@/utils/helpers';
import { Icon, addIcon } from "@iconify/vue";
import { computed, defineComponent, type PropType, provide, Ref, toRef, getCurrentInstance, ref, onMounted, onRenderTriggered, onUpdated } from 'vue';
import { makeIconProps } from '@/composable/icon';
import { makeColorProp, useColor } from '@/composable/color';

enum NAMESPACES {
	INPUT = 'vz-input',
	INPUT_ICON = 'vz-input__icon',
	INPUT_LABEL = 'vz-input__label',
	INPUT_FIELD = 'vz-input__field',
	INPUT_CONTROL = 'vz-input__control',
	INPUT_DISABLED = 'vz-input--disabled',
	INPUT_CLEARABLE = 'vz-input__clearable',
	INPUT_HELPER_TEXT = 'vz-input__helper-text',
	INPUT_APPEND_ICON = 'vz-input__append-icon',
	INPUT_PREPEND_ICON = 'vz-input__prepend-icon',
	INPUT_FIELD_WRAPPER = 'vz-input__field-wrapper',
	INPUT_PASSWORD_TOGGLE = 'vz-input__show-password-toggle',
};

/**
 * TODO dynamically prepend icon based on type ✅
 * TODO helper text rendering ✅
 * TODO implement slots logic for (prepend, append, helperText) ✅
 * TODO implement clearable logic ✅
 * TODO implement password toggle logic ✅
 * TODO styling the dot (make it more larger without resize the input) for the password toggle ✅
 * TODO define emit events for the component (update:modelValue, togglePassword, clear) ✅
 * TODO document the component ✅
 * TODO comment the component
 */

const vInputProps = makePropsFactory({
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
	name: {
		type: String,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	typeIcon: {
		type: Boolean,
		default: true,
	},
	showPasswordToggle: {
		type: Boolean,
		default: false,
	},
	type: {
		type: String,
		default: 'text',
		validator: (value: string) => {
			return Helpers.isIncluded(['text', 'password', 'email', 'number', 'tel', 'url'], value);
		}
	},
	label: {
		type: String,
		default: undefined,
	},
	/**
    * Defined the append or prepend icon for the button.
    * @type {IconType}
    * @default undefined
    * @name appendIcon | prependIcon
    */
   ...makeIconProps(),
	...makeColorProp([
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
	], 'primary'),
});

const Input = defineComponent({
	name: 'Input',
	props: vInputProps,
	inheritAttrs: false,
	emits: ['update:modelValue', 'togglePassword', 'clear'],
	setup(props, { slots, emit, attrs }) {
		const instance = getCurrentInstance();

		const componentID = generateComponentId(NAMESPACES.INPUT);

		// * Refs
		const input = ref<HTMLElement>(null);
		const showPassword = ref<boolean>(false);

		// * Computed properties
		const booleanContext = computed(() => {
			return {
				hasLabel: props.label || undefined,
				hasHelperText: props.helperText || undefined,
				hasAppendIcon: !!(slots.append || props.appendIcon),
				hasPrependIcon: !!(slots.prepend || props.prependIcon),
			}
		});

		const inputTypeIcon = computed(() => {
			switch(props.type) { 
				case 'email':
					return 'mdi:email';
				case 'password':
					return 'mdi:lock';
				case 'number':
					return 'mdi:numeric';
				case 'tel':
					return 'mdi:phone';
				case 'url':
					return 'mdi:link';
				default:
					return 'mdi:abc';
			}
		})

		const isPasswordToggle = computed(() => {
			return props.type === 'password' && props.showPasswordToggle;
		})

		const type = computed(() => {
			return props.type === 'password' && showPassword.value ? 'text' : props.type;
		})

		const isClearable = computed(() => {
			return props.clearable && !props.disabled && props.modelValue !== '';
		})

		const {
			hasLabel,
			hasHelperText,
			hasAppendIcon,
			hasPrependIcon
		} = booleanContext.value;

		const componentClasses = computed(() => {
			return {
				color: useColor(NAMESPACES.INPUT, props.color as string),
				disabled: props.disabled && NAMESPACES.INPUT_DISABLED,
			}
		});

		const [rootAttrs, inputAttrs] = Helpers.filterInputAttrs(attrs, ['class', 'id', /^data-/]);

		// * Methods
		function inputRef(el: HTMLElement) { 
			return input.value = el;
		}
	
		function onClear(e: Event) {
			e.stopPropagation();
			emit('update:modelValue', '');
			emit('clear');
		}

		function onTogglePassword(e: Event) {
			showPassword.value = !showPassword.value;
			e.stopPropagation();
			if(showPassword.value) {
				emit('togglePassword', showPassword.value);
			}
		}

		function onInput(e: Event) {
			const target = e.target as HTMLInputElement;
			e.stopPropagation();
			if(target.value) {
				emit('update:modelValue', target.value);
			}
		}

		return {
			type,
			onInput,
			onClear,
			inputRef,
			instance,
			hasLabel,
			rootAttrs,
			inputAttrs,
			isClearable,
			componentID,
			showPassword,
			hasHelperText,
			hasAppendIcon,
			inputTypeIcon,
			hasPrependIcon,
			isPasswordToggle,
			onTogglePassword,
			componentClasses,
		};
	},
	render() {
		const { color, disabled } = this.componentClasses;

		return (
			<div class={[
					color,
					disabled,
					NAMESPACES.INPUT,
				]}
				{...this.rootAttrs}
				data-disabled={this.disabled}
				data-vz-component={Helpers.toPascalCase(NAMESPACES.INPUT, '-')}
			>	
				
				<div class={NAMESPACES.INPUT_CONTROL}>
					{/* render if has prepend icon  */}
					{ (this.hasPrependIcon || this.typeIcon) && (
						<div class={[NAMESPACES.INPUT_PREPEND_ICON, NAMESPACES.INPUT_ICON]}>
							<i>
								{ this.prependIcon && !this.typeIcon
									? <Icon icon={this.prependIcon.icon} width="20px" height="20px"/>
									: this.$slots.prepend?.()
								}
								{ this.typeIcon && (
									<Icon icon={this.inputTypeIcon}/>
								)}
							</i>
						</div>
					)}

					<div class={NAMESPACES.INPUT_FIELD_WRAPPER}>
						<input
							type={this.type}
							ref={this.inputRef}
							{...this.inputAttrs}
							onInput={this.onInput}
							value={this.modelValue}
							disabled={this.disabled}
							aria-disabled={this.disabled}
							class={NAMESPACES.INPUT_FIELD}
							name={this.name || this.componentID}
						/>
						{ this.hasLabel && (
							<label class={NAMESPACES.INPUT_LABEL}
								for={this.instance.attrs.id || this.componentID}
							>
								{this.label}
							</label>
						)}
					</div>

					{/* render if type is password  */}
					{ this.isPasswordToggle && (
						<div class={[NAMESPACES.INPUT_PASSWORD_TOGGLE, NAMESPACES.INPUT_ICON]}
							onClick={this.onTogglePassword}
						>
							<i><Icon icon={this.showPassword ? "mdi:eye-off" : "mdi:eye"}/></i>
						</div>
					)}

					{/* render if clearable == true and value not null  */}
					{ this.isClearable && (
						<div class={[NAMESPACES.INPUT_CLEARABLE, NAMESPACES.INPUT_ICON]}
							onClick={this.onClear}
						>
							<i><Icon icon="mdi:close-box"/></i>
						</div>
					)}

					{/* render if has append icon  */}
					{ this.hasAppendIcon && (
						<div class={[NAMESPACES.INPUT_APPEND_ICON, NAMESPACES.INPUT_ICON]}>
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
					<div class={NAMESPACES.INPUT_HELPER_TEXT}>
						{ this.helperText }
					</div>
				)}
			</div>
		);
	}
});

type InputType = InstanceType<typeof Input>;

export {
	Input,
	InputType,
};