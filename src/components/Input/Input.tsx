import { makePropsFactory } from '@/utils/makePropFactory';
import { generateComponentId } from '@/utils/ComponentIDGenerator';
import { Helpers } from '@/utils/helpers';
import { Icon, addIcon } from "@iconify/vue";
import { computed, defineComponent, type PropType, provide, Ref, toRef, getCurrentInstance, ref } from 'vue';
import { makeIconProps } from '@/composable/icon';
import { makeColorProp, useColor } from '@/composable/color';

enum NAMESPACES {
	INPUT = 'vz-input',
	INPUT_CONTROL = 'vz-input__control',
	INPUT_LABEL = 'vz-input__label',
	INPUT_DISABLED = 'vz-input--disabled',
	INPUT_APPEND_ICON = 'vz-input__append-icon',
	INPUT_PREPEND_ICON = 'vz-input__prepend-icon',
};

const vInputProps = makePropsFactory({
	value: {
		default: undefined,
	},
	modelValue: {
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
	emits: {
		'update:modelValue': (value: any) => {
			return value;
		}
	},
	setup(props, { slots, emit, attrs }) {
		const instance = getCurrentInstance();

		const componentID = generateComponentId(NAMESPACES.INPUT);

		const booleanContext = computed(() => {
			return {
				isDisabled: props.disabled || undefined,
				isPassword: props.type === 'password' || undefined,
				hasLabel: props.label || undefined,
				hasAppendIcon: props.appendIcon || undefined,
				hasPrependIcon: props.prependIcon || undefined,
			}
		});
		const showPassword = ref(false);
		const root = ref<HTMLElement>(null);
		const eye = ref<HTMLElement>(null);

		const {
			hasLabel,
			isDisabled,
			isPassword,
			hasAppendIcon,
			hasPrependIcon
		} = booleanContext.value;

		const inputType = computed(() => {
			return isPassword ? 'password' : props.type;
		})

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

		function onChange(e: Event) {
			const target = e.target as HTMLInputElement;
			if(target.value) {
				emit('update:modelValue', target.value);
			}
		}

		function rootRef(el: HTMLElement) {
			return root.value = el;
		}

		function eyeRef(el: any) {
			return eye.value = el;
		}

		function onPasswordReveal(e: Event) {
			// console.log(e);
			e.stopPropagation();
			e.preventDefault();
			const target = root.value as HTMLInputElement;
			
			showPassword.value = !showPassword.value;
			if(target.type === 'password') {
				target.type = 'text';
			} else {
				target.type = 'password';
			}
			// inputType.value = inputType.value === 'password' ? 'text' : 'password';
			// inputType.value === 'password' ? inputType.value = 'text' : inputType.value = 'password';
			
			
		}

		return {
			instance,
			hasLabel,
			root,
			rootRef,
			eyeRef,
			onChange,
			inputType,
			showPassword,
			onPasswordReveal,
			isDisabled,
			isPassword,
			componentID,
			hasAppendIcon,
			hasPrependIcon,
			componentAttrs,
			componentClasses
		};
	},
	render() {
		const { color, disabled } = this.componentClasses; 
		console.log(this.type)
		return (
			<div class={[
					NAMESPACES.INPUT,
					color,
					disabled
				]}
				data-vz-component={this.componentAttrs['data-vz-component']}
			>	
				{ this.hasPrependIcon && (
					<div class={NAMESPACES.INPUT_PREPEND_ICON}>
						<Icon 
							icon={this.prependIcon.icon} 
						/>
					</div>
				)}

				<input class={NAMESPACES.INPUT_CONTROL} 
					type={this.type}
					ref={this.rootRef}
					placeholder={this.instance.attrs.placeholder || ""}
					value={this.modelValue}
					onChange={this.onChange}
					disabled={this.isDisabled}
					name={this.componentAttrs['name']}
					id={this.instance.attrs.id || this.componentID}
					aria-disabled={this.componentAttrs['aria-disabled']}
				/>

				<div class={NAMESPACES.INPUT_APPEND_ICON}>
						<i class="cursor-pointer" onClick={this.onPasswordReveal}>
									<Icon  icon={this.showPassword ? 'mdi:eye' : 'mdi:eye-off'}/>
								</i>
						
					</div>
  				{/* { (this.hasAppendIcon || this.isPassword ) && (
					<div class={NAMESPACES.INPUT_APPEND_ICON}>
						{ this.isPassword 
							? 	<i class="cursor-pointer" onClick={this.onPasswordReveal}>
									<Icon  icon={this.showPassword ? 'mdi:eye' : 'mdi:eye-off'}/>
								</i>
							: <Icon 
								icon={this.appendIcon.icon} 
							/>
						} 
						
					</div>
				)} */}

				{this.hasLabel && (
					<label class={NAMESPACES.INPUT_LABEL}
						for={this.instance.attrs.id || this.componentID}
					>
						{this.label}
					</label>
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