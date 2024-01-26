import { makePropsFactory } from "@/utils/makePropFactory";
import { ExtractPropTypes, computed, defineComponent, ref } from "vue";
import { makeColorProp, useColor } from "@/composable/color";
import { Helpers } from "@/utils/helpers";

/**
 * Namespaces of the badge component.
 */
enum NAMESPACES {
   Badge = 'vz-badge',
   BadgeContent = 'vz-badge__content',
}

const vBadgeProps = makePropsFactory({
   /**
    * The content of the badge.
    * @type {string}
    * @default undefined
    * @name content
    */
   content: {
      type: String,
      default: undefined
   },
   /**
    * Whether the badge is dot style.
    * @type {boolean}
    * @default false
    * @name dot
    */
   dot: {
      type: Boolean,
      default: false
   },
   /**
    * Whether the badge is rounded style.
    * @type {boolean}
    * @default false
    * @name rounded
    */
   rounded: {
      type: Boolean,
      default: false
   },
   /**
    * Whether the badge is inline style.
    * @type {boolean}
    * @default false
    * @name inline
    */
   inline: {
      type: Boolean,
      default: false
   },
   /**
    * Whether the badge is overlay style.
    * @type {boolean}
    * @default false
    * @name overlay
    */
   overlay: {
      type: Boolean,
      default: false
   },
   ...makeColorProp(),
});

const Badge = defineComponent({
   name: 'Badge',
   props: vBadgeProps,
   inheritAttrs: false,
   setup(props, { attrs, slots }) {
      
      //* Computed properties */
      const booleanContext = computed(() => {
         return {
            isDot: props.dot && !props.rounded,
            isRounded: props.rounded && !props.dot,
            isInline: props.inline && !props.overlay,
            isOverlay: props.overlay,
            hasDefaultSlots: !!slots.default,
         }
      });

      const { isDot, 
         isRounded, 
         isInline, 
         isOverlay, 
         hasDefaultSlots 
      } = booleanContext.value;

      const componentClasses = computed(() => {
         return {
            dot: (isDot && !isRounded) ? `${NAMESPACES.Badge}--dot` : undefined,
            rounded: (isRounded && !isDot) ? `${NAMESPACES.Badge}--rounded` : undefined,
            inline: (isInline && !isOverlay) ? `${NAMESPACES.Badge}--inline` : undefined,
            overlay: isOverlay ? `${NAMESPACES.Badge}--overlay` : undefined,
            color: useColor(NAMESPACES.Badge, props.color as string)
         }
      })

      return {
         isDot,
         hasDefaultSlots,
         componentClasses,
      }
   },
   render() {
      const { dot, rounded, inline, overlay, color } = this.componentClasses;
      return (
         <div 
            {...this.$attrs}
            data-vz-component={Helpers.toPascalCase(NAMESPACES.Badge, '-')}
            class={[NAMESPACES.Badge,
               dot,
               rounded,
               inline,
               overlay,
               color,
           ]}
         >
            <div class={NAMESPACES.BadgeContent}>
               <span class={['vz-badge__content-badge']}>
                  { this.isDot ? undefined : this.content }
                  { (this.hasDefaultSlots && !this.isDot) && this.$slots.default() }
               </span>
            </div>
         </div>
      );
   },
});

type BadgeType = InstanceType<typeof Badge>;
type BadgePropType = ExtractPropTypes<typeof vBadgeProps>;

export {
   Badge,
   BadgeType,
   BadgePropType
}