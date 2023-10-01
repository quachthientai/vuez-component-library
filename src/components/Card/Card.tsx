import { defineComponent, computed, useAttrs } from "vue";
import makePropsFactory from "@/utils/makePropFactory";
import { CardHeader, CardTitle, CardSubtitle } from './index';

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
      const hasDefaultSlot = !!slots.default;
      const hasTitle = !!(slots.title || props.title);
      const hasSubtitle = !!(slots.subtitle || props.subtitle);
      const hasAppend = !!(slots.append || props.appendIcon);
      const hasPrepend = !!(slots.prepend || props.prependIcon);

        
      const elevation = computed(() => {
         return props.elevation as number > 0 ? `elevation-${props.elevation}` : '';
      });

      return() => {
         return (
            <div style="width: 400px; margin:3rem;" class={['card', elevation.value]}>
               
               {  (hasTitle || hasSubtitle || hasPrepend || hasAppend) && (
                  <CardHeader 
                     title={props.title ? props.title : slots.title?.()[0].children} 
                     subtitle={props.subtitle ? props.subtitle : slots.subtitle?.()[0].children} 
                  />
               )}

               {slots.default?.()}
               
            </div>
         )
      }
   }
});

