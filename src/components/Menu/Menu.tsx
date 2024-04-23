import { MenuKey } from "@/constants/injectionKey";
import { generateComponentId } from "@/utils/ComponentIDGenerator";
import { DOM } from "@/utils/DOM";
import { Helpers } from "@/utils/helpers";
import { makePropsFactory } from "@/utils/makePropFactory";
import { DynamicTag } from "../DynamicTag/DynamicTag";
import { useClickOutside } from "@/composable";
import { Ref, 
   computed, 
   defineComponent, 
   nextTick, 
   onMounted, 
   provide, 
   ref, 
   toRef,
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
   tag: {
      type: String,
      default: 'div',
   },
})

const Menu = defineComponent({
   name: 'Menu',
   props: vMenuProps,
   setup(props, { slots, attrs }) {
      //* Refs */
      const isOpen = ref<boolean>(false)
      const root = ref<HTMLElement>(null)
      const menuTrigger = ref<HTMLElement>(null)
      const menuList = ref<HTMLElement>(null)

      // * Composable */
      useClickOutside({
         refElement: root,
         callback: hide,
      })

      //* Computed properties */
      const menuTriggerID = computed(() => {
         return generateComponentId('vz-menu-trigger')
      })

      const menuListID = computed(() => {
         return generateComponentId('vz-menu-list')
      })

      const componentAttrs = computed(() => {
         return {
            ...attrs,
            'tabindex': -1,
            'data-vz-component': Helpers.toPascalCase(NAMESPACE, '-'),
         }
      })

      // * Methods */
      function rootRef(el: HTMLElement) {
         return root.value = el;
      }
      
      function show() {
         if(isOpen.value) return;
         isOpen.value = true;
      }

		function test() {
			console.log('hey its menu')
		}

      function hide() {
         if(!isOpen.value) return;
         isOpen.value = false;
      }

      // * Lifecycle */
      onMounted(() => {
         nextTick(() => {
            menuTrigger.value = DOM.findSingle(document, `#${menuTriggerID.value}`);
            menuList.value = DOM.findSingle(document, `#${menuListID.value}`);
         })
      })

      // * Provide MenuContext Key */
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
      
      function onBlured() {
         console.log('onblured')
      }

      return {
			show,
			test,
         rootRef,
         root,
         componentAttrs,
         onBlured,
      }
   },
   render() {
      return (
         <DynamicTag class={NAMESPACE}
            type={this.tag}
            ref={this.rootRef}
            {...this.componentAttrs}
            onBlured={this.onBlured}
         >
            {this.$slots.default?.()}
         </DynamicTag>
      )
   },
})

type MenuType = InstanceType<typeof Menu>

export {
   Menu,
   MenuType
};
