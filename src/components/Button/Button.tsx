import { PropType, defineComponent, ref } from "vue";
import { makePropsFactory } from "@/utils/makePropFactory";
import { DynamicTag } from "@/utils/test";
import { Ripple } from "@/directives/ripple";
import { Icon } from "@iconify/vue";
import { useVariants, variantProps } from "@/composable/variants";
import { useSize, sizeProps } from "@/composable/size";
import { useColor, colorProps } from "@/composable/color";
import { useIcon, iconProps, IconType } from "@/composable/icon";
import { useLoader, loaderProps } from "@/composable/loader";
import { useElevation, elevationProps } from "@/composable/elevation";
import { useDimension, dimensionProps } from "@/composable/dimension";

const vButtonProps = makePropsFactory({
   block: Boolean,
   text: String,
   disabled: Boolean,
   href: String,
   icon: {
      type: Object as PropType<IconType>,
   },
   ...dimensionProps,
   ...iconProps,
   ...variantProps,
   ...sizeProps,
   ...colorProps,
   ...loaderProps,
   ...elevationProps,
});

const Button = defineComponent({
   name: 'Button',
   props: vButtonProps,
   directives: {
      'ripple': Ripple
   },
   setup(props, {attrs, slots}) {
      return () => {

         const loader = useLoader('btn', props.loading as boolean);
         const variant = useVariants('btn', props.variant as string);
         const size = useSize('btn', props.size as string);
         const color = useColor('btn', props.color as string);
         const elevation = useElevation(props.elevation as number);
         const dimension = useDimension(props);
         
         const prependIcon = props.prependIcon as IconType;
         const appendIcon = props.appendIcon as IconType;
         const iconProps = props.icon as IconType;

         const hasIconProps = !!props.icon;
         const hasTextProps = !!props.text;
         const hasLinkProps = !!props.href;
         const hasBlockProps = !!props.block;
         const isDisabled = !!(props.disabled || props.loading);
         const hasDefaultSlots = !!slots.default;
         const hasAppend = !!(slots.append || props.appendIcon);
         const hasPrepend = !!(slots.prepend || props.prependIcon);

         return (
            <DynamicTag 
               type={ hasLinkProps ? 'a' : 'button' }
               style={ !hasIconProps ? dimension : undefined }
               href={ props.href ? props.href : undefined }
               v-ripple
               class={[hasIconProps ? 'btn-icon' : 'btn',
                  color,
                  variant,
                  size,
                  loader,
                  elevation,
                  hasBlockProps && 'btn-block']}
               disabled={ isDisabled ? 'disabled' : undefined }
               tabindex="0" 
               role="button"> 
                  { (hasPrepend && !hasIconProps) && (
                     <div class="btn__prepend">
                        { props.prependIcon
                           ? <Icon 
                                 class="btn__prepend-icon" 
                                 color={ prependIcon.color } 
                                 width={ prependIcon.width } 
                                 height={ prependIcon.height } 
                                 icon={ prependIcon.icon } 
                              />
                           : slots.prepend?.() }
                     </div>
                  )}

                  {(hasTextProps || hasDefaultSlots || hasIconProps) && (
                     <span class="btn__content">
                        { hasIconProps && (
                           <Icon 
                              class="btn__icon" 
                              color={ iconProps.color } 
                              width={ iconProps.width } 
                              height={ iconProps.height } 
                              icon={ iconProps.icon } 
                           />
                        )}
                        { (hasTextProps && !hasIconProps) && props.text }
                        { (hasDefaultSlots && !hasIconProps) && slots.default?.() }
                        
                     </span>
                  )}

                  { (hasAppend && !hasIconProps) && (
                     <div class="btn__append">
                        { props.appendIcon 
                           ? <Icon 
                                 class="btn__append-icon"
                                 color={appendIcon.color}
                                 width={appendIcon.width}
                                 height={appendIcon.height}
                                 icon={appendIcon.icon}
                              />
                           : slots.append?.() }
                     </div>
                  )}

                  { props.loading && (
                     <span class="btn__loader">
                        <Icon icon="mingcute:loading-fill"></Icon>
                     </span>
                  )}
            </DynamicTag>
         )
      }
   },
})

type ButtonType = InstanceType<typeof Button>;

export {
   Button,
   ButtonType
}