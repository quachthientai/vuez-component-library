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
 * Namespaces of the Button component.
 */
enum NAMESPACES {
   Button = 'vz-btn',
   ButtonContent = 'vz-btn__content',
   ButtonPrepend = 'vz-btn__prepend',
      ButtonPrependIcon = 'vz-btn__prepend-icon',
   ButtonAppend = 'vz-btn__append',
      ButtonAppendIcon = 'vz-btn__append-icon',
   ButtonLoader = 'vz-btn__loader',
}

/**
 * TODO inspect the dimension prop 
 * TODO predefined the classes for sub-component ✔
 * TODO create NAMESPACE enum type for component and sub-component classes ✔
 * TODO implement the accessibility ✔
 * TODO comment the code ✔
 * TODO: refactor composable (Dimension) to make it more reusable
 * TODO: button router-link can't use Enter and Space click
 * * See notepad++ for previous version
 */

const vButtonProps = makePropsFactory({
   /**
    * Whether the button is block or not.
    * @type {boolean}
    * @default false
    * @name block
    */
   block: {
      type: Boolean,
      default: false,
   },
   /**
    * The content for the button.
    * @type {string}
    * @default undefined
    * @name content
    */
   content: { 
      type: String,
      default: undefined,
   },
   /**
    * Whether the button is disabled or not.
    * @type {boolean}
    * @default false
    * @name disabled
    */
   disabled: {
      type: Boolean,
      default: false,
   },
   /**
    * Define the external link for the button.
    * @type {string}
    * @default undefined
    * @name href
    */
   href: {
      type: String,
      default: undefined,
   },
   /**
    * Define the icon for the button. Button will be icon only
    * @type {IconType}
    * @default undefined
    * @name icon
    */
   icon: {
      type: Object as PropType<IconType>,
      default: undefined,
   },
   /**
    * The route for the button.
    * @type {string | RouteLocationRaw}
    * @default undefined
    * @name to
    */
   to: {
      type: [String, Object] as PropType<string | RouteLocationRaw>,
      default: undefined,
   },
   ...makeDimensionProp(),
   /**
    * Define the type variant for the button.
    * @type {'outlined' | 'text' | 'solid'}
    * @default 'solid'
    * @name variant
    */
   ...makeVariantProp(),
   /**
    * Defined the append or prepend icon for the button.
    * @type {IconType}
    * @default undefined
    * @name appendIcon | prependIcon
    */
   ...makeIconProps(),
   /**
    * Defined the size for the button.
    * @type {'sm' | 'md' | 'lg'}
    * @default 'md'
    * @name size
    */
   ...makeSizeProp(),
   /**
    * Defined the color for the button.
    * @type {'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'plain'}
    * @default 'plain'
    * @name color
    */
   ...makeColorProp(),
   /**
    * Whether the button is loading or not.
    * @type {boolean}
    * @default false
    * @name loading
    */
   ...makeLoaderProp(),
   /**
    * Defined the elevation for the button.
    * @type {number}
    * @default 0
    * @name elevation
    */
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
            isIcon: !!(slots.icon || props.icon as IconType),
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
            variant: useVariants('vz-btn', props.variant as string),
            size: useSize('vz-btn', props.size as string),
            color: useColor('vz-btn', props.color as string),
            elevation: useElevation(props.elevation as number),
            dimension: useDimension(props),

            disabled: isDisabled ? NAMESPACE + '--disabled' : undefined,
            block: isBlock ? NAMESPACE + '--block' : undefined,
            icon: isIcon ? NAMESPACE + '--icon' : undefined,
         }
      });

      const iconProps = props.icon as IconType;
      
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
         iconProps
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
                  <div class="vz-btn__prepend">
                     { this.prependIcon
                        ? <Icon 
                              class={["vz-btn__prepend-icon", this.prependIcon.color]} 
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
                           { this.icon
                              ? <Icon 
                                    class={ this.iconProps.color } 
                                    width={ this.iconProps.width } 
                                    height={ this.iconProps.height } 
                                    icon={ this.iconProps.icon }
                                 />
                              : this.$slots.icon?.() }
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
                              class={["vz-btn__append-icon", this.appendIcon.color]} 
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

