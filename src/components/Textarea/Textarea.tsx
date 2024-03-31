import { makePropsFactory } from '@/utils/makePropFactory';
import { generateComponentId } from '@/utils/ComponentIDGenerator';
import { Helpers } from '@/utils/helpers';
import { makeColorProp, useColor } from '@/composable/color';
import { makeIconProps } from '@/composable/icon';
import { computed, defineComponent, type PropType, provide, Ref, toRef, getCurrentInstance, ref, watch, nextTick, onMounted } from 'vue';
import { Icon } from '@iconify/vue';
import { autoUpdate, computePosition } from '@floating-ui/vue';

/**
 * TODO - Add label, helperText slots
 * TODO - Add clear event
 */

enum NAMESPACES {
	TEXTAREA = 'vz-textarea',
	TEXTAREA_LABEL = 'vz-textarea__label',
	TEXTAREA_FIELD = 'vz-textarea__field',
	TEXTAREA_ICON = 'vz-textarea__icon',
	TEXTAREA_CONTROL = 'vz-textarea__control',
	TEXTAREA_DETAILS = 'vz-textarea__details',
	TEXTAREA_COUNTER = 'vz-textarea__counter',
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
	autoResize: {
		type: Boolean,
		default: false,
	},
	counter: {
		type: Boolean,
		default: false
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
		const instance = getCurrentInstance();
		const componentID = generateComponentId(NAMESPACES.TEXTAREA);

		// * Refs
		const input = ref<HTMLTextAreaElement>(null);
		const charCounter = ref<number>(0);

		const hasHelperText = computed(() => {
			return !!(props.helperText || slots.helperText);
		})

		const hasCounter = computed(() => {
			return props.counter;
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

		const componentClasses = computed(() => {
			return {
				color: useColor(NAMESPACES.TEXTAREA, props.color as string),
				disabled: props.disabled && NAMESPACES.TEXTAREA_DISABLED,
			}
		});

		watch(() => props.modelValue, (newValue, oldValue) => {
			if(hasCounter.value) {
				charCounter.value = (newValue as string).length;
			}
		});

		onMounted(() => {
			if(props.autoResize) {
				resize()
			}
		})

		const [rootAttrs, textareaAttrs] = Helpers.filterInputAttrs(attrs, ['class', 'style']);

		function inputRef(el: HTMLTextAreaElement) {
			return input.value = el;
		}

		function resize() {
			input.value.style.height = 'auto';
			input.value.style.height = input.value.scrollHeight + 'px';

			if(parseFloat(input.value.style.height) >= parseFloat(input.value.style.maxHeight)) {
				input.value.style.overflowY = 'scroll';
				input.value.style.height = input.value.style.maxHeight;
			} else {
				input.value.style.overflow = 'hidden';
			}
		}

		function onClear(e: Event) {
			e.stopPropagation();

			emit('update:modelValue', '');	
			emit('clear');
		}

		function onInput(e: Event) {
			const target = e.target as HTMLTextAreaElement;
			e.stopPropagation();

			emit('update:modelValue', target.value);

			if(props.autoResize) {
				resize();
			}
		}

		return {
			onClear,
			onInput,
			inputRef,
			instance,
			rootAttrs,
			hasCounter,
			isClearable,
			componentID,
			charCounter,
			hasAppendIcon,
			textareaAttrs,
			hasHelperText,
			hasPrependIcon,
			componentClasses
		};
	},

	render() {
		const { color, disabled } = this.componentClasses;
		const maxLength = this.instance.attrs.maxLength;
		
		return (
			<div class={[
					color,
					disabled,
					NAMESPACES.TEXTAREA,
				]}
				{...this.rootAttrs}
				data-disabled={this.disabled}
				data-vz-component={Helpers.toPascalCase(NAMESPACES.TEXTAREA, '-')}
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
							placeholder=""
							ref={this.inputRef}
							onInput={this.onInput}
							value={this.modelValue}
							{...this.textareaAttrs}
							disabled={this.disabled}
							aria-disabled={this.disabled}
							class={NAMESPACES.TEXTAREA_FIELD}
							name={this.name || this.componentID}
						>
							{this.$slots.default}
						</textarea>
						{ (this.label || this.$slots.label) && (
							<label class={NAMESPACES.TEXTAREA_LABEL}
								for={this.instance.attrs.id || this.componentID}
							>
								{this.label || this.$slots.label()}
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
				
				{ (this.hasHelperText || this.hasCounter) && (
					<div class={NAMESPACES.TEXTAREA_DETAILS}>
						<div class={NAMESPACES.TEXTAREA_HELPER_TEXT}>
							{ this.helperText || this.$slots.helperText?.() }
						</div>
						<div class={NAMESPACES.TEXTAREA_COUNTER}>
							{ maxLength ? `${this.charCounter} / ${maxLength}` : this.charCounter}
						</div>
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