import { makePropsFactory } from "@/utils/makePropFactory";
import { makeColorProp, useColor } from "@/composable";
import { ComponentInternalInstance, computed, defineComponent, getCurrentInstance, inject } from "vue";
import { generateComponentId } from "@/utils/ComponentIDGenerator";
import { Helpers } from "@/utils/helpers";
import { RadioGroupKey } from "@/constants/injectionKey";

enum NAMESPACES { 
   RADIO = 'vz-radio',
   RADIO_INPUT = 'vz-radio__input',
   RADIO_LABEL = 'vz-radio__label',
   RADIO_DISABLED = 'vz-radio--disabled',
}

const vRadioProps = makePropsFactory({
   /**
    * The fallback label of the radio
    * @type {string}
    * @default undefined
    * @name label
    * @required true
    */
   label: {
      type: String,
      required: true,
   },
   /**
    * The radio modelValue.
    * @type {any}
    * @default undefined
    * @name modelValue
    */
   modelValue: {
      default: undefined,
   },
   /**
    * The value of the radio
    * @type {string | number | boolean}
    * @default undefined
    * @name value
    * @required true
    */
   value: {
      default: undefined,
      required: true,
   },
   /**
    * The name of the radio
    * @type {string}
    * @default vz-radio
    * @name name
    */
   name: {
      type: String,
   },
   /**
    * The disabled state of the radio
    * @type {boolean}
    * @default false
    * @name disabled
    */
   disabled: {
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

const Radio = defineComponent({
   name: 'Radio',
   props: vRadioProps,
   inheritAttrs: false,
   emits: {
      'update:modelValue': (value: any) => {
         return value;
      },
   },
   setup(props, { slots, emit, attrs }) {
      // * Get an unique component ID */
      const componentID = generateComponentId(NAMESPACES.RADIO);

      // * Get the current instance */
      const instance = getCurrentInstance();
      
      //* Inject the RadioGroupContext key */
      const RadioGroupContext = inject(RadioGroupKey, null);
      
      // * Computed properties *
      const checked = computed(() => {
         if(RadioGroupContext?.value) {
            const { value } = RadioGroupContext;
            return props.value === value.value;
         };
        
         return props.value === props.modelValue;
      });

		const isDisabled = computed(() => {
			if(RadioGroupContext?.disabled.value) {
				return RadioGroupContext?.disabled.value;
			}
			return props.disabled;
		});

		const color = useColor(NAMESPACES.RADIO, RadioGroupContext?.color.value as string || props.color as string);

      const componentAttrs = computed(() => {
         return {
            ...attrs,
            'role': 'radio',
            'aria-checked': checked.value,
            'name': props.name,
            'aria-disabled': isDisabled.value,
            'data-disabled': isDisabled.value,
            'data-vz-component': Helpers.toPascalCase(NAMESPACES.RADIO, '-'),
         }
      });
      
      // * Methods * /
      function onChange(e: Event) {
         const target = e.target as HTMLInputElement;

         if(RadioGroupContext?.value) {
            const { onChange } = RadioGroupContext;
            return onChange(target.value);
         }

         emit('update:modelValue', target.value);
      }

      return {
			color,
         instance,
         checked,
         componentAttrs,
         componentID,
         isDisabled,
         onChange,
      }
   },
   render() {
      return (
         <div class={[NAMESPACES.RADIO,
               this.color,
               this.isDisabled && NAMESPACES.RADIO_DISABLED,
            ]}
            data-vz-component={this.componentAttrs['data-vz-component']}
         >
            <input
               class={NAMESPACES.RADIO_INPUT}
               type="radio"
               value={this.value}
               checked={this.checked} 
               onChange={this.onChange}
               disabled={this.isDisabled}
               name={this.componentAttrs['name']}
               role={this.componentAttrs['role']}
               id={this.instance.attrs.id || this.componentID} 
               aria-checked={this.componentAttrs['aria-checked']}
               aria-disabled={this.componentAttrs['aria-disabled']}
            />
            <label class={NAMESPACES.RADIO_LABEL} 
               for={this.instance.attrs.id || this.componentID}
            >
               {this.label}
            </label>
         </div>
      )
   }
});

type RadioType = InstanceType<typeof Radio>;

export {
   Radio,
   RadioType,
}