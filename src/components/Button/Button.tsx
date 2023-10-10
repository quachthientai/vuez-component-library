import { defineComponent, getCurrentInstance } from "vue";
import { makePropsFactory } from "@/utils/makePropFactory";
import { Ripple } from "@/directives/ripple";
import { useVariants, variantProps } from "@/composable/variants";
import { useSize, sizeProps } from "@/composable/size";
import { useColor, colorProps } from "@/composable/color";
import { useIcon, iconProps, Icon } from "@/composable/icon";
import { useLoader, loaderProps } from "@/composable/loader";

const vButtonProps = makePropsFactory({
   block: Boolean,
   text: String,
   disabled: Boolean,
   ...iconProps,
   ...variantProps,
   ...sizeProps,
   ...colorProps,
   ...loaderProps
});

const Button = defineComponent({
   name: 'Button',
   props: vButtonProps,
   directives: {
      'v-ripple': Ripple
   },
   setup(props, {attrs, slots}) {
      
      const variant = useVariants('btn', props.variant as string);
      const size = useSize('btn', props.size as string);
      const color = useColor('btn', props.color as string);
      const loader = useLoader('btn', props.loading as boolean);
      
      const prependIcon = props.prependIcon as Icon;
      const appendIcon = props.appendIcon as Icon;

      const hasTextProps = !!props.text;
      const hasDefaultSlots = !!slots.default;
      const hasAppend = !!(slots.append || props.appendIcon);
      const hasPrepend = !!(slots.prepend || props.prependIcon);
      
      return () => {
         return (
            <button 
               type="button"
               class={['btn',color, variant, size]}
               tabindex="0" 
               role="button"> 

                  {hasPrepend && (
                     <div class="btn__prepend">
                        { props.prependIcon 
                           ? <Icon class="btn__prepend-icon" color={prependIcon.color} width={prependIcon.width} height={prependIcon.height} icon={ prependIcon.icon } />
                           : slots.prepend?.() }
                     </div>
                  )}

                  { (hasTextProps || hasDefaultSlots && !loader) && (
                     <span class="btn__content">
                        { props.text ?? props.text }
                        { slots.default?.() }
                        
                     </span>
                  )}

                  {hasAppend && (
                     <div class="btn__append">
                        { props.appendIcon 
                           ? <Icon class="btn__append-icon" color={appendIcon.color} width={appendIcon.width} height={appendIcon.height} icon={ appendIcon.icon } />
                           : slots.append?.() }
                     </div>
                  )}
               
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