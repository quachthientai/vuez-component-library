import { makePropsFactory } from "@/utils/makePropFactory";
import { generateComponentId } from "@/utils/ComponentIDGenerator";
import { isIncluded, Helpers } from "@/utils/helpers";

import { RadioModel } from "@/components/Radio/RadioType";
import { Radio } from "./Radio";
import { ComponentInternalInstance, computed, defineComponent, type PropType } from "vue";

const NAMESPACE = 'vz-radio-group';

enum RadioGroupDirection {
   HORIZONTAL = 'horizontal',
   VERTICAL = 'vertical',
}

const vRadioGroupProps = makePropsFactory({
   direction: {
      type: String as PropType<RadioGroupDirection>,
      default: RadioGroupDirection.VERTICAL,
      validator: (value: string) => {
         return isIncluded(Object.values(RadioGroupDirection), value);
      }
   },
   label: {
      type: String,
   },
   model: {
      type: Array as PropType<RadioModel[]>,
      default: () => [],
   }
});

const RadioGroup = defineComponent({
   name: 'RadioGroup',
   props: vRadioGroupProps,
   inheritAttrs: false,
   emits: {
      'update:modelValue': (payload: {
         originalEvent: Event,
         currentInstance: ComponentInternalInstance,
      }) => {
         return payload.originalEvent && payload.currentInstance;
      },
   },
   setup(props, { slots, emit, attrs }) {
      // * Get component ID * 
      const componentID = generateComponentId(NAMESPACE);
      
      // * Computed properties */
      const hasModel = computed(() => {
         return (props.model as RadioModel[]).length > 0
      });
      
      const componentAttrs = computed(() => {
         return {
            ...attrs,
            'role': 'radiogroup',
            'aria-labelledby': props.label,
            'data-vz-component': Helpers.toPascalCase(NAMESPACE, '-'),
         };
      });


      return {
         componentID,
         componentAttrs,
         hasModel,
      }
   },
   render() {
      return (
         <div class={NAMESPACE} 
            {...this.componentAttrs}>
            
            <label>{this.label}</label>
            {this.$slots.default?.()}
            <div class="testControl"> 
               {this.hasModel && (this.model as RadioModel[])?.map((radio) => {
                  return (
                     <Radio 
                        v-model={radio.checked}
                        {...radio}
                     />
                  )
               })}
            </div>
            
         </div>
      )
   }
   
});

type RadioGroupType = InstanceType<typeof RadioGroup>;

export {
   RadioGroup,
   RadioGroupType,
}