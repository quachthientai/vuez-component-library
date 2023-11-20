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
         currentInstance: ComponentInternalInstance
      }) {
         return payload.originalEvent && payload.currentInstance
      }
   },
   data() {
      return {         
         hasLabel: !!this.label,
         hasRoute: !!this.to,
         hasHref: !!this.href,
         hasContent: !!(this.$slots.default || this.content),
         hasIcon: !!(this.$slots.icon || this.icon),
         hasBadge: !!(this.$slots.badge || this.badge),
         hasDivider: !!this.divider,
         isDisabled: !!this.disabled,
      }
   },
   directives: {
      'ripple': Ripple
   },
   computed: { 
      itemClasses() {
         return {
            disabled: this.isDisabled 
               ? this.type === 'item' 
                  ? NAMESPACE + '--disabled'
                  : undefined
               : undefined,
            type: this.type === 'item' 
               ? undefined 
               : NAMESPACE + `-${this.type}`,
            content: this.hasContent && NAMESPACE + '__content',
            icon: this.hasIcon && NAMESPACE + '__icon',
            badge: this.hasBadge && NAMESPACE + '__badge',
         }
      },
   },
   watch: {
      tabIndex(oldValue: number, newValue: number) {
         console.log(oldValue, newValue)
      }
   },
   methods: {
      onFocused(e: Event) { 
         // console.log(e.target);
      },
      onBlured(e: Event) {
         // console.log('blured')
      },
      onItemClick(e: Event) {
         console.log(e)
      }
   },
   render() {
      return (
         <>
            <DynamicTag
               class={[NAMESPACE,
                  this.itemClasses.type,
                  this.itemClasses.disabled
               ]}
               href={this.hasHref ? this.href : undefined}

               onFocus={ this.onFocused }
               onBlur={ this.onBlured }
               onClick={ 
                  !this.isDisabled && this.type === 'item' 
                     ? this.onItemClick
                     : undefined 
               }

               role="menuitem"
               aria-label={ this.hasLabel ? this.label : this.content }
               // tabindex={ this.isDisabled ? -1 : 0 }

               to={ this.hasRoute && !this.isDisabled ? this.to : undefined }
               type={ 
                  this.hasRoute && !this.isDisabled ? 'router-link' 
                     : this.hasHref ? 'a' 
                     : this.tag
               }
               v-ripple={ this.type === 'item' && !this.isDisabled }
               
               data-disabled={this.isDisabled}
               data-element-type={this.type}
               data-vz-component="VZMenuItem"
            >  
               { this.hasIcon && (
                  <div class={this.itemClasses.icon}>
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
                  <div class={this.itemClasses.content}>
                     { this.content ? this.content : this.$slots.default?.() }
                  </div>
               )}
            
               { (this.hasBadge && this.type === 'item') && (
                  <div class={this.itemClasses.badge}>
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