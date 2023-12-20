import { MenuKey } from "@/constants/injectionKey"
import { Button, vButtonProps } from "../Button/Button"
import { Helpers } from "@/utils/helpers"
import { defineComponent, inject, ref, computed } from "vue"

const NAMESPACE = 'vz-menu-button'

const MenuButton = defineComponent({
   name: 'MenuButton',
   props: vButtonProps,
   inheritAttrs: false,
   setup(props, { slots, attrs }) {
      //* Inject the MenuContext key */
      const MenuContext = inject(MenuKey);
      const { isOpen, menuListID, menuTriggerID, show, hide } = MenuContext;

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
       * https://vuejs.org/guide/essentials/template-refs.html#template-refs
       * @param el The root element.
       */
      function rootRef(el: HTMLElement) {
         root.value = el;
      }
      
      /**
       * Handles the click event on the root element.
       * @param e The click event.
       */
      function handleClick(e) {
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
