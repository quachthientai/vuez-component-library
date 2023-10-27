import { makePropsFactory } from "@/utils/makePropFactory";
import { defineComponent, PropType, h, VNode, RendererNode, RendererElement } from "vue";
import { useDimension, makeDimensionProp } from "@/composable/dimension";
import { useColor, makeColorProp } from "@/composable/color";
import { IconType } from "@/composable/icon";

import { Badge, BadgeType, BadgePropType } from "../Badge/Badge";
import { Icon } from "@iconify/vue";
import { MenuItem } from "./MenuItem/MenuItem";

type MenuItemModelIcon = Pick<IconType, 'icon'>

type MenuItemModel = {
   content: string;
   disabled?: boolean;
   href?: string; 
   divider?: boolean;
   type?: 'item' | 'header' | 'footer';
   tag?: string;
   badge?: BadgePropType | (() => VNode<RendererNode, RendererElement>);
   prependIcon?: MenuItemModelIcon;
   appendIcon?: MenuItemModelIcon;
}

const vMenuProps = makePropsFactory({
   toggler: String,
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
      return () => {
         console.log((props.model as MenuItemModel[])[1].badge)
         return (
            <div class="vz-menu">
               <ul class="vz-menu-list">

                  {slots.default?.()}

                  { (props.model as MenuItemModel[])?.map((item, index) => {
                     return (
                        <MenuItem
                           content={item.content}
                           type={item.type}
                           tag={item.tag}
                           href={item.href}
                           disabled={item.disabled}
                           divider={item.divider}
                           prependIcon={item.prependIcon}
                           appendIcon={item.appendIcon}
                        >
                           {/* {{ append: () => item.badge && (<Badge {...item.badge} />) }} */}

                           {{ append: () => typeof item.badge === 'function' && item.badge() }}
                        </MenuItem>
                     )
                  })}
                  {/* {
                     (props.model as MenuItemModel[])?.map((item, index) => {
                        return (
                           h(MenuItem, {
                              content: item.content,
                              href: item.href,
                              divider: item.divider,
                              tag: item.tag,
                              type: item.type
                              // prependIcon: item.prependIcon,
                              // appendIcon: item.appendIcon,
                           })
                        )
                     })
                  } */}

                  
                  {/* <MenuItem divider prependIcon={{icon: 'mdi:account-outline'}}>
                     Profile                 
                  </MenuItem>
                  
                  <MenuItem >
                     {{ append: slots.append }}
                     

                  </MenuItem>

                  <li class="vz-menu-item">
                     <div style="grid-area: prepend;">
                        <Icon icon="mdi:cog-outline" width="1.3rem" height="1.3rem" />
                          
                     </div>        
                     <div class="vz-menu-item__content">Settings</div>
                     <div style="grid-area: append; display: flex;">
                        <div class="w-9"></div>
                        <Badge inline content="9" color="danger" />   
                     </div>  
                  </li>


                  <hr />

                  <li class="vz-menu-item">
                     <div style="grid-area: prepend;">
                        <Icon icon="mdi:logout" width="1.3rem" height="1.3rem" />   
                     </div>        
                     <div class="vz-menu-item__content">Log out</div>
                  </li> */}
                  
               </ul>
            </div>
         )
      }
   }
})

type MenuType = InstanceType<typeof Menu>;

export {
   Menu,
   MenuType,
   MenuItemModel
}



