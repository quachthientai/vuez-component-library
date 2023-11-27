import { MenuKey } from "@/constants/injectionKey"
import { Button, vButtonProps } from "../Button/Button"
import { defineComponent, inject, nextTick, onMounted, ref, watch } from "vue"

const NAMESPACE = 'vz-menu-button'

const MenuButton = defineComponent({
   name: 'MenuButton',
   props: vButtonProps,
   inheritAttrs: false,
   setup(props, { slots, attrs }) {
      const listID = ref<string>(null)
      const MenuContext = inject(MenuKey);
      

      onMounted(() => {
         
      })

      return {
         MenuContext,
         attrs,
         listID
      }
   },
   render() {

      const { openOnClick, openOnHover, isOpen, toggleMenu, menuListRef, menuTriggerRef, menuListID, menuTriggerID } = this.MenuContext;
      
      
      return (
         <>
            <Button {...this.$props} {...this.attrs}
               aria-haspopup="true"
               aria-expanded={ isOpen.value }
               aria-controls={ menuListID.value }
               id={ menuTriggerID.value }
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
