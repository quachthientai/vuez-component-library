import { makePropsFactory } from "@/utils/makePropFactory";
import { defineComponent } from "vue";
import { useDimension, makeDimensionProp } from "@/composable/dimension";
import { useColor, makeColorProp } from "@/composable/color";

import { Badge } from "../Badge/Badge";
import { Icon } from "@iconify/vue";

const vMenuProps = makePropsFactory({
   toggler: String,
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
                  <li class="vz-menu-item">
                     <div style="grid-area: prepend;">
                        <Icon icon="mdi:account-outline" width="1.3rem" height="1.3rem" />   
                     </div>        
                     <div class="vz-menu-item__content">Profile</div>
                  </li>
                  <li class="vz-menu-item">
                     <div style="grid-area: prepend;">
                        <Icon icon="mdi:cog-outline" width="1.3rem" height="1.3rem" />
                          
                     </div>        
                     <div class="vz-menu-item__content">Settings</div>
                     <div style="grid-area: append; display: flex;">
                        <div class="w-9"></div>
                        <Badge inline rounded content="99" color="danger" />   
                     </div>  
                  </li>
                  <hr />
                  <li class="vz-menu-item">
                     <div style="grid-area: prepend;">
                        <Icon icon="mdi:logout" width="1.3rem" height="1.3rem" />   
                     </div>        
                     <div class="vz-menu-item__content">Log out</div>
                       
                  </li>
                  
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



