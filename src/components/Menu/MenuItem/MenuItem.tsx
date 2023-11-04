import { makePropsFactory } from "@/utils/makePropFactory";
import { 
   computed,
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
    * The label for the menu item.
    * @type {string}
    * @name label
    */
   label: String,
   /**
    * Whether the menu item is disabled or not.
    * @type {boolean}
    * @default false
    * @name disabled
    */
   disabled: Boolean,
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
})

const MenuItem = defineComponent({
   name: 'MenuItem',
   props: vMenuItemProps,
   emits: {
      itemAction(payload: {
         originalEvent: Event, 
         currentInstance: ComponentInternalInstance
      }) {
         return payload.originalEvent && payload.currentInstance
      }
   },
   directives: {
      'ripple': Ripple
   },
   setup(props, {slots, emit}) { 
      const instance = getCurrentInstance();
      console.log(instance.type.name)
      const icon = props.icon as MenuItemModelIcon;
      const tag = props.tag as string;

      const disabled = computed(() => {
         if(props.type === 'header') {
            return undefined
         }
         return NAMESPACE + '--disabled';
      })

      const type = computed(() => {
         if(props.type === 'item') {
            return undefined
         }
         return NAMESPACE + `-${props.type as string}`;
      })

      const hasLabel = !!(slots.default || props.label);
      const hasIcon = !!(slots.icon || props.icon);
      const hasBadge = !!(slots.badge || props.badge);
      const hasDivider = !!props.divider;
      const hasDisabled = !!props.disabled;

      /**
       * Handles the click event of the menu item and emits an "itemAction" event with the original event and the current instance.
       * @param e - The click event.
       */
      const onItemClick = (e: Event) => {
         emit("itemAction", {
            originalEvent: e,
            currentInstance: instance
         });
      }

      return () => {
         return (
            <>
               <DynamicTag
                  v-ripple={props.type === 'item'}
                  type={tag}
                  onClick={onItemClick}
                  class={[NAMESPACE,
                     type.value,
                     hasDisabled && disabled.value
                  ]}
               >  
                  { hasIcon && (
                     <div class={`${NAMESPACE}__icon`}>
                        { props.icon 
                           ? <Icon 
                                 icon={icon.icon} 
                                 width="1.3rem" 
                                 height="1.3rem" 
                              />
                           : slots.icon?.() 
                        }
                     </div>
                  )}
                  
                  { hasLabel && (
                     <div class={`${NAMESPACE}__label `}>
                        { props.label ? props.label : slots.default?.() }
                     </div>
                  )}
               
                  { (hasBadge && props.type === 'item') && (
                     <div class={`${NAMESPACE}__badge`}>
                        <div class="w-9"></div>
                        { props.badge 
                           ? typeof props.badge === 'function'
                              ? props.badge()
                              : <Badge {...props.badge as PropType<BadgePropType>} />
                           : slots.badge?.()
                        }
                     </div>
                  )}
               </DynamicTag>
               { hasDivider && (<hr/>)}
            </>
         )
      }
   }
})

type MenuItemType = InstanceType<typeof MenuItem>;

export {
   MenuItem,
   MenuItemType
}