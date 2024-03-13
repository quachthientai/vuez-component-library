import { makePropsFactory } from "@/utils/makePropFactory";
import { generateComponentId } from "@/utils/ComponentIDGenerator";
import { isIncluded, Helpers } from "@/utils/helpers";
import { CheckboxGroupKey } from "@/constants/injectionKey";
import { CheckboxModel } from "../Checkbox/type";
import { Checkbox } from "../Checkbox/Checkbox";
import { makeDirectionProp, useDirection } from "@/composable/direction";
import { makeColorProp, useColor } from "@/composable/color";
import { computed, defineComponent, type PropType, provide, Ref, toRef, getCurrentInstance, ComputedRef } from "vue";

enum NAMESPACES {
   CHECKBOX_GROUP = 'vz-checkbox-group',
   CHECKBOX_GROUP_LABEL = 'vz-checkbox-group__label',
   CHECKBOX_GROUP_HORIZONTAL = 'vz-checkbox-group--horizontal',
   CHECKBOX_GROUP_VERTICAL = 'vz-checkbox-group--vertical',
   CHECKBOX_GROUP_DISABLED = 'vz-checkbox-group--disabled',
};

enum CheckboxGroupDirection {
   HORIZONTAL = 'horizontal',
   VERTICAL = 'vertical',
};

const vCheckboxGroupProps = makePropsFactory({
   label: {
      type: String,
      default: undefined,
		required: true,
   },
   options: {
      type: Array as PropType<CheckboxModel[]>,
      default: () => [],
   },
   modelValue: {
      default: undefined,
      type: Array as PropType<string[]>,
   },
   name: {
      type: String,
   },
   disabled: {
      type: Boolean,
      default: false,
   },
   ...makeDirectionProp(Object.values(CheckboxGroupDirection), CheckboxGroupDirection.VERTICAL),
   ...makeColorProp([
      'primary',
      'secondary',
      'success',
      'info',
      'warning',
      'danger',
   ], 'primary'),
});

const CheckboxGroup = defineComponent({
   name: 'CheckboxGroup',
   props: vCheckboxGroupProps,
   inheritAttrs: false,
   emits: {
      'update:modelValue': (value: string[]) => {
         return value;
      }
   },
   setup(props, { slots, emit, attrs}) {
      // * Get an unique component ID */
      const componentID = generateComponentId(NAMESPACES.CHECKBOX_GROUP);

      const booleanContext = computed(() => {
         return {
            hasOptions: (props.options as CheckboxModel[]).length > 0,
            hasLabel: props.label !== undefined,
            hasName: props.name !== undefined,
            isDisabled: props.disabled,
         };
      });

      const { 
         hasName,
         hasLabel,
         hasOptions,
         isDisabled,
      } = booleanContext.value;
      
      const componentClasses = computed(() => {
         return {
            direction: useDirection(NAMESPACES.CHECKBOX_GROUP, props.direction as string),
            disabled: isDisabled && NAMESPACES.CHECKBOX_GROUP_DISABLED,
         };
      });

      const componentAttrs = computed(() => {
         return {
            ...attrs,
            'role': 'group',
            'name': hasName ? props.name : componentID,
            'data-disabled': isDisabled || undefined,
            'aria-labelledby': Helpers.toPascalCase(props.label as string, ' '),
            'data-vz-component': Helpers.toPascalCase(NAMESPACES.CHECKBOX_GROUP, '-')
         };
      });
      
      // * Method * /
      function onChange(value: string) {
         let newModelValue : string[] = [];
         let modelValue = props.modelValue as string[];
         
         if(Helpers.isIncluded(modelValue, value)) {
            newModelValue = modelValue.filter((item) => item !== value);
         } else {
            newModelValue = [...modelValue, value];
         };
         
         return emit('update:modelValue', newModelValue);
      }

      // * Provide CheckboxGroupKey Context */
      provide(CheckboxGroupKey, {
         value: toRef(props, 'modelValue') as ComputedRef<string[]>,
         color: toRef(props, 'color') as Ref<string>,
         disabled: toRef(props, 'disabled') as Ref<boolean>,
         onChange,
      })
      
      return {
         hasLabel,
         hasOptions,
         componentID,
         componentAttrs,
         componentClasses,
      }
   },
   render() {
      const { direction, disabled } = this.componentClasses;
      return (
         <div class={[
               NAMESPACES.CHECKBOX_GROUP,
               disabled,
               direction
            ]}
            {...this.componentAttrs}
         >
            {this.hasLabel && (
               <label id={Helpers.toPascalCase(this.label, ' ')} class={NAMESPACES.CHECKBOX_GROUP_LABEL}>
                  {this.label}
               </label>
            )}

            {this.$slots.default?.()}
				{/* {this.$slots.option?.()} */}
            
            {this.hasOptions && (this.options as CheckboxModel[])?.map((checkbox) => {
               return (
                  <Checkbox
                     {...checkbox}
                  />
               )
            })}
            
         </div>
      )
   }
});

type CheckboxGroupType = InstanceType<typeof CheckboxGroup>;

export {
   CheckboxGroup,
   CheckboxGroupType,
}