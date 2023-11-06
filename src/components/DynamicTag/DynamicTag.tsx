import { defineComponent, h, PropType } from "vue";
import { makePropsFactory } from "@/utils/makePropFactory";
import { RouterLink } from "vue-router";

const vDynamicTagProps = makePropsFactory({
   type: String,
});

const DynamicTag = defineComponent({
   name: 'DynamicTag',
   props: vDynamicTagProps,
   setup(props, {attrs, slots}) {
      
      const type = props.type as string
      const isRouterLink = type === 'router-link'
      
      return () => {
         return (
            h( isRouterLink ? <router-link /> : type, 
               { type: props.type ==='button' ? 'button' : undefined,
                 to: isRouterLink && attrs.to ? attrs.to : undefined 
               },
               { default: () => slots.default && slots.default() }
            )
         )

      }
   }
});

export {
   DynamicTag
}