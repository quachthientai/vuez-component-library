import { PropType, 
   defineComponent, 
   getCurrentInstance,
   ComponentInternalInstance, 
   computed
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
import { Helpers } from "@/utils/helpers";
import { RouteLocationRaw } from "vue-router";

const NAMESPACE = 'vz-btn';

/**
 * TODO add prop "to" to storybook
 * TODO inspect the dimension prop
 * TODO predefined the classes for sub-component
 * TODO create NAMESPACE enum type for component and sub-component classes
 * TODO implement the accessibility
 * TODO comment the code
 * * See notepad++ for previous version
 */

const vButtonProps = makePropsFactory({
   block: {
      type: Boolean,
      default: false,
   },
   content: { 
      type: String,
      default: undefined,
   },
   disabled: {
      type: Boolean,
      default: false,
   },
   href: {
      type: String,
      default: undefined,
   },
   icon: {
      type: Object as PropType<IconType>,
      default: undefined,
   },
   to: {
      type: [String, Object] as PropType<string | RouteLocationRaw>,
      default: undefined,
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
   inheritAttrs: false,
   emits: {
      click(payload: {
         originalEvent: Event, 
         currentInstance: ComponentInternalInstance
      }){
         return payload.originalEvent && payload.currentInstance
      }
   },
   directives: {
      'ripple': Ripple
   },
   setup(props, {attrs, slots, emit}) {
      // * Get the current instance */
      const instance = getCurrentInstance();

      // * Computed properties */
      const booleanContext = computed(() => {
         return {
            hasContent: !!(slots.default || props.content || slots.content),
            hasHref: !!props.href,
            hasRoute: !!props.to,
            hasAppendIcon: !!(slots.append || props.appendIcon),
            hasPrependIcon: !!(slots.prepend || props.prependIcon),
            hasDefaultSlots: !!slots.default,
            isDisabled: !!(props.disabled || props.loading),
            isBlock: !!props.block, 
            isIcon: !!(slots.icon || props.icon),
         }
      });

      const {
         hasHref,
         hasRoute,
         hasContent,
         hasAppendIcon,
         hasPrependIcon,
         hasDefaultSlots,
         isIcon,
         isBlock,
         isDisabled,
      } = booleanContext.value;
   
      const componentAttrs = computed(() => {
         return {
            ...attrs,
            'role': 'button',
            'tabindex': 0,
            'data-vz-component': Helpers.toPascalCase(NAMESPACE, '-'),
            'data-disabled': isDisabled,
            'to': hasRoute && !isDisabled ? props.to : undefined,
            'target': hasHref ? '_blank' : undefined,
            'href': hasHref ? props.href : undefined,
         }
      })

      const componentClasses = computed(() => {
         return {
            loader: useLoader('vz-btn', props.loading as boolean),
            variant: useVariants('btn', props.variant as string),
            size: useSize('btn', props.size as string),
            color: useColor('btn', props.color as string),
            elevation: useElevation(props.elevation as number),
            dimension: useDimension(props),

            disabled: isDisabled ? NAMESPACE + '--disabled' : undefined,
            block: isBlock ? NAMESPACE + '--block' : undefined,
            icon: isIcon ? NAMESPACE + '--icon' : undefined,
         }
      });
      
      function onButtonClick(e: Event) {
         emit("click", {
            originalEvent: e,
            currentInstance: instance
         });
      }

      return {
            isIcon,
            isDisabled,
            hasHref,
            hasRoute,
            hasContent,
            hasAppendIcon,
            hasPrependIcon,
            hasDefaultSlots,
            onButtonClick,
            componentAttrs,
            componentClasses,
         }
   },
   render() {
      const { color, variant, size, loader, elevation, block, icon } = this.componentClasses;
      return (  
            <DynamicTag
               v-ripple   
               {...this.componentAttrs}
               class={[NAMESPACE,
                  color,
                  variant,
                  size,
                  loader,
                  elevation,
                  block,
                  icon,
               ]}
               disabled={ this.isDisabled ? 'disabled' : undefined }
               type={
                  this.hasRoute && !this.isDisabled ? 'router-link'
                     : this.hasHref ? 'a'
                     : 'button'
               }
               onClick={ this.onButtonClick }
            >
               { (this.hasPrependIcon && !this.isIcon) && (
                  <div class="btn__prepend">
                     { this.prependIcon
                        ? <Icon 
                              class={["btn__prepend-icon", this.prependIcon.color]} 
                              width={ this.prependIcon.width } 
                              height={ this.prependIcon.height } 
                              icon={ this.prependIcon.icon }
                           />
                        : this.$slots.prepend?.() }
                  </div>
               )}

               { (this.hasContent || this.hasDefaultSlots || this.isIcon) && (
                  <span class="vz-btn__content">
                     { (this.isIcon) && (
                        <div class="flex align-middle">
                           { this.isIcon
                              ? <Icon 
                                    class={ this.icon.color } 
                                    width={ this.icon.width } 
                                    height={ this.icon.height } 
                                    icon={ this.icon.icon }
                                 />
                              : this.$slots.prepend?.() }
                        </div>
                     )}
                     { (this.hasContent && !this.isIcon) && this.content }
                     { (this.hasDefaultSlots && !this.isIcon) && this.$slots.default?.() }
                  </span>
               )}

               { (this.hasAppendIcon && !this.isIcon) && (
                  <div class="vz-btn__append">
                     { this.appendIcon
                        ? <Icon 
                              class={["btn__append-icon", this.appendIcon.color]} 
                              width={ this.appendIcon.width } 
                              height={ this.appendIcon.height } 
                              icon={ this.appendIcon.icon }
                           />
                        : this.$slots.append?.() }
                  </div>
               )}

               { this.loading && (
                  <span class="vz-btn__loader">
                     <Icon icon="mdi:loading" />
                  </span>
               )}
            </DynamicTag>
         )
   }
})

type ButtonType = InstanceType<typeof Button>;

export {
   Button,
   vButtonProps,
   ButtonType
}

