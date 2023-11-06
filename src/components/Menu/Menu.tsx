import { makePropsFactory } from "@/utils/makePropFactory";
import { defineComponent, getCurrentInstance, MaybeRef, onBeforeMount, onMounted, PropType, Ref, ref, watch } from "vue";
import { makeDimensionProp } from "@/composable/dimension";
import { makeColorProp } from "@/composable/color";
import { Badge } from "../Badge/Badge";
import { MenuItem } from "./MenuItem/MenuItem";
import { MenuItemModel } from "./MenuItem/MenuItemType";
import { generateComponentId } from "@/utils/ComponentIDGenerator";

/**
 * Namespace for the Menu component.
 */
const NAMESPACE = 'vz-menu';

const vMenuProps = makePropsFactory({
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
   setup(props, {slots, attrs, emit}) {
      const hasModel = (props.model as MenuItemModel[])?.length > 0;
      const isFocused = ref(false);
      const id = attrs.id as string || generateComponentId();

      /**
       * Handles the focus event for the menu.
       * @param e - The focus event.
       */
      function onFocused(e: FocusEvent) {
         isFocused.value = true;
         emit('onMenuFocus', e)
      }
      
      return () => {
         return (
            <div 
               class={NAMESPACE}
               id={id} 
            >
               <ul class={`${NAMESPACE}-list`}
                  role="menu"
                  tabindex={0}
                  aria-activedescendant="true"
                  id={id + '-list'}
                  onFocus={ onFocused }
               >
                  {slots.default?.()}  
                  {hasModel && (props.model as MenuItemModel[])?.map((item, index) => { 
                     const { action, ...mutateItem } = item;   
                     return (
                        <MenuItem 
                           {...mutateItem}
                           onItemAction={item.action}
                           id={id + '-' + index}
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
      }
   }
})

type MenuType = InstanceType<typeof Menu>;

export {
   Menu,
   MenuType
}



