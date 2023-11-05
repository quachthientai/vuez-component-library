import { defineComponent, h, PropType } from "vue";
import { makePropsFactory } from "@/utils/makePropFactory";
import { RouteLocationRaw } from "vue-router";

const vDynamicTagProps = makePropsFactory({
   type: String,
});

const DynamicTag = defineComponent({
   name: 'DynamicTag',
   props: vDynamicTagProps,
   setup(props, {attrs, slots}) {
      return () => {
         return (
            h( props.type, 
               
               { type: props.type ==='button' ? 'button' : undefined},

               slots.default && slots.default()
            )
         )
      }
   }
});

export {
   DynamicTag
}