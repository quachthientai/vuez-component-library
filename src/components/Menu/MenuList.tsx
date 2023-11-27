import { makeColorProp } from "@/composable/color";
import { makeDimensionProp, useDimension } from "@/composable/dimension";
import { generateComponentId } from "@/utils/ComponentIDGenerator";
import { makePropsFactory } from "@/utils/makePropFactory";
import { ComponentInternalInstance, computed, defineComponent, getCurrentInstance, inject, onMounted, PropType, ref, Teleport, toRefs, watch, Transition, nextTick, onUnmounted } from "vue";
import { Badge } from "../Badge/Badge";
import { MenuItem } from "./MenuItem/MenuItem";
import { MenuItemModel } from "./MenuItem/MenuItemType";

import { DOM } from "@/utils/DOM";
import { MenuKey } from "@/constants/injectionKey";


/*
 * Namespace for the Menu List component.
*/
const NAMESPACE = 'vz-menu-list';

const vMenuListProps = makePropsFactory({
   popup: {
      type: Boolean,
      default: false,
   },
   /*
    * The toggler for the menu.
    * @type {string}
    * @default undefined
    * @name toggler
    */
   toggler: String,
   /*
    * The model item for the menu.
    * @type {MenuItemModel[]}
    * @default []
    * @name model
    */
   model: {
      type: Array as PropType<MenuItemModel[]>,
      default: () => [],
   },
   ...makeDimensionProp(),
   ...makeColorProp(),
});

