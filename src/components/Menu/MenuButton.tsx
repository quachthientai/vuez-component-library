import { MenuKey } from "@/constants/injectionKey"
import { Button, vButtonProps } from "../Button/Button"
import { Helpers } from "@/utils/helpers"
import { defineComponent, inject, ref, computed, ComponentInternalInstance, getCurrentInstance } from "vue"

const NAMESPACE = 'vz-menu-button'

const MenuButton = defineComponent({
   name: 'MenuButton',
   props: vButtonProps,
   inheritAttrs: false,
   emits: {
      'onClick': (payload: {
         originalEvent: Event,
         currentInstance: ComponentInternalInstance,
      }) => {
         return payload.originalEvent && payload.currentInstance
      },
   },
   setup(props, { slots, emit, attrs }) {
      //* Inject the MenuContext key */
      const MenuContext = inject(MenuKey);
      const { isOpen, menuListID, menuTriggerID, show, hide } = MenuContext;

      //* Get the current instance */
      const instance = getCurrentInstance();

      //* Refs */
      const root = ref<HTMLElement>(null)

      //* Computed properties */
      const componentAttrs = computed(() => {
         return {
            ...attrs,
            'aria-haspopup': true,
            'aria-expanded': isOpen.value,
            'aria-controls': menuListID.value,
            'data-vz-component': Helpers.toPascalCase(NAMESPACE, '-'),
            id: menuTriggerID.value,
         }
      })
      
      /**
       * Sets the root element (obtain by using template refs) to the root ref.
       * @see https://vuejs.org/guide/essentials/template-refs.html#template-refs
       * @param el The root element.
       */
      function rootRef(el: HTMLElement) {
         root.value = el;
      }
      
      /**
       * Handles the click event on the root element.
       * @param e The click event.
       */
      function handleClick(e: Event) {
         // emit('onClick', {
         //    originalEvent: e,
         //    currentInstance: instance,
         // })

         if(isOpen.value) {
            hide()
         } else {
            show()
         }
      }

      return {
         MenuContext,
         componentAttrs,
         handleClick,
         root,
         rootRef,
      }
   },
   render() {
      return (
         <Button 
            class={ NAMESPACE }
            ref={this.rootRef}
            {...this.$props} 
            {...this.componentAttrs}
            onClick={ this.handleClick }
         >
            { this.$slots.default?.() }   
         </Button>
      )
   },
})

type MenuButtonType = InstanceType<typeof MenuButton>

export {
   MenuButton,
   MenuButtonType
}
