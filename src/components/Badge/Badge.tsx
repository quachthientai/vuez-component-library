import { makePropsFactory } from "@/utils/makePropFactory";
import { defineComponent } from "vue";
import { makeColorProp, useColor } from "@/composable/color";
import { makeIconProps } from "@/composable/icon";
import { makeSizeProp } from "@/composable/size";
import { makeVariantProp, useVariants } from "@/composable/variants";

const vBadgeProps = makePropsFactory({
   content: String,
   dot: Boolean,
   rounded: Boolean,
   inline: Boolean,
   ...makeColorProp(),
});

const Badge = defineComponent({
   name: 'Badge',
   props: vBadgeProps,
   setup(props, {slots, attrs}) {
      const dot = props.dot ? 'badge__content-badge-dot' : undefined;
      const rounded = props.rounded ? 'badge__content-badge-rounded' : undefined;
      const inline = props.inline ? 'badge--inline' : undefined;
      const color = useColor('badge', props.color as string);

      const hasDefaultSlots = !!slots.default;
      const hasContentSlots = !!slots.content;
      return () => {
         return (
            <div class={['badge', inline]}>
               <div class='badge__content'>
                  {slots.default?.()}
                  <span class={['badge__content-badge', color, dot, rounded]}>
                     {props.content}
                  </span>
               </div>
               {/* {(hasDefaultSlots || hasContentSlots) && (
                  <div class='badge__content'>
                     <div class='badge__content-badge'></div>
                  </div>
               )} */}
               
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