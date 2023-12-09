import { MenuKey } from "@/constants/injectionKey"
import { Button, vButtonProps } from "../Button/Button"
import { DOM } from "@/utils/DOM"
import { extractRefHTMLElement } from "@/utils/extractRefHTMLElement"
import { defineComponent, inject, nextTick, onMounted, ref, watch, toRef, computed, onBeforeMount, onUnmounted } from "vue"

const NAMESPACE = 'vz-menu-button'

const MenuButton = defineComponent({
   name: 'MenuButton',
   props: vButtonProps,
   inheritAttrs: false,
   setup(props, { slots, attrs }) {
      const MenuContext = inject(MenuKey);
      const { isOpen, menuListID, menuTriggerID, show, hide } = MenuContext;

      const root = ref<HTMLElement>(null)

      const componentAttrs = computed(() => {
         return {
            ...attrs,
            'aria-haspopup': true,
            'aria-expanded': isOpen.value,
            'aria-controls': menuListID.value,
            id: menuTriggerID.value,
         }
      })
      
      function rootRef(el: HTMLElement) {
         root.value = el;
      }
      
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
         <Button ref={this.rootRef}
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
