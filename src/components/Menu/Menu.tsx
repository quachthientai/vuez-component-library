import { makePropsFactory } from "@/utils/makePropFactory";
import { defineComponent, PropType } from "vue";
import { makeDimensionProp } from "@/composable/dimension";
import { makeColorProp } from "@/composable/color";
import { Badge } from "../Badge/Badge";
import { MenuItem } from "./MenuItem/MenuItem";
import { MenuItemModel } from "./MenuItem/MenuItemType";

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
   setup(props, {slots, attrs}) {
      const hasModel = (props.model as MenuItemModel[])?.length > 0;

      return () => {
         return (
            <div class={NAMESPACE}>
               <ul class={`${NAMESPACE}-list`}>

                  {slots.default?.()}
                  
                  {hasModel && (props.model as MenuItemModel[])?.map((item, index) => { 
                     const { action, ...mutateItem } = item;   
                     return (
                        <MenuItem
                           {...mutateItem}
                           onItemAction={item.action}
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



