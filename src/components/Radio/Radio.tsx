import { makePropsFactory } from "@/utils/makePropFactory";
import { makeColorProp, useColor } from "@/composable";
import { ComponentInternalInstance, computed, defineComponent } from "vue";
import { generateComponentId } from "@/utils/ComponentIDGenerator";
import { Helpers } from "@/utils/helpers";

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
   value: {
      type: [String, Number, Boolean],
      required: true,
   },
   name: {
      type: String,
      default: NAMESPACE.RADIO_INPUT,
   },
   disabled: {
      type: Boolean,
      default: false,
   },
   ...makeColorProp(),
});

const Radio = defineComponent({
   name: 'Radio',
   props: vRadioProps,
   inheritAttrs: false,
   emits: {
      'update:modelValue': (payload: {
         originalEvent: Event,
         currentInstance: ComponentInternalInstance,
      }) => {
         return payload.originalEvent && payload.currentInstance
      },
   },
   setup(props, { slots, emit, attrs }) {
      const color = useColor('radio', props.color as string);
      
      const componentID = generateComponentId(NAMESPACE.RADIO);

      const componentAttrs = computed(() => {
         return {
            ...attrs,
            'data-vz-component': Helpers.toPascalCase(NAMESPACE.RADIO, '-'),
         }
      })

      return {
         color,
         componentAttrs,
         componentID,
      }
   },
   render() {

      return (
         <div class={NAMESPACE.RADIO}
            {...this.componentAttrs}
         >
            <input checked class={[
               NAMESPACE.RADIO_INPUT,
               this.color
            ]} 
               id={this.componentID}
               type="radio" 
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