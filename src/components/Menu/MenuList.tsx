import { makeColorProp } from "@/composable/color";
import { makeDimensionProp, useDimension } from "@/composable/dimension";
import { generateComponentId } from "@/utils/ComponentIDGenerator";
import { makePropsFactory } from "@/utils/makePropFactory";
import { ComponentInternalInstance, computed, defineComponent, getCurrentInstance, inject, onMounted, PropType, ref, Teleport, toRefs, watch, Transition, nextTick, onUnmounted } from "vue";
import { usePopup } from "@/composable/usePopup";
import { Badge } from "../Badge/Badge";
import { MenuItem } from "./MenuItem/MenuItem";

import { MenuItemModel } from "./MenuItem/MenuItemType";
import { DOM } from "@/utils/DOM";
import { MenuKey } from "@/constants/injectionKey";
import { ClickOut } from "@/directives/click-outside";
import { computePosition, autoUpdate, Placement, offset, shift, flip, arrow, useFloating } from '@floating-ui/vue';
import { extractRefHTMLElement } from "@/utils/extractRefHTMLElement";


/*
 * Namespace for the Menu List component.
*/
const NAMESPACE = 'vz-menu-list';
const TRANSITION_PLACEMENT = {
   TOP: 'popup-top',
   BOTTOM: 'popup-bottom',
   LEFT: 'popup-side',
   RIGHT: 'popup-side',
}

const vMenuListProps = makePropsFactory({
   model: {
      type: Array as PropType<MenuItemModel[]>,
      default: () => [],
   },
   placement: {
      type: String,
      default: 'bottom',
   },
   offset: {
      type: Number,
      default: 0,
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
   directives: {
      'click-outside': ClickOut,
   },
   setup(props, { slots,attrs,emit }) { 
      //* Inject the MenuContext key */
      const MenuContext = inject(MenuKey);
      const { menuTriggerRef, isOpen, menuListID, autoSelect } = MenuContext; 

      const instance = getCurrentInstance();

      const dimension = useDimension(props);
      const hasModel = computed(() => (props.model as MenuItemModel[]).length > 0);
      
      const root = ref<HTMLElement>(null);
      const firstChars = ref<string[] | null>(null);
      const focusableItems = ref<NodeListOf<HTMLElement>>(null);
      const focusItemIndex = ref<number>(-1); 

      const componentAttrs = computed(() => {
         return {
            ...attrs,
            'role': 'menu',
            'tabindex': 0,
            'data-vz-component': 'VZMenuList',
            'data-popup-placement': props.placement,
            id: menuListID.value,
         }
      })
      
      const transition = computed(() => {
         switch(props.placement){
            case 'top':
               return TRANSITION_PLACEMENT.TOP;
            case 'bottom':
               return TRANSITION_PLACEMENT.BOTTOM;
            case 'left':
               return TRANSITION_PLACEMENT.LEFT;
            case 'right': 
               return TRANSITION_PLACEMENT.RIGHT;
            default:
               return TRANSITION_PLACEMENT.BOTTOM;
         }
      })

      watch(focusItemIndex, (newIndex: number, oldIndex: number) => {
         updateTabIndex(newIndex);
      });

      function alignMenu() {
         const trigger = extractRefHTMLElement(menuTriggerRef);
         const list = extractRefHTMLElement(root);
         
         autoUpdate(trigger, list, () => {
            computePosition(trigger, list, {
               placement: props.placement as Placement,
               middleware: [shift({ padding: 10 }), 
                  offset(({placement}) => {
                     return (
                        placement !== 'bottom' ? 10 : 0
                      );
                  }), 
                  flip()]
            }).then(({x, y}) => {
               Object.assign(list.style, {
                  top: y + 'px',
                  left: x + 'px',
                  position: 'absolute',
               })
            });
         });
         
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

      function onEnterTransition() {
         focusableItems.value = DOM.find(root.value, 'li[role="menuitem"][data-disabled="false"][data-element-type="item"]');

         firstChars.value = Array.from(focusableItems.value).map((item: HTMLElement) => {
            return item.textContent?.charAt(0).toLowerCase();
         })

         updateTabIndex();
         alignMenu();

         if(autoSelect.value){
            setFocusItemIndex(0);
         }
      }
      
      function onLeaveTransition() {
         setFocusItemIndex(-1);
      }

      return {
         dimension,
         firstChars,
         focusableItems,
         focusItemIndex,
         handleKeyDown,
         hasModel,
         isOpen,
         onFocused,
         onEnterTransition,
         onLeaveTransition,
         root,
         rootRef,
         componentAttrs,
         transition,
         MenuContext
      }
   },
   render() {
      const { hide } = this.MenuContext;
      return (
         <Teleport to="#overlay">
            <Transition name={this.transition} 
               onEnter={this.onEnterTransition}
               onLeave={this.onLeaveTransition} 
            >
               {this.isOpen && (
                  <ul class={`${NAMESPACE}`}
                     {...this.componentAttrs}
                     ref={ this.rootRef }
                     style={ this.dimension }
                     onFocus={ this.onFocused }
                     onKeydown={ this.handleKeyDown }
                     v-click-outside={ hide }
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
               )}
            </Transition>
         </Teleport>
      )
   },
})

type MenuListType = InstanceType<typeof MenuList>;

export {
   MenuList,
   MenuListType
};



