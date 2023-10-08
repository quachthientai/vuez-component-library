import { DefineComponent, computed, defineComponent } from "vue";
import { makePropsFactory } from "@/utils/makePropFactory";
import { Ripple } from "@/directives/ripple";
import { useVariants, variantProps } from "@/composable/variants";

const vButtonProps = makePropsFactory({
   size: {
      type: String,
      default: 'md'
   },
   block: Boolean,
   disabled: Boolean,
   loading: Boolean,
   appendIcon: String,
   prependIcon: String,
   ...variantProps
});

const Button = defineComponent({
   name: 'Button',
   props: vButtonProps,
   setup(props, {attrs, slots}) {
      const variant = useVariants('btn', props.variant as string);
      console.log(variant)
      return () => {
         return (
            <button 
               type="button" 
               tabindex="0" 
               role="button">
                  { slots.default?.() }
            </button>
         )
      }
   }
})

type ButtonType = InstanceType<typeof Button>;

export {
   Button,
   ButtonType
}