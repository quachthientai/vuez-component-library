import { defineComponent, computed, defineProps } from "vue";
import { makePropsFactory } from "@/utils/makePropFactory";
import { CardHeader, CardText, CardAction  } from '@/components/Card/index';
import { useDimension, dimensionProps } from "@/composable/dimenstion";

const vCardProps = makePropsFactory({
   title: String,
   subtitle: String,
   appendIcon: String,
   prependIcon: String,
   elevation: {
      type: Number,
      default: 0
   },
   ...dimensionProps
})

const Card = defineComponent({
   name: 'Card',
   props: vCardProps,
   setup(props, {attrs, slots}) {
      const hasTitle = !!(slots.title || props.title);
      const hasSubtitle = !!(slots.subtitle || props.subtitle);
      const hasAppend = !!(slots.append || props.appendIcon);
      const hasPrepend = !!(slots.prepend || props.prependIcon);
      const hasTextSlot = !!slots.text;
      const hasActionSlot = !!slots.action;
      const dimension = useDimension(props);

      const elevation = computed(() => {
         return props.elevation as number > 0 ? `elevation-${props.elevation}` : '';
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

type CardType = InstanceType<typeof Card>;

export {
   Card,
   CardType
}

