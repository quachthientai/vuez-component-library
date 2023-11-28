import { MenuKey } from "@/constants/injectionKey"
import { Button, vButtonProps } from "../Button/Button"
import { defineComponent, inject, nextTick, onMounted, ref, watch, toRef, computed } from "vue"

const NAMESPACE = 'vz-menu-button'

const MenuButton = defineComponent({
   name: 'MenuButton',
   props: vButtonProps,
   inheritAttrs: false,
   setup(props, { slots, attrs }) {
      const MenuContext = inject(MenuKey);
      const { isOpen, menuListID, menuTriggerID } = MenuContext;

      const componentAttrs = computed(() => {
         return {
            ...attrs,
            'aria-haspopup': true,
            'aria-expanded': isOpen.value,
            'aria-controls': menuListID.value,
            id: menuTriggerID.value,
         }
      })

      onMounted(() => {
      
      })

      return {
         MenuContext,
         componentAttrs,
      }
   },
   render() {
      const { openOnClick, toggleMenu } = this.MenuContext;
      return (
         <>
            <Button {...this.$props} 
               {...this.componentAttrs}
               onClick={ openOnClick ? toggleMenu : undefined }
            >
               {this.$slots.default?.()}   
            </Button>
         </>
      )
   },
})

type MenuButtonType = InstanceType<typeof MenuButton>

export {
   MenuButton,
   MenuButtonType
}
