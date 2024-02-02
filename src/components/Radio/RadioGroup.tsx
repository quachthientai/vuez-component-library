import { makePropsFactory } from "@/utils/makePropFactory";
import { generateComponentId } from "@/utils/ComponentIDGenerator";
import { isIncluded, Helpers } from "@/utils/helpers";
import { RadioGroupKey } from "@/constants/injectionKey";
import { RadioModel } from "@/components/Radio/RadioType";
import { Radio } from "./Radio";
import { ComponentInternalInstance, computed, defineComponent, watch, type PropType, provide, Ref, toRef, getCurrentInstance } from "vue";

enum NAMESPACES {
   RADIO_GROUP = 'vz-radio-group',
   RADIO_GROUP_LABEL = 'vz-radio-group__label',
}

enum RadioGroupDirection {
   HORIZONTAL = 'horizontal',
   VERTICAL = 'vertical',
}

const vRadioGroupProps = makePropsFactory({
   /**
    * Used to define the direction of the radio group.
    * @default vertical
    * @type {'horizontal' | 'vertical}
    * @name direction
    */
   direction: {
      type: String as PropType<RadioGroupDirection>,
      default: RadioGroupDirection.VERTICAL,
      validator: (value: string) => {
         return isIncluded(Object.values(RadioGroupDirection), value);
      }
   },
   /**
    * The fallback label of the radio group.
    * @type {string}
    * @default undefined
    * @name label
    */
   label: {
      type: String,
      default: undefined,
   },
   /**
    * Used to render the options of the radio group.
    * @type {RadioModel[]}
    * @default []
    * @name options
    */
   options: {
      type: Array as PropType<RadioModel[]>,
      default: () => [],
   },
   /**
    * Used to define value of the radio group.
    * @default undefined
    * @name modelValue
    */
   modelValue: {
      default: undefined,
   },
   /**
    * Used to define the unique identifier of the radio group.
    * @default undefined
    * @name name
    */
   name: {
      type: String,
   },
   /**
    * Used to disable the radio group.
    * @default false
    * @name disabled
    */
   disabled: {
      type: Boolean,
      default: false,
   },
});

const RadioGroup = defineComponent({
   name: 'RadioGroup',
   props: vRadioGroupProps,
   inheritAttrs: false,
   emits: {
      'update:modelValue': (v) => {
         return v
      },
   },
   setup(props, { slots, emit, attrs }) {
      // * Get component instance */
      const instance = getCurrentInstance();

      // * Get component ID * 
      const componentID = generateComponentId(NAMESPACES.RADIO_GROUP);

      // * Computed properties *
      const booleanContext = computed(() => {
         return {
            hasOptions: (props.options as RadioModel[]).length > 0,
            hasLabel: props.label !== undefined,
            hasName: props.name !== undefined,
            isDisabled: props.disabled,
         }
      });
      
      const {
         hasName,
         hasLabel,
         hasOptions,
         isDisabled,
      } = booleanContext.value;
      
      const componentAttrs = computed(() => {
         return {
            ...attrs,
            'role': 'radiogroup',
            'name': hasName ? props.name : componentID,
            'data-disabled': isDisabled,
            'aria-labelledby': props.label,
            'data-vz-component': Helpers.toPascalCase(NAMESPACES.RADIO_GROUP, '-'),
         };
      });

      function onChange(v: string) {
         emit('update:modelValue', v);
      }

      // * Provide RadioGroupContextKey */
      provide(RadioGroupKey, {
         value: toRef(props, 'modelValue') as Ref,
         disabled: toRef(props, 'disabled') as Ref<boolean>,
         onChange,
      })

      

      return {
         hasLabel,
         componentID,
         componentAttrs,
         hasOptions,
      }
   },
   render() {
      return (
         <div class={NAMESPACES.RADIO_GROUP} 
            {...this.componentAttrs}
         >  
            {this.hasLabel && (
               <label class={NAMESPACES.RADIO_GROUP_LABEL} for={this.componentID}>
                  {this.label}
               </label>
            )}

            {this.$slots.default?.()}
            
            {this.hasOptions && (this.options as RadioModel[])?.map((radio) => {
               return (
                  <Radio 
                     
                     {...radio}
                  />
               )
            })}
         </div>
      )
   }
   
});

type RadioGroupType = InstanceType<typeof RadioGroup>;

export {
   RadioGroup,
   RadioGroupType,
}