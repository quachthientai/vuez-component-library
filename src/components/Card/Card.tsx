import { defineComponent, computed, useAttrs } from "vue";
import makePropsFactory from "@/utils/makePropFactory";
import { CardHeader } from './index';

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
   name: 'v-card',
   props: vProps,
   setup(props, {attrs, slots}) {
      const hasDefaultSlot = !!slots.default;
      const hasTitle = !!(slots.title || props.title);
      const hasSubtitle = !!(slots.subtitle || props.subtitle);
      const hasAppend = !!(slots.append || props.appendIcon);
      const hasPrepend = !!(slots.prepend || props.prependIcon);

        
      const elevation = computed(() => {
         return props.elevation as number > 0 ? `elevation-${props.elevation}` : '';
      });

      return() => {
         console.log(slots.title);
         return (
            <div style="width: 400px; margin:3rem;" class={['card', elevation.value]}>
               {  (hasTitle || hasSubtitle || hasPrepend || hasAppend) && (
                  <CardHeader 
                     title={props.title ?? props.title }
                     appendIcon={props.appendIcon ?? props.appendIcon} 
                     subtitle={props.subtitle ?? props.subtitle}
                  >
                     {{ title: slots.title,
                        subtitle: slots.subtitle,
                     }}
                     
                  </CardHeader>
               )}
               

               {slots.default?.()}
               
            </div>
         )
      }
   }
});

