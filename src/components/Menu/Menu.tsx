import { makePropsFactory } from "@/utils/makePropFactory";
import { defineComponent, PropType } from "vue";
import { makeDimensionProp } from "@/composable/dimension";
import { makeColorProp } from "@/composable/color";
import { Badge } from "../Badge/Badge";
import { MenuItem } from "./MenuItem/MenuItem";
import { MenuItemModel } from "./MenuItem/MenuItemType";

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
      // console.log(props.model)
      return () => {
         return (
            <div class="vz-menu">
               <ul class="vz-menu-list">

                  {slots.default?.()}
                  
                  {hasModel && (props.model as MenuItemModel[])?.map((item, index) => {
                     return (
                        <MenuItem
                           key={index}
                           label={item.label}
                           type={item.type}
                           tag={item.tag}
                           href={item.href}
                           disabled={item.disabled}
                           divider={item.divider}
                           icon={item.icon}
                        >
                           {{ badge: () => {
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



