import { makePropsFactory } from "@/utils/makePropFactory";
import { defineComponent, h, resolveComponent } from "vue";

const vDynamicTagProps = makePropsFactory({
   type: String,
});

const DynamicTag = defineComponent({
   name: 'DynamicTag',
   props: vDynamicTagProps,
   setup(props, {attrs, slots}) {

      const isRouterLink = props.type === 'router-link'
      const isAnchor = props.type === 'a'

      return () => {
         return (
            h( isRouterLink ? <router-link /> : props.type, 
               { type: props.type ==='button' ? 'button' : undefined,
                 to: isRouterLink && attrs.to ? attrs.to : undefined,
                 href: isAnchor && attrs.href ? attrs.href : undefined,
                 tabindex: 0,
               },
               { default: () => slots.default && slots.default() }
            )
         )

      }
   }
});

// const GlobalDynamicTag = resolveComponent('DynamicTag');

export {
   DynamicTag
};
