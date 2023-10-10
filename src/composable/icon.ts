import { PropType, computed } from "vue";
import { isIncluded } from "@/utils/helpers";
import { PropOptions, makePropsFactory } from "@/utils/makePropFactory";
import { IconifyIcon } from "@iconify/types";
import { Icon, IconProps, IconifyIconProps } from "@iconify/vue";


interface iconProps {
   prependIcon?: PropOptions<IconifyIconProps>,
   appendIcon?: PropOptions<IconifyIconProps>  
}

interface Icon {
   icon: string,
   color?: string,
   height?: string | number,
   width?: string | number
}


const iconProps = makePropsFactory({
   prependIcon: {
      type: Object as PropType<Icon>,
      validator: (iconVal: Icon) => {
         const validKeyNames = ['icon', 'color', 'height', 'width'];
         return Object.keys(iconVal).every((key) => validKeyNames.includes(key));
      }
   },
   appendIcon: {
      type: Object as PropType<Icon>,
   }
});

function useIcon(icon: Icon) { 
   console.log(icon);
}



export {
   iconProps,
   useIcon,
   Icon
}


