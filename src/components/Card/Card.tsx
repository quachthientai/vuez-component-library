import { defineComponent, computed, useAttrs } from "vue";
import makePropsFactory from "@/utils/makePropFactory";

const vProps = makePropsFactory({
   title: {
      type: String,
   },
   variant: {
      type: String,
      validator: (value: string) => {
         return ['outlined', 'elevated'].includes(value);
      }
   },
   subtitle: {
      type: String,
   },
   width: {
      type: [String, Number],
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
      

      console.log(!!attrs.outlined);
      const elevation = computed(() => {
         return props.elevation as number > 0 ? `elevation-${props.elevation}` : '';
      });
      const outlined = computed(() => {
         return
      })
      
      
      return() => {
         return (
            <div class={['card', elevation.value]} >
               {hasDefaultSlot && slots.default?.()}
            </div>
         )
      }
   }
});

