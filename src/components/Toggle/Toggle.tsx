import { makePropsFactory } from "@/utils/makePropFactory";
import { makeColorProp, useColor } from "@/composable";
import { computed, defineComponent, getCurrentInstance } from "vue";
import { generateComponentId } from "@/utils/ComponentIDGenerator";
import { Helpers } from "@/utils/helpers";

enum NAMESPACES { 
   TOGGLE = 'vz-toggle',
   TOGGLE_INPUT = 'vz-toggle__input',
   TOGGLE_SLIDER = 'vz-toggle__slider',
   TOGGLE_DISABLED = 'vz-toggle--disabled',
   TOGGLE_LABEL = 'vz-toggle__label',
}

const vToggleProps = makePropsFactory({
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
   label: {
      type: String,
      default: undefined,
		required: true
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

		// * Get the current instance */
		const instance = getCurrentInstance();

      const checked = computed(() => {
			if(props.modelValue === undefined) return false;
         return props.modelValue;
      })

		const hasLabel = computed(() => {
			return props.label || slots.default;
		})

      const componentAttrs = computed(() => {
         return {
            ...attrs,
            'role': 'switch',
            'aria-checked': checked.value,
            'name': props.name || componentID,
            'aria-disabled': props.disabled,
            'data-disabled': props.disabled,
            'data-vz-component': Helpers.toPascalCase(NAMESPACES.TOGGLE, '-'),
         }
      })

      const componentClasses = computed(() => {
         return {
            color: useColor(NAMESPACES.TOGGLE, props.color as string),
            disabled: props.disabled && NAMESPACES.TOGGLE_DISABLED,
         }
      })

      function onChange(e:Event) {
         const target = e.target as HTMLInputElement;

         emit('update:modelValue', target.checked);
      };

      return {
         hasLabel,
         onChange,
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
            data-vz-component={this.componentAttrs['data-vz-component']}
         >
            <input 
					type="checkbox"
               onChange={this.onChange} 
               disabled={this.disabled}
               checked={this.checked}
					class={NAMESPACES.TOGGLE_INPUT}
               name={this.componentAttrs['name']}
               role={this.componentAttrs['role']}
               aria-checked={this.componentAttrs['aria-checked']}
               aria-disabled={this.componentAttrs['aria-disabled']}
            />
            <div class={NAMESPACES.TOGGLE_SLIDER}></div>
            { this.hasLabel && (
               <span class={NAMESPACES.TOGGLE_LABEL}>
                  { this.label }
                  { this.$slots.default?.() }
               </span>
            )}
         </label>
      )
   }
});

type ToggleType = InstanceType<typeof Toggle>;

export {
   Toggle,
   ToggleType
}