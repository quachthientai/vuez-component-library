import { makePropsFactory } from "@/utils/makePropFactory";
import { 
   computed,
   defineComponent,
   PropType,
   RendererElement,
   RendererNode,
   VNode
} from "vue";

import { isIncluded } from "@/utils/helpers";
import { Ripple } from "@/directives/ripple";
import { DynamicTag } from "../../DynamicTag/DynamicTag";
import { MenuItemModelIcon } from "./MenuItemType";
import { Icon } from "@iconify/vue";
import { BadgePropType } from "@/components/Badge/Badge";

type MenuItemModel = {
   label: {
      type: string,
      required: true,
   }
   disabled?: boolean;
   href?: string; 
   divider?: boolean;
   type?: 'item' | 'header' | 'footer';
   tag?: string;
   badge?: BadgePropType | (() => VNode<RendererNode, RendererElement>);
   prependIcon?: MenuItemModelIcon;
   appendIcon?: MenuItemModelIcon;
}

const vMenuItemProps = makePropsFactory({
   /**
    * The label for the menu item.
    * @type {string}
    * @required
    * @name label
    */
   label: {
      type: String,
      required: true,
   },
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
    * @default undefined
    * @name href
    */
   href: String,
   /**
    * Whether the menu item is a divider or not.
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
    * @type {(BadgePropType | Function(): VNode)}
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
    * The tag for the menu item.
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
   directives: {
      'ripple': Ripple
   },
   setup(props, {slots}) {
      const icon = props.icon as MenuItemModelIcon;
      const tag = props.tag as string;
      const type = computed(() => {
         if(props.type === 'item') {
            return undefined
         }
         return `vz-menu-item--${props.type as string}`;
      })

      const hasLabel = !!(slots.default || props.label);
      const hasIcon = !!(slots.icon || props.icon);
      const hasBadge = !!(slots.badge || props.badge);
      const hasDivider = !!props.divider;

      return () => {
         if(typeof props.badge === 'function') {
            console.log('yes, its a function')
         }
         return (
            <>
               <DynamicTag
                  v-ripple={props.type === 'item'}
                  type={tag}
                  class={["vz-menu-item",
                     type.value
                  ]}
               >  
                  { hasIcon && (
                     <div class="vz-menu-item__icon">
                        { props.icon 
                           ? <Icon 
                                 icon={icon.icon} 
                                 width="1.3rem" 
                                 height="1.3rem" 
                              />
                           : slots.icon?.() }
                     </div>
                  )}
                  
                  { hasLabel && (
                     <div class="vz-menu-item__label">
                        { props.label ? props.label : slots.default?.() }
                     </div>
                  )}

                  { hasBadge && (
                     <div class="vz-menu-item__badge">
                        <div class="w-9"></div>
                        { typeof props.badge === 'function' 
                           ? props?.badge() 
                           : slots.badge?.() }
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