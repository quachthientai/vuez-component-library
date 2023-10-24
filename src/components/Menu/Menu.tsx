import { makePropsFactory } from "@/utils/makePropFactory";
import { defineComponent, PropType, h } from "vue";
import { useDimension, makeDimensionProp } from "@/composable/dimension";
import { useColor, makeColorProp } from "@/composable/color";
import { IconType } from "@/composable/icon";

import { Badge } from "../Badge/Badge";
import { Icon } from "@iconify/vue";
import { MenuItem } from "./MenuItem";


interface Item {
   content: string;
   href?: string; 
   divider?: boolean;
   tag?: string;
   prependIcon?: IconType;
   appendIcon?: IconType;
}

const vMenuProps = makePropsFactory({
   toggler: String,
   model: {
      type: Array as PropType<Item[]>,
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
         return (
            <div class="vz-menu">
               <ul class="vz-menu-list">
                  {slots.default?.()}

                  {/* {
                     (props.model as Item[])?.map((item, index) => {
                        return (
                           h(MenuItem, {
                              content: item.content,
                              href: item.href,
                              divider: item.divider,
                              tag: item.tag,
                              prependIcon: item.prependIcon,
                              appendIcon: item.appendIcon,
                           })
                        )
                     })
                  } */}
                  {/* {
                     (props.model as Item[])?.map((item, index) => {
                        return (
                           <MenuItem 
                              content={item.content} 
                              href={item.href} 
                              divider={item.divider} 
                              tag={item.tag} 
                              prependIcon={item.prependIcon}
                              appendIcon={item.appendIcon}
                           />
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
}



