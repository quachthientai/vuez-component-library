import { makePropsFactory } from "@/utils/makePropFactory";
import { ExtractPropTypes, defineComponent, ref } from "vue";
import { makeColorProp, useColor } from "@/composable/color";

const vBadgeProps = makePropsFactory({
   content: String,
   dot: Boolean,
   rounded: Boolean,
   inline: Boolean,
   overlay: Boolean,
   ...makeColorProp(),
});

const NAMESPACE = 'vz-badge';

const Badge = defineComponent({
   name: 'Badge',
   props: vBadgeProps,
   computed: {
      componentStyles() {
         return {
            'badge-dot': this.dot && !this.rounded,
            'badge-rounded': this.rounded && !this.dot,
            'badge-inline': this.inline && !this.overlay,
            'badge-overlay': this.overlay
         }
      },
      componentColor() { 
         return useColor('badge', this.color);
      }
   },
   render() {
      return (
         <div class={['badge', 
            this.componentStyles,
            this.componentColor,
           ]}
         >
            <div class='badge__content'>
               <span class={['badge__content-badge']}>
                  {this.dot ? undefined : this.content}
               </span>
            </div>
         </div>
      );
   },
   // setup(props, {slots, attrs}) {
   //    const dot = (props.dot && !props.rounded) ? 'badge-dot' : undefined;
   //    const rounded = (props.rounded && !props.dot) ? 'badge-rounded' : undefined;
   //    const inline = (props.inline && !props.overlay) ? 'badge-inline' : undefined;
   //    const color = useColor('badge', props.color as string);
   //    const overlay = props.overlay ? 'badge-overlay' : undefined;
      
   //    return () => {
   //       return (
   //          <div class={['badge', 
   //             inline, 
   //             dot, 
   //             rounded, 
   //             overlay, 
   //             color]}
   //          >
   //             <div class='badge__content'>
   //                <span class={['badge__content-badge']}>
   //                   {dot ? undefined : props.content}
   //                </span>
   //             </div>
   //          </div>
   //       );
   //    }
   // }
});

type BadgeType = InstanceType<typeof Badge>;
type BadgePropType = ExtractPropTypes<typeof vBadgeProps>;

export {
   Badge,
   BadgeType,
   BadgePropType
}