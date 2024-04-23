import { makePropsFactory } from "@/utils/makePropFactory";
import { makeColorProp, useColor } from "@/composable";
import { ComponentInternalInstance, computed, defineComponent, getCurrentInstance, inject } from "vue";
import { generateComponentId } from "@/utils/ComponentIDGenerator";
import { Helpers } from "@/utils/helpers";
import { CheckboxGroupKey } from "@/constants/injectionKey";

enum NAMESPACES {
   CHECKBOX = 'vz-checkbox',
   CHECKBOX_INPUT = 'vz-checkbox__input',
   CHECKBOX_LABEL = 'vz-checkbox__label',
   CHECKBOX_DISABLED = 'vz-checkbox--disabled',
}

const vCheckboxProps = makePropsFactory({
   value: {
      default: undefined,
   },
   modelValue: {
      default: undefined,
   },
   name: {
      type: String,
   },
   disabled: {
      type: Boolean,
      default: false,
   },
	binary: {
		type: Boolean,
		default: false
	},
	trueValue: {
		type: Boolean,
		default: true,
	},
	falseValue: {
		type: Boolean,
		default: false
	},
   label: {
      type: String,
      default: undefined,
   },
	indeterminate: {
		type: Boolean,
		default: false,
	},
   ...makeColorProp([
      'primary',
      'secondary',
      'success',
      'info',
      'warning',
      'danger',
   ], 'primary'), 
});

const Checkbox = defineComponent({
   name: 'Checkbox',
   props: vCheckboxProps,
   inheritAttrs: false,
   emits: {
		'update:modelValue' : null,
		'change': (payload: {
			originalEvent: Event,
			currentInstance: ComponentInternalInstance
		}) => {
			return payload.originalEvent && payload.currentInstance;
		}
	},
   setup(props, { slots, emit, attrs }) {
      // * Get an unique component ID */
      const componentID = generateComponentId(NAMESPACES.CHECKBOX);

      // * Get the current instance */
      const instance = getCurrentInstance();

      // * Inject the CheckboxGroupContext key */
      const CheckboxGroupContext = inject(CheckboxGroupKey, null);

      // * Computed properties */
      const checked = computed(() => {
         if(CheckboxGroupContext?.value) {
            const { value } = CheckboxGroupContext;
            return Helpers.isIncluded(value?.value, props.value as string);
         }
			
			return props.binary 
				? props.modelValue === props.trueValue
				: Helpers.isIncluded(props.modelValue as any[] | any, props.value)
			// if(props.binary) {
			// 	return props.modelValue === props.trueValue;
			// }
			// debugger;
         // return Helpers.isIncluded(props.modelValue as any[] | any, props.value);
      });

		const isDisabled = computed(() => {
			if(CheckboxGroupContext?.value) {
				return CheckboxGroupContext.disabled.value;
			}
			return props.disabled;
		})

		const hasLabel = computed(() => {
			return !!(slots.default || props.label)
		})

      const componentAttrs = computed(() => {
         return {
            ...attrs,
            'role': 'checkbox',
				'tab-index': 0,
            'aria-checked': props.indeterminate ? 'mixed' : checked.value,
            'name': props.name || componentID,
            'aria-disabled': isDisabled.value,
            'data-disabled': isDisabled.value,
            'data-vz-component': Helpers.toPascalCase(NAMESPACES.CHECKBOX, '-'),
         }
      })

		const componentClasses = computed(() => {
			return {
				color: useColor(NAMESPACES.CHECKBOX, CheckboxGroupContext?.color.value as string || props.color as string),
				disabled: isDisabled.value && NAMESPACES.CHECKBOX_DISABLED
			}
		})

      function onChange(e: Event) {
			let value : any = props.value;
			let newModelValue : any | any[];
			let modelValue : any | any[] = props.modelValue;

         // if(CheckboxGroupContext?.value) {
         //    const { onChange } = CheckboxGroupContext;
         //    return onChange(props.value as string);
         // }

			if(props.binary) {
				newModelValue = checked.value 
					? props.falseValue 
					: props.trueValue;
			} else {
				newModelValue = Helpers.isIncluded(modelValue, value) 
					? modelValue.filter((item: any) => item !== value)
					: [...modelValue, value];
			}

         emit('update:modelValue', newModelValue);
			emit('change', {
				originalEvent: e,
				currentInstance: instance
			})
      }

      return {
         checked,
         onChange,
         instance,
			hasLabel,
			isDisabled,
         componentID,
         componentAttrs,
			componentClasses
      }
   },
   render() {
		const { color, disabled } = this.componentClasses;
      return (
         <div class={[
					color,
					disabled,
               NAMESPACES.CHECKBOX,
            ]}
            data-vz-component={this.componentAttrs['data-vz-component']}
         >
            <input class={NAMESPACES.CHECKBOX_INPUT} 
               type="checkbox"
					value={this.value}
               checked={this.checked}
               onChange={this.onChange}
               disabled={this.isDisabled}
					indeterminate={this.indeterminate}
               name={this.componentAttrs['name']}
               role={this.componentAttrs['role']}
               id={this.instance.attrs.id || this.componentID} 
               aria-checked={this.componentAttrs['aria-checked']}
               aria-disabled={this.componentAttrs['aria-disabled']}
            />
				{ this.hasLabel && (
					<label class={NAMESPACES.CHECKBOX_LABEL}
						for={this.instance.attrs.id || this.componentID}
					>
						{ this.label || this.$slots.default?.() }
					</label>
				)}
            
         </div>
      );
   }
});

type CheckboxType = InstanceType<typeof Checkbox>;

export {
   Checkbox,
   CheckboxType,
};
