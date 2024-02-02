import { makePropsFactory } from "@/utils/makePropFactory";
import { makeColorProp, useColor } from "@/composable";
import { ComponentInternalInstance, computed, defineComponent, getCurrentInstance, inject } from "vue";
import { generateComponentId } from "@/utils/ComponentIDGenerator";
import { Helpers } from "@/utils/helpers";

import { RadioGroupKey } from "@/constants/injectionKey";

const NAMESPACE = {
   RADIO: 'vz-radio',
   RADIO_INPUT: 'vz-radio-input',
   RADIO_LABEL: 'vz-radio-label',
}

const vRadioProps = makePropsFactory({
   label: {
      type: String,
      required: true,
   },
   modelValue: {
      default: undefined,
   },
   value: {
      default: undefined,
   },
   name: {
      type: String,
      default: NAMESPACE.RADIO_INPUT,
   },
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
      'update:modelValue': (payload: {
         originalEvent: Event,
         currentInstance: ComponentInternalInstance,
         value: any,
      }) => {
         return payload.originalEvent 
            && payload.currentInstance
            && payload.value;
      },
   },
   setup(props, { slots, emit, attrs }) {
      // * Get an unique component ID */
      const componentID = generateComponentId(NAMESPACE.RADIO);

      // * Get the current instance */
      const instance = getCurrentInstance();

      //* Inject the RadioGroupContext key */
      const RadioGroupContext = inject(RadioGroupKey);
      const { value,
         disabled,
      } = RadioGroupContext;

      // * Refs */

      // * Composables */
      const color = useColor('radio', props.color as string);

      // * Computed properties *
      const checked = computed(() => {
         
         if(RadioGroupContext?.value) {
            return props.value === value.value;
         }

         return props.modelValue;
      })

      const componentAttrs = computed(() => {
         return {
            ...attrs,
            'aria-checked': checked.value,
            'tabindex': props.disabled ? -1 : 0,
            'data-vz-component': Helpers.toPascalCase(NAMESPACE.RADIO, '-'),
            'data-disabled': props.disabled,
         }
      });

      

      // * Methods *
      function onChange(e: Event) {
         const target = e.target as HTMLInputElement;
         // console.log(target.value);
         RadioGroupContext?.onChange(target.value);
         // emit('update:modelValue', {
         //    originalEvent: e,
         //    currentInstance: instance,
         //    value: target.value,
         // });
      }

      return {
         checked,
         color,
         componentAttrs,
         componentID,
         onChange,
      }
   },
   render() {
      return (
         <div class={NAMESPACE.RADIO}
            {...this.componentAttrs}
         >
            <input
               value={this.value}
               name={this.name}
               checked={this.checked} 
               class={[
                  NAMESPACE.RADIO_INPUT,
                  this.color,
               ]} 
               id={this.componentID}       
               type="radio"
               onChange={ this.onChange }
            />
            <label class={NAMESPACE.RADIO_LABEL} for={this.componentID}>
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