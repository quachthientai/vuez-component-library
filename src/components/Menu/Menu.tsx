import { makePropsFactory } from "@/utils/makePropFactory";
import { Ref, RendererElement, RendererNode, computed, defineComponent, getCurrentInstance, nextTick, onBeforeMount, onMounted, provide, ref, toRef, useSlots, watch } from "vue";
import { MenuKey } from "@/constants/injectionKey";
import { DOM } from "@/utils/DOM";
import { generateComponentId } from "@/utils/ComponentIDGenerator";

const NAMESPACE = 'vz-menu';

const vMenuProps = makePropsFactory({
   openOnClick: {
      type: Boolean,
      default: true,
   },
   openOnHover: {
      type: Boolean,
      default: false,
   },
   
})

const Menu = defineComponent({
   name: 'Menu',
   props: vMenuProps,
   setup(props, { slots, attrs }) {
      const isOpen = ref(false)
      const root = ref<HTMLElement>(null)

      let menuTrigger = ref<HTMLElement>(null)
      const menuTriggerID = computed(() => {
         return generateComponentId('vz-menu-trigger')
      })

      const menuList = ref<HTMLElement>(null)
      const menuListID = computed(() => {
         return generateComponentId('vz-menu-list')
      })

      // const slot = useSlots();
      
      function rootRef(el: HTMLElement) {
         return root.value = el;
      }
      
      function toggleMenu() {
         isOpen.value = !isOpen.value  
         console.log(isOpen.value);
      }

      

      provide(MenuKey, {
         openOnClick: toRef(props, 'openOnClick') as Ref<boolean>,
         openOnHover: toRef(props, 'openOnHover') as Ref<boolean>,
         menuTriggerRef: menuTrigger,
         menuTriggerID: menuTriggerID,
         menuListRef: menuList,
         menuListID: menuListID,
         isOpen: isOpen,
         toggleMenu: toggleMenu
      })

      onMounted(async () => {
         nextTick(() => {
            menuTrigger.value = DOM.findSingle(document, `#${menuTriggerID.value}`);
            menuList.value = DOM.findSingle(document, `#${menuListID.value}`);
         })
      })

      return {
         rootRef,
         root
      }
      
   },
   render() {
      // debugger;
      return (
         <div class={NAMESPACE}
            ref={this.rootRef}>
            {/* <div id="menu-button">
               {Array.from(this.$slots.default()).find((node) => node.type.name === 'MenuButton')}
            </div>
            <div id="menu-list">
               {Array.from(this.$slots.default()).find((node) => node.type.name === 'MenuList')}
            </div> */}
            
            
            {this.$slots.default?.()}
         </div>
      )
   },
})

type MenuType = InstanceType<typeof Menu>

export {
   Menu,
   MenuType
}