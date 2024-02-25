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
	INPUT_DISABLED = 'vz-input--disabled',
	INPUT_CLEARABLE = 'vz-input__clearable',
	INPUT_HELPER_TEXT = 'vz-input__helper-text',
	INPUT_APPEND_ICON = 'vz-input__append-icon',
	INPUT_PREPEND_ICON = 'vz-input__prepend-icon',
	INPUT_PASSWORD_TOGGLE = 'vz-input__show-password-toggle',
	INPUT_FIELD_WRAPPER = 'vz-input__field-wrapper',
};

/**
 * TODO dynamically prepend icon based on type
 * TODO implement slots logic for (prepend, append, helperText) 
 * TODO implement clearable logic ✅
 * TODO implement password toggle logic 
 * TODO styling the dot (make it more larger without resize the input) for the password toggle
 * TODO define emit events for the component (update:modelValue, togglePassword, clear) ✅
 * TODO document the component
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
	floatLabel: {
		type: Boolean,
		default: false,
	},
	disabled: {
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
	inheritsAttrs: false,
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
				isDisabled: props.disabled || undefined,
				hasLabel: props.label || undefined,
				hasHelperText: props.helperText || undefined,
				hasAppendIcon: !!(slots.append || props.appendIcon),
				hasPrependIcon: !!(slots.prepend || props.prependIcon),
			}
		});

		const isPasswordToggle = computed(() => {
			return props.type === 'password';
		})

		// const isPassword = computed(() => {
		// })

		const isClearable = computed(() => {
			return props.clearable && !props.disabled && props.modelValue !== '';
		})

		const {
			hasLabel,
			isDisabled,
			hasHelperText,
			hasAppendIcon,
			hasPrependIcon
		} = booleanContext.value;

		const componentClasses = computed(() => {
			return {
				color: useColor(NAMESPACES.INPUT, props.color as string),
				disabled: isDisabled && NAMESPACES.INPUT_DISABLED,
			}
		});

		const componentAttrs = computed(() => {
			return {
				...attrs,
				'name': props.name || componentID,
				'aria-disabled': isDisabled || undefined,
				'data-disabled': isDisabled || undefined,
				'data-vz-component': Helpers.toPascalCase(NAMESPACES.INPUT, '-'),
			};
		});

		// * Methods
		function inputRef(el: HTMLElement) { 
			return input.value = el;
		}
	
		function onClear(e: Event) {
			e.stopPropagation();
			emit('update:modelValue', '');
			emit('clear');
		}

		function onTogglePassword() {
			showPassword.value = !showPassword.value;
			emit('togglePassword', showPassword.value);
		}

		function onInput(e: Event) {
			const target = e.target as HTMLInputElement;
			emit('update:modelValue', target.value);
		}

		return {
			inputRef,
			onInput,
			instance,
			hasLabel,
			isDisabled,
			onClear,
			isClearable,
			showPassword,
			componentID,
			hasHelperText,
			hasAppendIcon,
			hasPrependIcon,
			componentAttrs,
			isPasswordToggle,
			onTogglePassword,
			componentClasses,
		};
	},
	render() {
		const { color, disabled } = this.componentClasses;
		console.log(this.isClearable);
		return (
			<div class={[
					NAMESPACES.INPUT,
					color,
					disabled
				]}
				data-vz-component={this.componentAttrs['data-vz-component']}
			>	
				{/* render if has prepend icon  */}
				{ this.hasPrependIcon && (
					<div class={[NAMESPACES.INPUT_PREPEND_ICON, NAMESPACES.INPUT_ICON]}>
						<i><Icon icon={this.prependIcon.icon}/></i>
					</div>
				)}

				<div class={NAMESPACES.INPUT_FIELD_WRAPPER}>
					<input
						ref={this.inputRef}
						class={NAMESPACES.INPUT_FIELD}
						type={this.showPassword ? 'text' : this.type} 
						placeholder={this.instance.attrs.placeholder || ""}
						value={this.modelValue}
						onInput={this.onInput}
						disabled={this.isDisabled}
						name={this.componentAttrs['name']}
						aria-disabled={this.componentAttrs['aria-disabled']}
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
						<i><Icon icon={this.appendIcon.icon}/></i>
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