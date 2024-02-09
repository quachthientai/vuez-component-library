import { makeDimensionProp, 
   useDimension,
} from "@/composable/index";
import { makePropsFactory } from "@/utils/makePropFactory";
import { ComponentInternalInstance, 
   computed, 
   defineComponent, 
   getCurrentInstance, 
   inject, 
   PropType, 
   ref, 
   watch, 
   Transition,
} from "vue";
import { Badge } from "../Badge/Badge";
import { MenuItem } from "./MenuItem/MenuItem";
import { MenuItemModel } from "./MenuItem/MenuItemType";
import { DOM } from "@/utils/DOM";
import { Helpers } from "@/utils/helpers";
import { MenuKey } from "@/constants/injectionKey";
import { computePosition, 
   autoUpdate, 
   Placement, 
   offset, 
   shift, 
   flip 
} from '@floating-ui/vue';
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
      validator: (value: string) => {
         return Helpers.isIncluded(Object.keys(TRANSITION_PLACEMENT), value);
      }
   },
   offset: {
      type: Number,
      default: 0,
   },
   ...makeDimensionProp(),
   // ...makeColorProp(),
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
   setup(props, { slots, attrs, emit }) { 
      //* Inject the MenuContext key */
      const MenuContext = inject(MenuKey);
      const { 
         menuTriggerRef, 
         isOpen, 
         menuListID, 
         autoSelect,
         closeOnSelect, 
         hide 
      } = MenuContext; 
      
      // * Get the current instance */
      const instance = getCurrentInstance();

      // * Refs */
      const root = ref<HTMLElement>(null);
      const firstChars = ref<string[] | null>(null);
      const focusableItems = ref<NodeListOf<HTMLElement>>(null);
      const focusItemIndex = ref<number>(-1); 

      // * Composables */
      const dimension = useDimension(props);
      
      // * Computed properties */
      const hasModel = computed(() => {
         return (props.model as MenuItemModel[]).length > 0
      });

      const componentAttrs = computed(() => {
         return {
            ...attrs,
            'role': 'menu',
            'tabindex': 0,
            'data-vz-component': Helpers.toPascalCase(NAMESPACE, '-'),
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
      // #endregion

      // * Watchers */
      watch(focusItemIndex, (newIndex: number, oldIndex: number) => {
         updateTabIndex(newIndex);
      });

      /**
       * Aligns the menu based on the trigger element and the menu list.
       */
      function alignMenu() {
         const trigger = extractRefHTMLElement(menuTriggerRef);
         const list = extractRefHTMLElement(root);
         
         autoUpdate(trigger, list, () => {
            computePosition(trigger, list, {
               placement: props.placement as Placement,
               middleware: [shift({ padding: 10 }), 
                  offset(() => {
                     return (
                        !props.offset 
                           ? 5 
                           : props.offset
                     );
                  }), 
                  flip()]
            }).then(({x, y}) => {
               Object.assign(list.style, {
                  top: y + 'px',
                  left: x + 'px',
                  position: 'absolute',
                  zIndex: '1000',
               })
            });
         });
      }

      /**
       * Sets the root element (obtain by using template refs) to the root ref.
       * @see https://vuejs.org/guide/essentials/template-refs.html#template-refs
       * @param el The root element.
       */
      function rootRef(el: HTMLElement) {
         root.value = el;
      }

      /**
       * Sets the focus item index.
       * @param index The index to set the focus item to.
       */
      function setFocusItemIndex(index: number) { 
         focusItemIndex.value = index < 0 ? 0 
            : index >= focusableItems.value.length ? focusableItems.value.length - 1 
            : index;

         if(Array
               .from(focusableItems.value)
               .indexOf(focusableItems.value.item(index)) > -1
            ) {
            (focusableItems.value[index] as HTMLElement).focus();
         }

         updateTabIndex(index);
      }

      /**
       * Updates the tabindex of the menu items.
       * @param index The index of the menu item to set the tabindex to.
       */
      function updateTabIndex(index?: number) {
         focusableItems.value.forEach((item: HTMLElement, i: number) => {
            item.setAttribute('tabindex', index === i ? '0' : '-1');
         })
      }

      /**
       * Handles the keydown event.
       * @param e The keyboard event.
       */
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
               onEscapeKey(e);
               break;
            default:
               if(/\S/.test(key) && key.length === 1) {
                  onFirstCharKey(e);
               }
               break;
         }
      }

      /**
       * Handles the focus event.
       * @param e The focus event.
       */
      function onFocused(e: FocusEvent) {
         if(autoSelect.value){
            setFocusItemIndex(0);
         }

         emit('onMenuListFocus', {
            originalEvent: e,
            currentInstance: instance,
         })
      }

      /**
       * Handles the arrow down key.
       * @param e The Keyboard event
       */
      function onArrowDownKey(e: KeyboardEvent) {
         const nextItemIndex = focusItemIndex.value + 1;
         setFocusItemIndex(nextItemIndex);
         e.preventDefault();
      }

      /**
       * Handles the arrow up key.
       * @param e The Keyboard event
       */
      function onArrowUpKey(e: KeyboardEvent) {
         const prevItemIndex = focusItemIndex.value - 1;
         setFocusItemIndex(prevItemIndex);
         e.preventDefault();  
      }

      /**
       * Handles the home key.
       * @param e The Keyboard event
       */
      function onHomeKey(e: KeyboardEvent) {
         setFocusItemIndex(0);
         e.preventDefault();
      }

      /**
       * Handles the end key.
       * @param e The Keyboard event
       */
      function onEndKey(e: KeyboardEvent) {
         setFocusItemIndex(focusableItems.value.length - 1);
         e.preventDefault();
      }

      /**
       * Handles the enter key.
       * @param e The Keyboard event
       */
      function onEnterKey(e: KeyboardEvent) {
         focusableItems.value[focusItemIndex.value].click();
         e.preventDefault();
      }

      /**
       * Handles the space key.
       * @param e The Keyboard event
       */
      function onSpaceKey(e: KeyboardEvent) {
         focusableItems.value[focusItemIndex.value].click();
         e.preventDefault();
      }

      /**
       * Handles the escape key.
       * @param e The Keyboard event
       */
      function onEscapeKey(e: KeyboardEvent) {
         hide();
         e.preventDefault();
      }
      /**
       * Handles the first char key.
       * @param e The Keyboard event
       */
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

      /**
       * Handles the enter transition.
       */
      function onEnterTransition() {
         focusableItems.value = DOM.find(
            root.value, 
            `[role="menuitem"][data-disabled="false"][data-element-type="item"]`
         );

         firstChars.value = Array.from(focusableItems.value)
            .map((item: HTMLElement) => {
               return item.textContent?.charAt(0).toLowerCase();
         })

         updateTabIndex();
         alignMenu();

         root.value.focus();
      }
      
      /**
       * Handles the leave transition.
       */
      function onLeaveTransition() {
         focusItemIndex.value = -1;
      }

      return {
         dimension,
         handleKeyDown,
         hasModel,
         isOpen,
         onFocused,
         onEnterTransition,
         onLeaveTransition,
         rootRef,
         componentAttrs,
         transition,
      };
   },
   render() {
      return (
         <Transition name={this.transition} 
            onEnter={this.onEnterTransition}
            onLeave={this.onLeaveTransition} 
         >
            {this.isOpen && (
               <ul class={NAMESPACE}
                  {...this.componentAttrs}
                  ref={ this.rootRef }
                  style={ this.dimension }
                  onFocus={ this.onFocused }
                  onKeydown={ this.handleKeyDown }
               >
                  {this.$slots.default?.()}
                  {this.hasModel && (this.model as MenuItemModel[])?.map((item, index) => {
                     return (
                        <> 
                           { (item.items && item.items.length > 0) 
                                 ?  <>
                                       <MenuItem
                                          type="header"
                                          {...item}
                                          key={
                                             item.label ? item.label + index.toString() 
                                                : item.content ? item.content + index.toString() 
                                                : item.key + index.toString()
                                          }
                                       />
                                       {item.items.map((subItem, subIndex) => {
                                          return (
                                             <MenuItem
                                                {...subItem}
                                                key={
                                                   subItem.label ? subItem.label + subIndex.toString() 
                                                      : subItem.content ? subItem.content + subIndex.toString() 
                                                      : subItem.key + subIndex.toString()
                                                }
                                             >
                                                {subItem.badge && { badge: () => {
                                                      return (
                                                         typeof subItem.badge === 'function' 
                                                            ? subItem.badge() 
                                                            : <Badge {...subItem.badge} />
                                                      )
                                                   }
                                                }}
                                             </MenuItem>
                                          )
                                       })}
                                    </> 
                                 :  <MenuItem
                                       {...item}
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
                           }
                        </>
                     )
                  })}
               </ul>
            )}
         </Transition>
      )
   },
})

type MenuListType = InstanceType<typeof MenuList>;

export {
   MenuList,
   MenuListType
};