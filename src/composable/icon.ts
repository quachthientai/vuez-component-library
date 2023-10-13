import { PropType, computed } from "vue";
import { isIncluded } from "@/utils/helpers";
import { PropOptions, makePropsFactory } from "@/utils/makePropFactory";
import { IconifyIcon } from "@iconify/types";
import { Icon, IconProps, IconifyIconProps } from "@iconify/vue";


interface iconProps {
   prependIcon?: PropOptions<IconifyIconProps>,
   appendIcon?: PropOptions<IconifyIconProps>  
}

interface IconType {
   icon: string,
   color?: string,
   height?: string | number,
   width?: string | number
}


const iconProps = makePropsFactory({
   prependIcon: {
      type: Object as PropType<IconType>,
      validator: (iconVal: IconType) => {
         const validKeyNames = ['icon', 'color', 'height', 'width'];
         return Object.keys(iconVal).every((key) => validKeyNames.includes(key));
      }
   },
   appendIcon: {
      type: Object as PropType<IconType>,
      validator: (iconVal: IconType) => {
         const validKeyNames = ['icon', 'color', 'height', 'width'];
         return Object.keys(iconVal).every((key) => validKeyNames.includes(key));
      }
   }
});

function useIcon(icon: IconType) { 
   console.log(icon);
}



export {
   iconProps,
   useIcon,
   IconType
}


