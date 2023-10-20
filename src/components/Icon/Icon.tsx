import { defineComponent, computed } from "vue";
import { makePropsFactory } from "@/utils/makePropFactory";
import { makeSizeProp, useSize } from "@/composable/size";

import { iconExists, Icon, getIcon, buildIcon } from "@iconify/vue";

const vIconProps = makePropsFactory({
   color: String,
   icon: {
      type: String,
      validator: (value: string) => {
         return iconExists(value);
      }
   },
   ...makeSizeProp(),
})

const VIcon = defineComponent({
   name: 'VIcon',
   props: vIconProps,

   setup(props) {
      const size = useSize("icon", props.size as string);
  
      const iconClass = computed(() => {
        return `iconify ${props.icon} ${size}`;
      });
  
      const iconStyle = computed(() => {
        return {
          color: props.color
        };
      });
  
      return() => {
         return (
            <span class="iconClass" style="iconStyle"></span>
         )
      }
    }
   // setup(props, {attrs, slots}) {
   //    const size = useSize('icon', props.size as string);
   //    console.log(iconExists(props.icon as string));
   //    console.log(getIcon(props.icon as string));
   //    console.log(buildIcon(getIcon(props.icon as string)));
   //    return () => {
         
   //       return (
   //          <i class={['icon', size, props.color]}>
   //             <Icon icon={props.icon as string} />
   //          </i>
   //       )
   //    }
   // }
})

type IconType = InstanceType<typeof VIcon>;

export {
   VIcon,
   IconType
}