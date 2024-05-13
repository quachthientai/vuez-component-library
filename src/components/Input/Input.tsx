import { makePropsFactory } from '@/utils/makePropFactory';
import { generateComponentId } from '@/utils/ComponentIDGenerator';
import { Helpers } from '@/utils/helpers';
import { Icon } from "@iconify/vue";
import { computed, defineComponent, getCurrentInstance, ref, onMounted, watch, reactive, ComponentInternalInstance, inject } from 'vue';
import { makeIconProps } from '@/composable/icon';
import { makeColorProp, useColor } from '@/composable/color';
import { makeLoaderProp, useLoader } from '@/composable/loader';
import useMask, { makeMaskProp } from '@/composable/useMask';
import { Chip } from '@/components/Chip/Chip';
import { SelectKey } from '@/constants/injectionKey';

enum NAMESPACES {
	INPUT = 'vz-input',
	INPUT_ICON = 'vz-input__icon',
	INPUT_LABEL = 'vz-input__label',
	INPUT_FIELD = 'vz-input__field',
	INPUT_AFFIX = 'vz-input__affix',
	INPUT_SUFFIX = 'vz-input__suffix',
	INPUT_PREFIX = 'vz-input__prefix',
	INPUT_LOADER = 'vz-input__loader',
	INPUT_CONTROL = 'vz-input__control',
	INPUT_DETAILS = 'vz-input__details',
	INPUT_COUNTER = 'vz-input__counter',
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
 * TODO implement slots logic for (prepend, append, helperText, prefix, suffix) 
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
		default: false,
	},
	showPasswordToggle: {
		type: Boolean,
		default: false,
	},
	suffix: {
		type: String,
		default: undefined,
	},
	prefix: {
		type: String,
		default: undefined,
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
	counter: {
		type: Boolean,
		default: false,
	},
	/**
    * Defined the append or prepend icon for the button.
    * @type {IconType}
    * @default undefined
    * @name appendIcon | prependIcon
    */
   ...makeIconProps(),
	...makeMaskProp(),
	...makeLoaderProp(),
	...makeColorProp([
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
	], 'primary')
});

