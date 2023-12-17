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
      onItemAction(payload: {
         originalEvent: Event, 
         currentInstance: ComponentInternalInstance
      }) {
         return payload.originalEvent && payload.currentInstance
      }
   },
   directives: {
      'ripple': Ripple
   },
   setup(props, {slots, emit, attrs}) {
      // * Get the current instance
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

      const { hasBadge,
         hasContent,
         hasDivider,
         hasHref,
         hasIcon,
         hasLabel,
         hasRoute,
         isDisabled,
      } = booleanContext.value;

      const componentClasses = computed(() => {
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
            'aria-label': hasLabel ? props.label : props.content,
            'data-disabled': isDisabled,
            'data-element-type': props.type,
            'data-vz-component': NAMESPACE,
            'href': hasHref ? props.href : undefined,
            'role': 'menuitem',
            'to': hasRoute && !isDisabled ? props.to : undefined,
         }
      })
      
      function onItemClick(e: Event) {
         emit('onItemAction', {
            originalEvent: e,
            currentInstance: instance
         })
      }

      return {
         componentAttrs,
         componentClasses,
         hasBadge,
         hasContent,
         hasDivider,
         hasHref,
         hasIcon,
         hasLabel,
         hasRoute,
         isDisabled,
         onItemClick,
      }
   },
   render() {
      return (
         <>
            <DynamicTag
               class={[NAMESPACE, 
                  this.componentClasses['type'],
                  this.componentClasses['disabled']
               ]}
               {...this.componentAttrs}

               type={ 
                  this.hasRoute && !this.isDisabled ? 'router-link' 
                     : this.to ? 'a' 
                     : this.tag
               }

               v-ripple={ this.type === 'item' && !this.isDisabled }
               // onFocus={ this.onFocused }
               // onBlur={ this.onBlured }
               onClick={
                  !this.isDisabled && this.type === 'item'
                     ? this.onItemClick
                     : undefined 
               }
            >  
               { this.hasIcon && (
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
               
               { this.hasContent && (
                  <div class={this.componentClasses['content']}>
                     { this.content ? this.content : this.$slots.default?.() }
                  </div>
               )}
               
               { (this.hasBadge && this.type === 'item') && (
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
            { this.hasDivider && (<hr/>)}
         </>
      )
   }
})

type MenuItemType = InstanceType<typeof MenuItem>;

export {
   MenuItem,
   MenuItemType
}