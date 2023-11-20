import { makeColorProp } from "@/composable/color";
import { makeDimensionProp, useDimension } from "@/composable/dimension";
import { generateComponentId } from "@/utils/ComponentIDGenerator";
import { makePropsFactory } from "@/utils/makePropFactory";
import { ComponentInternalInstance, defineComponent, getCurrentInstance, onMounted, PropType, ref, Teleport, toRefs } from "vue";
import { Badge } from "../Badge/Badge";
import { MenuItem } from "./MenuItem/MenuItem";
import { MenuItemModel } from "./MenuItem/MenuItemType";

import { DOM } from "@/utils/DOM";

/**
 * Namespace for the Menu component.
 */
const NAMESPACE = 'vz-menu';

const vMenuProps = makePropsFactory({
   popup: {
      type: Boolean,
      default: false,
   },
   /**
    * The toggler for the menu.
    * @type {string}
    * @default undefined
    * @name toggler
    */
   toggler: String,
   /**
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

const Menu = defineComponent({
   name: 'Menu',
   props: vMenuProps,
   emits: {
      'onMenuFocus': (payload: {
         originalEvent: FocusEvent,
         currentInstance: ComponentInternalInstance,
      }) => {
         return payload.originalEvent && payload.currentInstance;
      }
   },
   data() {
      return {
         dimension: useDimension(this.$props),
         firstChars: null,
         focusableItems: null,
         focusItemIndex: -1,
         hasModel: this.model?.length > 0,
         instance: null,
         list: null,
      }
   },
   mounted() {

      this.instance = getCurrentInstance();

      this.focusableItems = DOM.find(this.list, 'li[role="menuitem"][data-disabled="false"][data-element-type="item"]');

      this.firstChars = Array.from(this.focusableItems).map((item: HTMLElement) => {
         return item.textContent?.charAt(0).toLowerCase();
      });
      
      this.updateTabIndex()
   },
   watch: {
      focusItemIndex(newIndex: number, oldIndex: number) {
         this.updateTabIndex(newIndex);
      }
   },
   methods: {
      // resetTabIndex() {
      //    this.updateTabIndex(-1);
      // },
      updateTabIndex(index?: number) {
         this.focusableItems.forEach((item: HTMLElement, i: number) => {
            item.setAttribute('tabindex', index === i ? '0' : '-1');
         })
      },
      onFocused(e: FocusEvent) {
         this.isFocused = true;
         this.setFocusItemIndex(0);
         this.$emit('onMenuFocus', {
            originalEvent: e,
            currentInstance: this.instance,
         })
      },
      listRef(el: HTMLElement) {
         this.list = el;
      },
      setFocusItemIndex(index: number) { 
         this.focusItemIndex = index < 0 ? 0 
            : index >= this.focusableItems.length ? this.focusableItems.length - 1 
            : index;

         if(Array.from(this.focusableItems).indexOf(this.focusableItems.item(index)) > -1)  {
            (this.focusableItems[index] as HTMLElement).focus();
         }
      },
      onArrowDownKey(e: KeyboardEvent) {
         const nextItemIndex = this.focusItemIndex + 1;
         this.setFocusItemIndex(nextItemIndex);
         e.preventDefault();
      },
      onArrowUpKey(e: KeyboardEvent) {
         const prevItemIndex = this.focusItemIndex - 1;
         this.setFocusItemIndex(prevItemIndex);
         e.preventDefault();  
      },
      onHomeKey(e: KeyboardEvent) {
         this.setFocusItemIndex(0);
         e.preventDefault();
      },
      onEndKey(e: KeyboardEvent) {
         this.setFocusItemIndex(this.focusableItems.length - 1);
         e.preventDefault();
      },
      onEnterKey(e: KeyboardEvent) {
         this.focusableItems[this.focusItemIndex].click();
         e.preventDefault();
      },
      onSpaceKey(e: KeyboardEvent) {
         this.focusableItems[this.focusItemIndex].click();
         e.preventDefault();
      },
      onFirstCharKey(e: KeyboardEvent) {
         const char = e.key.toLowerCase();

         // Find the first item that starts with the char and set focus
         let foundIndex = this.firstChars.indexOf(char, this.focusItemIndex + 1);

         // If not found in search after focus item, start from the beginning
         if(foundIndex === -1) {
            foundIndex = this.firstChars.indexOf(char,0);
         }

         // If match was found, set focus
         if(foundIndex > -1) {
            this.setFocusItemIndex(foundIndex);
         }

         e.preventDefault();
      },
      handleKeyDown(e: KeyboardEvent) { 
         const { key } = e;

         switch (key) {
            case 'ArrowDown':
               this.onArrowDownKey(e);
               break;
            case 'ArrowUp':
               this.onArrowUpKey(e);
               break;
            case 'Home': 
               this.onHomeKey(e);
               break;
            case 'End':
               this.onEndKey(e);
               break;
            case 'Space':
               this.onSpaceKey(e);
               break;
            case 'Enter':
               this.onEnterKey(e);
               break;
            case 'Escape':
               e.preventDefault();
               break;
            default:
               if(/\S/.test(key) && key.length === 1) {
                  this.onFirstCharKey(e);
               }
               break;
         }
      }
   },
   render() { 
      return (
         <Teleport to="#overlay">
            <div 
            class={NAMESPACE}
            // id={this.id}
            style={this.dimension}
            ref="menu"
            data-vz-component="VZMenu"
            onKeydown={this.handleKeyDown}
         >
            <ul class={`${NAMESPACE}-list`}
               role="menu"
               ref={ this.listRef }
               tabindex={0}
               onFocus={ this.onFocused }
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
         </div>
         </Teleport>
         
      )
   },
})

type MenuType = InstanceType<typeof Menu>;

export {
   Menu,
   MenuType
};



