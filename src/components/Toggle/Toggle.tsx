import { makePropsFactory } from "@/utils/makePropFactory";
import { makeColorProp, useColor } from "@/composable";
import { ComponentInternalInstance, computed, defineComponent, getCurrentInstance, inject } from "vue";
import { generateComponentId } from "@/utils/ComponentIDGenerator";
import { Helpers } from "@/utils/helpers";

enum NAMESPACES { 
   TOGGLE = 'vz-toggle',
   TOGGLE_INPUT = 'vz-toggle__input',
   TOGGLE_SLIDER = 'vz-toggle__slider',
   TOGGLE_DISABLED = 'vz-toggle--disabled',
}

const vToggleProps = makePropsFactory({
   modelValue: {
      default: undefined,
   },
   name: {
      type: String,
      default: NAMESPACES.TOGGLE,
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

const Toggle = defineComponent({
   name: 'Toggle',
   props: vToggleProps,
   inheritAttrs: false,
   emits: ['update:modelValue'],
   setup(props, { slots, emit, attrs}) {
      // * Get an unique component ID */ 
      const componentID = generateComponentId(NAMESPACES.TOGGLE);

      const booleanContext = computed(() => {
         return {
            isDisabled: props.disabled,
            isChecked: props.modelValue
         }
      })

      const {
         isDisabled,
         isChecked,
      } = booleanContext.value;

      const checked = computed(() => {
         return props.modelValue;
      })

      const componentAttrs = computed(() => {
         return {
            ...attrs,
            'aria-checked': checked.value,
            'aria-disabled': isDisabled || undefined,
            'data-vz-component': Helpers.toPascalCase(NAMESPACES.TOGGLE, '-'),
            'data-disabled': isDisabled || undefined,
         }
      })

      const componentClasses = computed(() => {
         return {
            color: useColor(NAMESPACES.TOGGLE, props.color as string),
            disabled: props.disabled ? NAMESPACES.TOGGLE_DISABLED : '',
         }
      })

      function onChange(e:Event) {
         const target = e.target as HTMLInputElement;

         emit('update:modelValue', target.checked);
      };

      return {
         onChange,
         isDisabled,
         isChecked,
         checked,
         componentAttrs,
         componentClasses,
         componentID,
      }
   },
   render() {
      const { color, disabled } = this.componentClasses;
      return (
         <label class={[
               NAMESPACES.TOGGLE,
               color,
               disabled
            ]}
         >
            <input type="checkbox"
               role="switch"
               disabled={this.isDisabled}
               aria-checked={this.componentAttrs['aria-checked']}
               aria-disabled={this.componentAttrs['aria-disabled']}
               onChange={this.onChange} 
               checked={this.checked.value} 
               class="vz-toggle__input" 
            />
            <span class="vz-toggle__slider"></span>
         </label>
      )
   }
});

type ToggleType = InstanceType<typeof Toggle>;

export {
   Toggle,
   ToggleType
}