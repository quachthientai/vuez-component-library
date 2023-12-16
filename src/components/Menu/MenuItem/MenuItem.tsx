import { makePropsFactory } from "@/utils/makePropFactory";
import { RouteLocationRaw } from 'vue-router';
import { 
   computed,
   ref,
   defineComponent,
   PropType,
   RendererElement,
   RendererNode,
   VNode,
   getCurrentInstance,
   ComponentInternalInstance
} from "vue";
import { isIncluded } from "@/utils/helpers";
import { Ripple } from "@/directives/ripple";
import { DynamicTag } from "../../DynamicTag/DynamicTag";
import { MenuItemModelIcon } from "./MenuItemType";
import { Icon } from "@iconify/vue";
import { BadgePropType, Badge } from "@/components/Badge/Badge";

/**
 * Namespace of the MenuItem component.
 */
const NAMESPACE = 'vz-menu-item';

const vMenuItemProps = makePropsFactory({
   /**
    * The aria-label for the menu item.
    * @type {string}
    * @name label
    */
   label: String,
   /**
    * The route for the menu item.
    * @type {string | RouteLocationRaw}
    * @name to
    */
   to: [String, Object] as PropType<RouteLocationRaw>,
   /**
    * The content for the menu item.
    * @type {string}
    * @default undefined
    * @name content
    */
   content: String,
   /**
    * Whether the menu item is disabled or not.
    * @type {boolean}
    * @default false
    * @name disabled
    */
   disabled: Boolean,
   /**
    * The id for the menu item.
    * @type {string}
    * @default undefined
    * @name id
    */
   id: String,
   /**
    * The href for the menu item.
    * @type {string}
    * @default false
    * @name href
    */
   href: String,
   /**
    * Whether the menu item has a divider or not.
    * @type {boolean}
    * @default false
    * @name divider
    */
   divider: Boolean,
   /**
    * The icon for the menu item.
    * @type {MenuItemModelIcon}
    * @default undefined
    * @name icon
    */
   icon: Object as PropType<MenuItemModelIcon>,
   /**
    * The badge for the menu item.
    * @type {BadgePropType | Function(): VNode}
    * @default undefined
    * @name badge
    */
   badge: [ Object as PropType<BadgePropType>,
      Function as PropType<() => VNode<RendererNode, RendererElement>>
   ],
   /**
    * The type of the menu item.
    * @type {'item' | 'header' | 'footer'}
    * @default 'item'
    * @name type
    */
   type: {
      type: String,
      default: 'item',
      validator: (value: string) => {
         return isIncluded(['item', 'header'], value);
      }
   },
   /**
    * Specify the tag for root element.
    * @type {string}
    * @default 'li'
    * @name tag
    */
   tag: {
      type: String,
      default: 'li',
   },
   /**
    * The key for the menu item.
    * @type {string}
    * @default undefined
    * @name key
    */
   key: String,
})

