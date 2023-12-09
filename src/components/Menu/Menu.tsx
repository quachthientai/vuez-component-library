import { MenuKey } from "@/constants/injectionKey";
import { generateComponentId } from "@/utils/ComponentIDGenerator";
import { DOM } from "@/utils/DOM";
import { makePropsFactory } from "@/utils/makePropFactory";
import { usePopup } from "@/composable/usePopup";
import { Ref, 
   computed, 
   defineComponent, 
   nextTick, 
   onMounted, 
   provide, 
   ref, 
   toRef,
   watch, 
} from "vue";

const NAMESPACE = 'vz-menu';

const vMenuProps = makePropsFactory({
   autoSelect: {
      type: Boolean,
      default: true,
   },
   closeOnSelect: {
      type: Boolean,
      default: true,
   },
   closeOnBlur: {
      type: Boolean,
      default: true,
   },
   // openOnClick: {
   //    type: Boolean,
   //    default: true,
   // },
   // openOnHover: {
   //    type: Boolean,
   //    default: false,
   // },
   
})

const Menu = defineComponent({
   name: 'Menu',
   props: vMenuProps,
   setup(props, { slots, attrs }) {
      const isOpen = ref<boolean>(false)
      const triggerStack = ref(0);
      const root = ref<HTMLElement>(null)

      const menuTrigger = ref<HTMLElement>(null)
      const menuTriggerID = computed(() => {
         return generateComponentId('vz-menu-trigger')
      })

      const menuList = ref<HTMLElement>(null)
      const menuListID = computed(() => {
         return generateComponentId('vz-menu-list')
      })

      function rootRef(el: HTMLElement) {
         return root.value = el;
      }
      
      function show() {
         if(isOpen.value) return;

         triggerStack.value += 1;
         isOpen.value = true;
      }

      function hide() {
         if(!isOpen.value) return;

         triggerStack.value -= 1;
         
         if(triggerStack.value <= 0) {
            triggerStack.value = 0;
            isOpen.value = false;
         }
      }

      provide(MenuKey, {
         autoSelect: toRef(props, 'autoSelect') as Ref<boolean>,
         closeOnSelect: toRef(props, 'closeOnSelect') as Ref<boolean>,
         closeOnBlur: toRef(props, 'closeOnBlur') as Ref<boolean>,
         menuTriggerRef: menuTrigger,
         menuTriggerID: menuTriggerID,
         menuListRef: menuList,
         menuListID: menuListID,
         isOpen: isOpen,
         show: show,
         hide: hide,
      })
      

      onMounted(() => {
         nextTick(() => {
            menuTrigger.value = DOM.findSingle(document, `#${menuTriggerID.value}`);
            menuList.value = DOM.findSingle(document, `#${menuListID.value}`);
         })
      })

      

      // function handleClick() {
      //    console.log('click from menu')
      // }

      return {
         rootRef,
         root,
      }
      
   },
   render() {
      // debugger;
      return (
         <div class={NAMESPACE}
            ref={this.rootRef}
            // onClick={this.handleClick}
         >
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
};
