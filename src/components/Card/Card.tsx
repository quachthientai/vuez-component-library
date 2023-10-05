import { defineComponent, computed, useAttrs, isRef } from "vue";
import makePropsFactory from "@/utils/makePropFactory";
import { CardHeader, CardText, CardAction  } from '@/components/Card/index';
import { useDimension } from "@/composable/dimenstion";

const vProps = makePropsFactory({
   title: {
      type: String,
   },
   subtitle: {
      type: String,
   },
   width: {
      type: [String, Number],
   },
   appendIcon: {
      type: String,
   },
   prependIcon: {
      type: String
   },
   elevation: {
      type: Number,
      default: 0
   }
});

export const Card = defineComponent({
   name: 'Card',
   props: vProps,
   setup(props, {attrs, slots}) {
      const hasTitle = !!(slots.title || props.title);
      const hasSubtitle = !!(slots.subtitle || props.subtitle);
      const hasAppend = !!(slots.append || props.appendIcon);
      const hasPrepend = !!(slots.prepend || props.prependIcon);
      const hasTextSlot = !!slots.text;
      const hasActionSlot = !!slots.action;

      const elevation = computed(() => {
         return props.elevation as number > 0 ? `elevation-${props.elevation}` : '';
      });
      
      const dimension  = useDimension({
         width: props.width as string | number
      });

      return() => {
         return (
            <div style={dimension.value} class={['card', elevation.value]}>
               {  (hasTitle || hasSubtitle || hasPrepend || hasAppend) && (
                     <CardHeader 
                        title={props.title ?? props.title }
                        appendIcon={props.appendIcon ?? props.appendIcon}
                        prependIcon={props.prependIcon ?? props.prependIcon}
                        subtitle={props.subtitle ?? props.subtitle}
                     >
                        {{ title: slots.title,
                           subtitle: slots.subtitle,
                           append: slots.append,
                           prepend: slots.prepend
                        }}
                     </CardHeader>
               )}
               { hasTextSlot && (
                  <CardText>
                     {slots.text?.()}
                  </CardText>
               )}

               { hasActionSlot && (
                  <CardAction>
                     {slots.action?.()}
                  </CardAction>
               )}

               {slots.default?.()}
            </div>
         )
      }
   }
});