const MenuItem = defineComponent({
   name: 'MenuItem',
   props: vMenuItemProps,
   inheritAttrs: false,
   emits: {
      itemAction(payload: {
         originalEvent: Event, 
         // currentInstance: ComponentInternalInstance
      }) {
         return payload.originalEvent
         // return payload.originalEvent && payload.currentInstance
      }
   },
   // data() {
   //    return {         
   //       hasLabel: !!this.label,
   //       hasRoute: !!this.to,
   //       hasHref: !!this.href,
   //       hasContent: !!(this.$slots.default || this.content),
   //       hasIcon: !!(this.$slots.icon || this.icon),
   //       hasBadge: !!(this.$slots.badge || this.badge),
   //       hasDivider: !!this.divider,
   //       isDisabled: !!this.disabled,
   //    }
   // },
   directives: {
      'ripple': Ripple
   },
   // computed: { 
   //    itemClasses() {
   //       return {
   //          disabled: this.isDisabled 
   //             ? this.type === 'item' 
   //                ? NAMESPACE + '--disabled'
   //                : undefined
   //             : undefined,
   //          type: this.type === 'item' 
   //             ? undefined 
   //             : NAMESPACE + `-${this.type}`,
   //          content: this.hasContent && NAMESPACE + '__content',
   //          icon: this.hasIcon && NAMESPACE + '__icon',
   //          badge: this.hasBadge && NAMESPACE + '__badge',
   //       }
   //    },
   // },
   // watch: {
   //    tabIndex(oldValue: number, newValue: number) {
   //       console.log(oldValue, newValue)
   //    }
   // },
   setup(props, {slots, emit, attrs}) {
      const instance = getCurrentInstance();
      
      
      // * Computed properties
      const booleanContext = computed(() => {
         return {
            hasLabel: !!props.label,
            hasRoute: !!props.to,
            hasHref: !!props.href,
            hasContent: !!(slots.default || props.content),
            hasIcon: !!(slots.icon || props.icon),
            hasBadge: !!(slots.badge || props.badge),
            hasDivider: !!props.divider,
            isDisabled: !!props.disabled,
         }
      })

      const componentClasses = computed(() => {
         const { hasContent, hasIcon, hasBadge, isDisabled } = booleanContext.value;
         return {
            disabled: isDisabled
               ? props.type === 'item'
                  ? NAMESPACE + '--disabled'
                  : undefined
               : undefined,
            type: props.type === 'item'
               ? undefined
               : NAMESPACE + `-${props.type}`,
            content: hasContent && NAMESPACE + '__content',
            icon: hasIcon && NAMESPACE + '__icon',
            badge: hasBadge && NAMESPACE + '__badge',
         }
      })

      const componentAttrs = computed(() => {
         return {
            ...attrs,
            'data-vz-component': NAMESPACE,
            'data-disabled': props.disabled,
            'data-element-type': props.type,
            'role': 'menuitem',
            'aria-label': props.label || props.content,
            'to': props.to && !props.disabled ? props.to : undefined,
         }
      })

      return {
         componentAttrs,
         componentClasses,
         booleanContext,
      }
   },
   render() {
      const { hasHref,
         hasRoute,
         hasIcon,
         hasContent,
         hasBadge,
         hasDivider,
         isDisabled
      } = this.booleanContext;
      
      return (
         <>
            <DynamicTag
               class={[NAMESPACE, 
                  this.componentClasses['type'],
                  this.componentClasses['disabled']
               ]}
               {...this.componentAttrs}
               href={hasHref ? this.href : undefined}

               // onFocus={ this.onFocused }
               // onBlur={ this.onBlured }
               // onClick={ 
               //    !this.isDisabled && this.type === 'item' 
               //       ? this.onItemClick
               //       : undefined 
               // }
               //role="menuitem"
               //aria-label={ this.hasLabel ? this.label : this.content }
               // tabindex={ this.isDisabled ? -1 : 0 }

               //to={ this.hasRoute && !this.isDisabled ? this.to : undefined }
               type={ 
                  hasRoute && !isDisabled ? 'router-link' 
                     : this.to ? 'a' 
                     : this.tag
               }
               v-ripple={ this.type === 'item' && !isDisabled }
               
               //data-disabled={this.isDisabled}
               //data-element-type={this.type}
               //data-vz-component="VZMenuItem"
            >  
               { hasIcon && (
                  <div class={this.componentClasses['icon']}>
                     { this.icon 
                        ? <Icon 
                              icon={this.icon.icon} 
                              width="1.3rem" 
                              height="1.3rem" 
                           />
                        : this.$slots.icon?.() 
                     }
                  </div>
               )}
               
               { hasContent && (
                  <div class={this.componentClasses['content']}>
                     { this.content ? this.content : this.$slots.default?.() }
                  </div>
               )}
               
               { (hasBadge && this.type === 'item') && (
                  <div class={this.componentClasses['badge']}>
                     <div class="w-9"></div>
                     { this.badge 
                        ? typeof this.badge === 'function'
                           ? this.badge()
                           : <Badge {...this.badge as PropType<BadgePropType>} />
                        : this.$slots.badge?.()
                     }
                  </div>
               )}
            </DynamicTag>
            { hasDivider && (<hr/>)}
         </>
      )
   }
   // setup(props, {slots, emit, attrs}) { 
   //    const instance = getCurrentInstance();
      
   //    const icon = props.icon as MenuItemModelIcon;
   //    const tag = props.tag as string;
   //    const id = props.id;

   //    const disabled = computed(() => {
   //       if(props.type === 'header') {
   //          return undefined
   //       }
   //       return NAMESPACE + '--disabled';
   //    })

   //    const type = computed(() => {
   //       if(props.type === 'item') {
   //          return undefined
   //       }
   //       return NAMESPACE + `-${props.type as string}`;
   //    })

   //    const hasLabel = !!props.label;
   //    const hasRoute = !!props.to;
   //    const hasHref = !!props.href;
   //    const hasContent = !!(slots.default || props.content);
   //    const hasIcon = !!(slots.icon || props.icon);
   //    const hasBadge = !!(slots.badge || props.badge);
   //    const hasDivider = !!props.divider;
   //    const isDisabled = !!props.disabled;

   //    /**
   //     * Handles the click event of the menu item and emits an "itemAction" event with the original event and the current instance.
   //     * @param e - The click event.
   //     */
   //    function onItemClick(e: Event) {
   //       emit("itemAction", {
   //          originalEvent: e,
   //          currentInstance: instance
   //       });
   //    }

   //    return () => {
         
   //    }
   // }
})

type MenuItemType = InstanceType<typeof MenuItem>;

export {
   MenuItem,
   MenuItemType
}