import { makeColorProp } from "@/composable/color";
import { makeDimensionProp, useDimension } from "@/composable/dimension";
import { generateComponentId } from "@/utils/ComponentIDGenerator";
import { makePropsFactory } from "@/utils/makePropFactory";
import { defineComponent, onMounted, PropType, ref, Teleport, toRefs } from "vue";
import { Badge } from "../Badge/Badge";
import { MenuItem } from "./MenuItem/MenuItem";
import { MenuItemModel } from "./MenuItem/MenuItemType";
import { Button } from "../Button/Button";

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
   emits: ['onMenuFocus'],
   provide(){
      return {
         $MenuKey: () => this.MenuKey
      }
   },
   computed: {
      MenuKey() {
         return {
            test: this.test
         }
      }
   },
   data() {
      return {
         dimension: useDimension(this.$props),
         focusItemIndex: -1,
         hasModel: this.model?.length > 0,
         id: this.$attrs.id as string || generateComponentId(),
         list: null,
         focusableItems: null,
         openMenu: ref(false),
      }
   },
   mounted() {
      this.focusableItems = DOM.find(this.list, 'li[role="menuitem"][data-disabled="false"]');
   },
   watch: {
      focusItemIndex(newIndex: number, oldIndex: number) {
         this.updateTabIndex(newIndex);
      }
   },
   methods: {
      updateTabIndex(index: number) {
         this.focusableItems.forEach((item: HTMLElement, i: number) => {
            item.setAttribute('tabindex', index === i ? '0' : '-1');
         })
      },
      onFocused(e: FocusEvent) {
         this.isFocused = true;
         this.setFocusItemIndex(0);
         this.$emit('onMenuFocus', e)
      },
      open(e: Event) {
         this.openMenu.value = true;
      },
      test() {
         console.log('asd');
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
         const item = this.focusableItems[this.focusItemIndex] as HTMLElement;
         item.click();
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
            case 'Enter':
               this.onEnterKey(e);
               break;
            case 'Escape':
               e.preventDefault();
               break;
            default:
               break;
         }
      }
   },
   render() { 
      return (
            <div 
               class={NAMESPACE}
               id={this.id}
               style={this.dimension}
               onKeydown={this.handleKeyDown}
            >
               <ul class={`${NAMESPACE}-list`}
                  role="menu"
                  ref={ this.listRef }
                  tabindex={0}
                  aria-activedescendant="true"
                  id={this.id + '-list'}
                  onFocus={ this.onFocused }
               >
                  {this.$slots.default?.()}  
                  {this.hasModel && (this.model as MenuItemModel[])?.map((item, index) => { 
                     const { action, ...mutateItem } = item;
                     return (
                        <MenuItem 
                           {...mutateItem}
                           onItemAction={item.action}
                           id={this.id + '-' + index}
                           key={item.key || item.label + index.toString()}
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
         

      )
   },
   // setup(props, {slots, attrs, emit}) {
      
   //    const hasModel = (props.model as MenuItemModel[])?.length > 0;
   //    const isFocused = ref(false);
      
   //    const dimension = useDimension(props)
   //    const id = attrs.id as string || generateComponentId();
      
   //    /**
   //     * Handles the focus event for the menu.
   //     * @param e - The focus event.
   //     */
   //    function onFocused(e: FocusEvent) {
   //       isFocused.value = true;
   //       emit('onMenuFocus', e)
   //    }
      
   //    return () => {
         
         
   //    }
   // }
})

type MenuType = InstanceType<typeof Menu>;

export {
   Menu,
   MenuType
};