const MenuList = defineComponent({
   name: 'MenuList',
   props: vMenuListProps,
   inheritAttrs: false,
   emits: {
      'onMenuListFocus': (payload: {
         originalEvent: FocusEvent,
         currentInstance: ComponentInternalInstance,
      }) => {
         return payload.originalEvent && payload.currentInstance;
      }
   },
   setup(props, { slots,attrs,emit }) { 
      const MenuContext = inject(MenuKey);
      const { menuTriggerRef } = MenuContext; 
      
      const instance = getCurrentInstance();

      const dimension = useDimension(props);
      const hasModel = computed(() => (props.model as MenuItemModel[]).length > 0);
      
      const root = ref<HTMLElement>(null);
      const firstChars = ref<string[] | null>(null);
      const focusableItems = ref<NodeListOf<HTMLElement>>(null);
      const focusItemIndex = ref<number>(-1); 
      

      onMounted(() => {
         focusableItems.value = DOM.find(root.value, 'li[role="menuitem"][data-disabled="false"][data-element-type="item"]');

         firstChars.value = Array.from(focusableItems.value).map((item: HTMLElement) => {
            return item.textContent?.charAt(0).toLowerCase();
         })
         updateTabIndex();
         
      })

      watch(menuTriggerRef, (newTrigger: HTMLElement, oldTrigger: HTMLElement) => {
         if(newTrigger) {
            alignMenu();
         }
      })

      watch(focusItemIndex, (newIndex: number, oldIndex: number) => {
         updateTabIndex(newIndex);
      });

      function alignMenu() {
         const rect = menuTriggerRef.value?.getBoundingClientRect();
         
         if(rect) {
            root.value.style.top = rect.bottom + 'px';
            root.value.style.left = rect.left + 'px';
            root.value.style.position = 'absolute'
         }
      }

      function rootRef(el: HTMLElement) {
         root.value = el;
      }

      function setFocusItemIndex(index: number) { 
         focusItemIndex.value = index < 0 ? 0 
            : index >= focusableItems.value.length ? focusableItems.value.length - 1 
            : index;

         if(Array.from(focusableItems.value).indexOf(focusableItems.value.item(index)) > -1) {
            (focusableItems.value[index] as HTMLElement).focus();
         }
      }

      function updateTabIndex(index?: number) {
         focusableItems.value.forEach((item: HTMLElement, i: number) => {
            item.setAttribute('tabindex', index === i ? '0' : '-1');
         })
      }

      function handleKeyDown(e: KeyboardEvent) {
         const { key } = e;
         switch (key) {
            case 'ArrowDown':
               onArrowDownKey(e);
               break;
            case 'ArrowUp':
               onArrowUpKey(e);
               break;
            case 'Home': 
               onHomeKey(e);
               break;
            case 'End':
               onEndKey(e);
               break;
            case 'Space':
               onSpaceKey(e);
               break;
            case 'Enter':
               onEnterKey(e);
               break;
            case 'Escape':
               e.preventDefault();
               break;
            default:
               if(/\S/.test(key) && key.length === 1) {
                  onFirstCharKey(e);
               }
               break;
         }
      }

      function onFocused(e: FocusEvent) {
         setFocusItemIndex(0);
         emit('onMenuListFocus', {
            originalEvent: e,
            currentInstance: instance,
         })
      }

      function onArrowDownKey(e: KeyboardEvent) {
         const nextItemIndex = focusItemIndex.value + 1;
         setFocusItemIndex(nextItemIndex);
         e.preventDefault();
      }

      function onArrowUpKey(e: KeyboardEvent) {
         const prevItemIndex = focusItemIndex.value - 1;
         setFocusItemIndex(prevItemIndex);
         e.preventDefault();  
      }

      function onHomeKey(e: KeyboardEvent) {
         setFocusItemIndex(0);
         e.preventDefault();
      }

      function onEndKey(e: KeyboardEvent) {
         setFocusItemIndex(focusableItems.value.length - 1);
         e.preventDefault();
      }

      function onEnterKey(e: KeyboardEvent) {
         focusableItems.value[focusItemIndex.value].click();
         e.preventDefault();
      }

      function onSpaceKey(e: KeyboardEvent) {
         focusableItems.value[focusItemIndex.value].click();
         e.preventDefault();
      }
      
      function onFirstCharKey(e: KeyboardEvent) {
         const char = e.key.toLowerCase();

         // Find the first item that starts with the char and set focus
         let foundIndex = firstChars.value.indexOf(char, focusItemIndex.value + 1);

         // If not found in search after focus item, start from the beginning
         if(foundIndex === -1) {
            foundIndex = firstChars.value.indexOf(char,0);
         }

         // If match was found, set focus
         if(foundIndex > -1) {
            setFocusItemIndex(foundIndex);
         }

         e.preventDefault();
      }

      return {
         dimension,
         firstChars,
         focusableItems,
         focusItemIndex,
         handleKeyDown,
         hasModel,
         MenuContext,
         onFocused,
         root,
         rootRef,
      }
   },
   render() {
      const { isOpen, menuListID } = this.MenuContext;

      return (
         <Teleport to="#overlay">
         <ul class={`${NAMESPACE}`}
            role="menu"
            data-show={ isOpen.value }
            ref={ this.rootRef }
            tabindex={0}
            onFocus={ this.onFocused }
            // class={NAMESPACE}
            id={ menuListID.value }
            style={ this.dimension }
            // ref="menu"
            data-vz-component="VZMenuList"
            onKeydown={ this.handleKeyDown }
            // onBlur={ this.resetTabIndex }
         >
            {this.$slots.default?.()}  

            {this.hasModel && (this.model as MenuItemModel[])?.map((item, index) => { 
               const { action, ...mutateProps } = item;
               return (
                  <MenuItem 
                     {...mutateProps}
                     onItemAction={item.action}
                     key={
                        item.label ? item.label + index.toString() 
                           : item.content ? item.content + index.toString() 
                           : item.key + index.toString()
                     }
                  >
                     {item.badge && { badge: () => {
                           return (
                              typeof item.badge === 'function' 
                                 ? item.badge() 
                                 : <Badge {...item.badge} />
                           )
                        }
                     }}
                  </MenuItem>
               )
            })}
         </ul>
         </Teleport>
      )
   },
})

type MenuListType = InstanceType<typeof MenuList>;

export {
   MenuList,
   MenuListType
};