const Input = defineComponent({
	name: 'Input',
	props: vInputProps,
	inheritAttrs: false,
	emits: {
		'update:modelValue': null, 
		'togglePassword': null, 
		'clear': null, 
		'focus': (payload: {
			originalEvent: FocusEvent,
			currentInstance: ComponentInternalInstance,
		}) => {
			return payload.originalEvent && payload.currentInstance;
		}
	},
	setup(props, { slots, emit, attrs }) {
		const instance = getCurrentInstance();
		const componentID = generateComponentId(NAMESPACES.INPUT);

		// * Refs
		const input = ref<HTMLElement>(null);
		const showPassword = ref<boolean>(false);	
		const maskit = reactive({
			maskValue: null as Function | null,
			unmaskValue: null as Function | null,
			test: null as Function | null,
		});

		const SelectContext = inject(SelectKey, null);

		onMounted(() => {
			if (props.mask && input.value) {
				Object.assign(maskit, useMask(props, input));
			}
		});
		
		// * Computed properties
		const booleanContext = computed(() => {
			return {
				hasLabel: props.label || undefined,
				hasHelperText: props.helperText || undefined,
				hasAppendIcon: !!(slots.append || props.appendIcon),
				hasPrependIcon: !!(slots.prepend || props.prependIcon),
				hasCounter: props.counter,
			}
		});

		const hasAffix = computed(() => {
			return props.prefix || props.suffix;
		})

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
			return props.clearable && !props.disabled && props.modelValue !== '' ;
		})

		const charCounter = computed(() => {
			if(hasCounter && props.modelValue) {
				return (props.modelValue as any[] | any).length;
			}
		})

		const {
			hasLabel,
			hasCounter,
			hasHelperText,
			hasAppendIcon,
			hasPrependIcon
		} = booleanContext.value;

		const componentClasses = computed(() => {
			return {
				disabled: props.disabled && NAMESPACES.INPUT_DISABLED,
				color: useColor(NAMESPACES.INPUT, props.color as string),
				loading: useLoader(NAMESPACES.INPUT, props.loading as boolean),
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
			
			// if(props.mask) {
			// 	const { maskValue, unmaskValue, test } = maskit;
			// 	const position = target.selectionEnd;
				
			// 	//target.value += maskValue(digit, position);
			// 	let mask = maskValue(target.value, position);
			// 	// console.log('mask',mask);
				
			// 	// let unmask = unmaskValue(mask);
			// 	target.value = mask;
				
			// 	// emit('update:modelValue', unmask);
			// } else {
			// 	if(target.value) {
			// 		emit('update:modelValue', target.value);
			// 	}
			// }
			e.stopPropagation();
			emit('update:modelValue', target.value);
		}

		function onKeyDown(e: Event) {
			const target = e.target as HTMLInputElement;
			
			// console.log('onKeyDown',target.value);
		}

		function onPaste(e: Event) {
			console.log(e);
		}

		function onFocused(e: FocusEvent) {
			emit('focus', {
				originalEvent: e,
				currentInstance: instance,
			})
		}

		return {
			SelectContext,
			type,
			input,
			onInput,
			onPaste,
			onClear,
			inputRef,
			instance,
			hasAffix,
			hasLabel,
			onKeyDown,
			onFocused,
			rootAttrs,
			hasCounter,
			inputAttrs,
			charCounter,
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
		const { color, disabled, loading } = this.componentClasses;
		const maxLength = this.instance.attrs.maxlength;
		return (
			<div class={[
					color,
					loading,
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
						{ this.hasAffix && this.prefix && (
							<span class={[NAMESPACES.INPUT_PREFIX,
									NAMESPACES.INPUT_AFFIX
								]}
							>
								{this.prefix}
							</span>
						)}
						{this.$slots.default?.()}
						<input
							placeholder=""
							type={this.type}
							ref={this.inputRef}
							{...this.inputAttrs}
							onPaste={this.onPaste}
							onInput={this.onInput}
							value={this.modelValue}
							onFocus={this.onFocused}
							disabled={this.disabled}
							onKeydown={this.onKeyDown}
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

						{ this.hasAffix && this.suffix && (
							<span class={[NAMESPACES.INPUT_SUFFIX,
									NAMESPACES.INPUT_AFFIX
								]}
							>
								{this.suffix}
							</span>
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
					{/* render if loading == true  */}
					{ (this.isClearable || this.loading) && (
						<>
							{this.isClearable && !this.loading && (
								<div class={[NAMESPACES.INPUT_CLEARABLE,
										NAMESPACES.INPUT_ICON
									]}
									onClick={this.onClear}
								>
									<i><Icon icon="mdi:close-box"/></i>
								</div>
							)}

							{this.loading && (
								<div class={[NAMESPACES.INPUT_LOADER,
										NAMESPACES.INPUT_ICON
									]}
								>
									<i><Icon icon="mdi:loading"/></i>
								</div>
							)}
						</>
					)}

					{/* render if has append icon  */}
					{ this.hasAppendIcon && (
						<div class={[
								NAMESPACES.INPUT_APPEND_ICON, 
								NAMESPACES.INPUT_ICON
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
				
				{ (this.hasHelperText || this.hasCounter) && (
					<div class={NAMESPACES.INPUT_DETAILS}>
						{this.helperText && (
							<div class={NAMESPACES.INPUT_HELPER_TEXT}>
								{ this.helperText }
							</div>
						)}
						{this.counter && (
							<div class={NAMESPACES.INPUT_COUNTER}> 
								{ this.$slots.counter 
									? this.$slots.counter?.()
									: maxLength 
										? `${this.charCounter} / ${maxLength}`
										: this.charCounter 
								}
							</div>
						)}
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
	vInputProps,
};