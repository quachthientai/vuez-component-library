import { makePropsFactory } from "@/utils/makePropFactory";
import { generateComponentId } from "@/utils/ComponentIDGenerator";
import { isIncluded, Helpers } from "@/utils/helpers";
import { RadioGroupKey } from "@/constants/injectionKey";
import { RadioModel } from "@/components/Radio/RadioType";
import { Radio } from "./Radio";
import { makeDirectionProp, useDirection } from "@/composable/direction";
import { makeColorProp, useColor } from "@/composable/color";
import { computed, defineComponent, type PropType, provide, Ref, toRef, getCurrentInstance } from "vue";


enum NAMESPACES {
   RADIO_GROUP = 'vz-radio-group',
   RADIO_GROUP_LABEL = 'vz-radio-group__label',
   RADIO_GROUP_HORIZONTAL = 'vz-radio-group--horizontal',
   RADIO_GROUP_VERTICAL = 'vz-radio-group--vertical',
   RADIO_GROUP_DISABLED = 'vz-radio-group--disabled',
}

enum RadioGroupDirection {
   HORIZONTAL = 'horizontal',
   VERTICAL = 'vertical',
}

const vRadioGroupProps = makePropsFactory({
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
   /**
    * Used to define the direction of the radio group.
    * @default vertical
    * @type {'horizontal' | 'vertical}
    * @name direction
    */
   ...makeDirectionProp(Object.values(RadioGroupDirection), RadioGroupDirection.VERTICAL),
   /**
    * Used to define the color of the radio group.
    * @default primary
    * @type {'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'}
    * @name color
    */
   ...makeColorProp([
      'primary',
      'secondary',
      'success',
      'info',
      'warning',
      'danger',
   ], 'primary')
});

const RadioGroup = defineComponent({
   name: 'RadioGroup',
   props: vRadioGroupProps,
   inheritAttrs: false,
   emits: {
      'update:modelValue': (value: any) => {
         return value;
      },
   },
   setup(props, { slots, emit, attrs }) {
      // * Get component ID * 
      const componentID = generateComponentId(NAMESPACES.RADIO_GROUP);

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
      
      const componentClasses = computed(() => {
         return {
            direction: useDirection(NAMESPACES.RADIO_GROUP, props.direction as string),
            disabled: isDisabled ? NAMESPACES.RADIO_GROUP_DISABLED : undefined,
         }
      })

      const componentAttrs = computed(() => {
         return {
            ...attrs,
            'role': 'radiogroup',
            'name': hasName ? props.name : componentID,
            'data-disabled': isDisabled || undefined,
            'aria-labelledby': props.label,
            'data-vz-component': Helpers.toPascalCase(NAMESPACES.RADIO_GROUP, '-'),
         };
      });

      // * Methods */
      function onChange(value: any) {
         emit('update:modelValue', value);
      }

      // * Provide RadioGroupContextKey */
      provide(RadioGroupKey, {
         value: toRef(props, 'modelValue') as Ref,
         color: toRef(props, 'color') as Ref<string>,
         disabled: toRef(props, 'disabled') as Ref<boolean>,
         onChange,
      });

      return {
         hasLabel,
         componentID,
         componentAttrs,
         componentClasses,
         hasOptions,
      }
   },
   render() {
      const { direction, disabled } = this.componentClasses;
      return (
         <div class={[NAMESPACES.RADIO_GROUP,
               disabled,
               direction,
            ]} 
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