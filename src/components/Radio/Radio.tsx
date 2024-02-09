import { makePropsFactory } from "@/utils/makePropFactory";
import { makeColorProp, useColor } from "@/composable";
import { ComponentInternalInstance, computed, defineComponent, getCurrentInstance, inject } from "vue";
import { generateComponentId } from "@/utils/ComponentIDGenerator";
import { Helpers } from "@/utils/helpers";
import { RadioGroupKey } from "@/constants/injectionKey";
import { RadioGroup } from "./RadioGroup";

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
      default: NAMESPACES.RADIO_INPUT,
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
      
      const booleanContext = computed(() => {
         return {
            isDisabled: RadioGroupContext?.disabled.value || props.disabled,
         }
      });

      const {
         isDisabled,
      } = booleanContext.value;

      const componentAttrs = computed(() => {
         return {
            ...attrs,
            'aria-checked': checked.value,
            'aria-disabled': isDisabled || undefined,
            'data-vz-component': Helpers.toPascalCase(NAMESPACES.RADIO, '-'),
            'data-disabled': isDisabled || undefined,
         }
      });
      
      const componentClasses = computed(() => {
         return {
            color: useColor(NAMESPACES.RADIO, 
               RadioGroupContext?.color.value as string ||props.color as string
            ),
            disabled: isDisabled && NAMESPACES.RADIO_DISABLED,
         }
      })


      // * Methods *
      function onChange(e: Event) {
         const target = e.target as HTMLInputElement;

         if(RadioGroupContext?.value) {
            const { onChange } = RadioGroupContext;
            return onChange(target.value);
         }

         emit('update:modelValue', target.value);
      }

      return {
         checked,
         componentClasses,
         componentAttrs,
         componentID,
         isDisabled,
         onChange,
      }
   },
   render() {
      const { color, disabled } = this.componentClasses;

      return (
         <div class={[NAMESPACES.RADIO, disabled]}
            {...this.componentAttrs}
         >
            <input
               value={this.value}
               disabled={this.isDisabled}
               name={this.name}
               checked={this.checked} 
               class={[
                  NAMESPACES.RADIO_INPUT,
                  color,
               ]} 
               id={this.componentID}       
               type="radio"
               onChange={ this.onChange }
            />
            <label class={NAMESPACES.RADIO_LABEL} for={this.componentID}>
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