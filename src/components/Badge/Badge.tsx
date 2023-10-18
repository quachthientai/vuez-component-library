import { makePropsFactory } from "@/utils/makePropFactory";
import { defineComponent } from "vue";
import { makeColorProp, useColor } from "@/composable/color";
import { makeOverlayProp, useOverlay, OverlayType } from "@/composable/overlay";

const vBadgeProps = makePropsFactory({
   content: String,
   dot: Boolean,
   rounded: Boolean,
   inline: Boolean,
   ...makeOverlayProp(),
   ...makeColorProp(),
});


const Badge = defineComponent({
   name: 'Badge',
   props: vBadgeProps,
   setup(props, {slots, attrs}) {
      const dot = (props.dot && !props.rounded) ? 'badge-dot' : undefined;
      const rounded = (props.rounded && !props.dot) ? 'badge-rounded' : undefined;
      const inline = (props.inline && !props.overlay) ? 'badge-inline' : undefined;
      const color = useColor('badge', props.color as string);
      const overlay = useOverlay('badge', props.overlay as OverlayType)
      
      return () => {
         return (
            <div class={['badge', inline, dot, rounded, overlay]}>
               <div class='badge__content'>
                  <span class={['badge__content-badge', color]}>
                     {dot ? undefined : props.content}
                  </span>
               </div>
            </div>
         );
      }
   }
});

type BadgeType = InstanceType<typeof Badge>;

export {
   Badge,
   BadgeType,
}