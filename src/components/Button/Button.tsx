import { PropType, 
   defineComponent, 
   getCurrentInstance,
   ComponentInternalInstance 
} from "vue";
import { makePropsFactory } from "@/utils/makePropFactory";
import { DynamicTag } from "@/components/DynamicTag/DynamicTag";
import { Ripple } from "@/directives/ripple";
import { Icon } from "@iconify/vue";
import { useVariants, makeVariantProp } from "@/composable/variants";
import { useSize, makeSizeProp } from "@/composable/size";
import { useColor, makeColorProp } from "@/composable/color";
import { useIcon, makeIconProps, IconType } from "@/composable/icon";
import { useLoader, makeLoaderProp } from "@/composable/loader";
import { useElevation, makeElevationProp } from "@/composable/elevation";
import { useDimension, makeDimensionProp } from "@/composable/dimension";

const vButtonProps = makePropsFactory({
   block: Boolean,
   content: String,
   disabled: Boolean,
   href: String,
   icon: {
      type: Object as PropType<IconType>,
   },
   ...makeDimensionProp(),
   ...makeVariantProp(),
   ...makeIconProps(),
   ...makeSizeProp(),
   ...makeColorProp(),
   ...makeLoaderProp(),
   ...makeElevationProp(),
});

const Button = defineComponent({
   name: 'Button',
   props: vButtonProps,
   emits: {
      click(payload: {
         originalEvent: Event, 
         currentInstance: ComponentInternalInstance
      }) {
         return payload.originalEvent && payload.currentInstance
      }
   },
   directives: {
      'ripple': Ripple
   },
   setup(props, {attrs, slots, emit}) {
      const instance = getCurrentInstance();

      function onButtonClick(e: Event) {
         emit("click", {
            originalEvent: e,
            currentInstance: instance
         });
      }
      
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

         const hasIcon = !!(slots.icon ||props.icon);

         const hasContentProp = !!props.content;
         const hasLinkProp = !!props.href;
         const hasBlockProp = !!props.block;
         const isDisabled = !!(props.disabled || props.loading);
         const hasDefaultSlots = !!slots.default;
         const hasAppend = !!(slots.append || props.appendIcon);
         const hasPrepend = !!(slots.prepend || props.prependIcon);

         

         return (  
            <DynamicTag 
               type={ hasLinkProp ? 'a' : 'button' }
               style={ !hasIcon ? dimension : undefined }
               href={ props.href ? props.href : undefined }
               v-ripple
               class={[hasIcon ? 'btn-icon' : 'btn',
                  color,
                  variant,
                  size,
                  loader,
                  elevation,
                  hasBlockProp && 'btn-block']}
               disabled={ isDisabled ? 'disabled' : undefined }
               tabindex="0"
               onClick={ onButtonClick }
               role="button"> 
                  { (hasPrepend && !hasIcon) && (
                     <div class="btn__prepend">
                        { props.prependIcon
                           ? <Icon 
                                 class={["btn__prepend-icon", prependIcon.color]} 
                                 width={ prependIcon.width } 
                                 height={ prependIcon.height } 
                                 icon={ prependIcon.icon } 
                              />
                           : slots.prepend?.() }
                     </div>
                  )}

                  {(hasContentProp || hasDefaultSlots || hasIcon) && (
                     <span class="btn__content">
                        { (hasIcon) && (
                           <div class="flex align-middle">
                              { props.icon 
                                 ? <Icon 
                                    class={ iconProps.color } 
                                    width={ iconProps.width } 
                                    height={ iconProps.height } 
                                    icon={ iconProps.icon } 
                                    /> 
                                 : slots.icon?.()
                              }
                           </div> 
                        )}
                        { (hasContentProp && !hasIcon) && props.text }
                        { (hasDefaultSlots && !hasIcon) && slots.default?.() }
                        
                     </span>
                  )}

                  { (hasAppend && !hasIcon) && (
                     <div class="btn__append">
                        { props.appendIcon 
                           ? <Icon 
                                 class={["btn__append-icon", appendIcon.color]} 
                                 width={appendIcon.width}
                                 height={appendIcon.height}
                                 icon={appendIcon.icon}
                              />
                           : slots.append?.() }
                     </div>
                  )}

                  { props.loading && (
                     <span class="btn__loader">
                        <Icon icon="mdi:loading"></Icon>
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
   ButtonType,
   vButtonProps
}