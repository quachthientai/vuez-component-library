import { makePropsFactory } from '@/utils/makePropFactory';
import { RouteLocationRaw } from 'vue-router';
import { generateComponentId } from '@/utils/ComponentIDGenerator';
import { BadgePropType, Badge } from "@/components/Badge/Badge";
import { DynamicTag } from "@/components/DynamicTag/DynamicTag";
import { MenuItemModel } from '../MenuItemTest/types';
import { Checkbox } from '@/components/Checkbox/Checkbox';

import { Helpers } from '@/utils/helpers';
import { Icon } from "@iconify/vue";
import { Ripple } from "@/directives/ripple";
import { MenuTestKey, SelectKey } from '@/constants/injectionKey';
import { 
   computed,
   ref,
   inject,
   defineComponent,
   PropType,
   RendererElement,
   RendererNode,
   VNode,
   getCurrentInstance,
   ComponentInternalInstance,
   onMounted
} from "vue";

enum NAMESPACES {
	MENU_ITEM = 'vz-menu-item',
	MENU_ITEM_ITEM = 'vz-menu-item__item',
	MENU_ITEM_ICON = 'vz-menu-item__icon',
	MENU_ITEM_BADGE = 'vz-menu-item__badge',
	MENU_ITEM_HEADER = 'vz-menu-item__header',
	MENU_ITEM_CONTENT = 'vz-menu-item__content',
	MENU_ITEM_DISABLED = 'vz-menu-item--disabled',
	MENU_ITEM_DIVIDER = 'vz-menu-item__divider'
};

const vMenuItemProps = makePropsFactory({
   /**
    * The aria-label for the menu item.
    * @type {string}
    * @default undefined
    * @name label
    */
   label: String,
   /**
    * The route for the menu item.
    * @type {string | RouteLocationRaw}
    * @default undefined
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
	value: {
		type: [String, Number],
		default: undefined,
	},
	items: {
		type: Array as PropType<MenuItemModel[]>,
		default: () => []
	},
   /**
    * Whether the menu item is disabled or not.
    * @type {boolean}
    * @default false
    * @name disabled
    */
   disabled: {
      type: Boolean,
      default: false,
   },
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
    * @default undefined
    * @name href
    */
   href: String,
   /**
    * Whether the menu item has a divider or not.
    * @type {boolean}
    * @default false
    * @name divider
    */
   divider: {
      type: Boolean,
      default: false,
   },
   /**
    * The icon for the menu item.
    * @type {string}
    * @default undefined
    * @name icon
    */
   icon: String,
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
         return Helpers.isIncluded(['item', 'header'], value);
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
    * The action for the menu item.
    * @type {Function}
    * @default () => {}
    * @name action
    */
   action: {
      type: Function as PropType<(e: Event) => void>,
      default: () => {},
   },
	modelValue: {
		default: undefined,
	},
	readonly: {
		type: Boolean,
		default: false,
	},
   /**
    * The key for the menu item.
    * @type {string}
    * @default undefined
    * @name key
    */
   key: String,
})

const MenuItemTest = defineComponent({
	name: 'MenuItem',
	props: vMenuItemProps,
	inheritAttrs: false,
	emits: {
		'click': (payload: {
			originalEvent: Event,
			currentInstance: ComponentInternalInstance
		}) => {
			return payload.originalEvent && payload.currentInstance;
		},
		'focus': null
	},
	directives: {
		'ripple': Ripple
	},
	setup(props, { slots, emit, attrs }) {
		// * Get the current instance
      const instance = getCurrentInstance();

		const componentID = generateComponentId(NAMESPACES.MENU_ITEM);
		const MenuContext = inject(MenuTestKey);
		const {
			closeOnSelect,
			hide,
		} = MenuContext;

		const booleanContext = computed(() => {
			return {
            hasLabel: !!props.label,
            hasRoute: !!props.to,
            hasHref: !!props.href,
            hasContent: !!(slots.content || props.content),
            hasIcon: !!(slots.icon || props.icon),
            hasBadge: !!(slots.badge || props.badge),
            hasDivider: !!props.divider,
         }
		});

		const { hasBadge,
         hasHref,
         hasIcon,
         hasLabel,
         hasRoute,
         hasContent,
         hasDivider,
      } = booleanContext.value;

		const componentClasses = computed(() => {
			return {
				disabled: props.disabled && NAMESPACES.MENU_ITEM_DISABLED,
			}
		});

		const componentAttrs = computed(() => {
			return {
				...attrs,
				'role': 'menuitem',
				'data-disabled': props.disabled,
				'data-menu-item-type': props.type,
				'data-value': props.value,
				'target': hasHref ? '_blank' : undefined,
				'href': hasHref ? props.href : undefined,
				'aria-label': hasLabel ? props.label : props.content,
				'to': hasRoute && !props.disabled ? props.to : undefined,
				'data-vz-component': Helpers.toPascalCase(NAMESPACES.MENU_ITEM, '-'),
			};
		});

		// * Methods *
		function onItemClick(e: Event, callback?: Function) {
			callback && callback(e);
			
			if(closeOnSelect.value) {
				hide(e);
			}

			emit('click', {
				originalEvent: e,
				currentInstance: instance,
			});
		}

		function handleFocus(e: Event) {
			emit('focus', e);
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
         onItemClick,

			handleFocus
      }
	},
	render() {
		return (
			<>
				<DynamicTag
					type={
						this.hasRoute && !this.disabled 
							? 'router-link'
							: this.hasHref ? 'a'
							: this.tag
					}
					v-ripple={this.type === 'item' && !this.disabled && !this.readonly}
					id={generateComponentId('vz-menu-item')}
					onFocus={(e: Event) => this.handleFocus(e)}
					onClick={
						!this.disabled && this.type === 'item' && !this.readonly
							? (e: Event) => {
								this.action
									? this.onItemClick(e, this.action)
									: this.onItemClick(e);
								}
							: undefined
					}
					class={[NAMESPACES.MENU_ITEM,
						this.type === 'header' && NAMESPACES.MENU_ITEM_HEADER
					]}
					{...this.componentAttrs}
				>	
					{ this.hasIcon && (
						<div class={NAMESPACES.MENU_ITEM_ICON}>
							{ this.icon 
								? <Icon 
										icon={this.icon}
									/>
								: this.$slots.icon?.()
							}
						</div>
					)}

					{ this.hasContent && (
						<div class={NAMESPACES.MENU_ITEM_CONTENT}>
							{ this.content || this.$slots.content?.() }
						</div>
					)}

					{ (this.hasBadge && this.type === 'item') && (
						<div class={NAMESPACES.MENU_ITEM_BADGE}>
							<div class="w-9"></div>
							{ this.badge 
								? typeof this.badge === 'function'
									? this.badge()
									: <Badge {...this.badge as PropType<BadgePropType>} />
								: this.$slots.badge?.()
							}
						</div>
					)}

					{ this.$slots.default?.() }
				</DynamicTag>
				{ this.hasDivider && (<hr class={NAMESPACES.MENU_ITEM_DIVIDER}/>) }
			</>
		);
	}
});

type MenuItemType = InstanceType<typeof MenuItemTest>;

export {
	MenuItemTest,
	MenuItemType,
};