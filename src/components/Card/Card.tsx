import { defineComponent, computed, useAttrs } from "vue";
import makePropsFactory from "@/utils/makePropFactory";
import { CardHeader, CardText, CardAction  } from '@/components/Card/index';

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
      const a = slots.text?.()
      return() => {
         return (
            <div style="width: 400px; margin:3rem;" class={['card', elevation.value]}>
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

