import { makePropsFactory } from '@/utils/makePropFactory';
import { generateComponentId } from '@/utils/ComponentIDGenerator';
import { Helpers } from '@/utils/helpers';
import { DynamicTag } from '../DynamicTag/DynamicTag';
import { MenuItemModel } from '../MenuItemTest/types';
import { MenuTestKey } from '@/constants/injectionKey';
import { SelectKey } from '@/constants/injectionKey';

import { MenuItemTest } from '@/components/MenuItemTest/MenuItemTest';
import { DOM } from "@/utils/DOM";
import { computePosition, 
   autoUpdate, 
   Placement, 
   offset, 
   shift, 
   flip,
	size
} from '@floating-ui/vue';
import { computed, defineComponent, type PropType, provide, Ref, toRef, getCurrentInstance, Transition, ref, Teleport, watch, ComponentInternalInstance, nextTick, inject } from 'vue';
import { extractRefHTMLElement } from '@/utils/extractRefHTMLElement';
import { useClickOutside } from '@/composable';

enum NAMESPACES {
	VZ_MENU = 'vz-menu',
	VZ_MENU_LIST = 'vz-menu-list',
};

enum PLACEMENT {
	TOP = 'popup-top',
	BOTTOM = 'popup-bottom',
	LEFT = 'popup-side',
	RIGHT = 'popup-side',
};

const vMenuProps = makePropsFactory({
	autoSelect: {
		type: Boolean,
		default: true,
	},
	closeOnSelect: {
		type: Boolean,
		default: false,
	},
	closeOnBlur: {
		type: Boolean,
		default: true,
	},
	tag: {
		type: String,
		default: 'div',
	},
	model: {
		type: Array as PropType<MenuItemModel[]>,
		default: () => [],
	},
	placement: {
		type: String,
		default: 'bottom',
		validator: (value: string) => {
			return Helpers.isIncluded(Object.keys(PLACEMENT), value);
		}
	},
	offset: {
		type: Number,
		default: 0,
	},
	matchTriggerWidth: {
		type: Boolean,
		default: false
	},
	modelValue: {
		default: undefined,
	}
});

const MenuTest = defineComponent({
	name: 'MenuTest',
	props: vMenuProps,
	inheritAttrs: false,
	emits: {
		'focus': (payload: {
			originalEvent: FocusEvent,
			currentInstance: ComponentInternalInstance,
		}) => {
			return payload.originalEvent && payload.currentInstance;
		},
		'show': (payload: {
			originalEvent: Event,
			currentInstance: ComponentInternalInstance,
			value: true
		}) => {
			return payload.originalEvent && payload.currentInstance && payload.value
		},
		'hide': (payload: {
			originalEvent: Event,
			currentInstance: ComponentInternalInstance,
			value: Boolean
		}) => {
			return payload.originalEvent && payload.currentInstance && !payload.value
		}
	},
	setup(props, { slots, emit, attrs }) {
		const instance = getCurrentInstance();
		const componentID = generateComponentId(NAMESPACES.VZ_MENU);
		
		// * Refs */
		const isOpen = ref<boolean>(false);
		const root = ref<HTMLElement>(null);
		const trigger = ref<HTMLElement>(null);
		const focusItemIndex = ref<number>(-1);
		const menuList = ref<HTMLElement>(null);
		const firstChars = ref<string[] | null>(null);
		const focusableItems = ref<NodeListOf<HTMLElement>>(null);
		const selectedItemIndex = ref<number>(-1);

		const SelectContext = inject(SelectKey, null);

		// * Composable */
		useClickOutside({
			refElement: menuList,
			triggerElement: trigger,
			callback: hide
		})

		// * Computed properties */
		const transition = computed(() => {
			switch(props.placement) {
				case 'top':
					return PLACEMENT.TOP;
				case 'bottom':
					return PLACEMENT.BOTTOM;
				case 'left':
					return PLACEMENT.LEFT;
				case 'right':
					return PLACEMENT.RIGHT;
				default: 
					return PLACEMENT.BOTTOM;
			}
		})

		const hasModel = computed(() => {
			return (props.model as MenuItemModel[]).length > 0;
		})

		const componentAttrs = computed(() => {
			return {
				...attrs,
				'tabindex': -1,
				'data-popup-placement': props.placement,
				'data-vz-component': Helpers.toPascalCase(NAMESPACES.VZ_MENU, '-'),
				'id': instance.attrs.id ? instance.attrs.id : componentID
			};
		});

		// * Watchers */
		watch(focusItemIndex, (value: number) => {
			updateTabIndex(value);
		})

		// * Methods */
		function handleKeyDown(e: KeyboardEvent) {
			const { key } = e;
			const prevent = true;

			switch(key) {
				case 'Escape':
					// hide menu
					hide(e); break;
				case 'Home':
					// set focus to first item
					setFocusItemIndex(0); break;
				case 'ArrowDown':
					// set focus to next item
					setFocusItemIndex(focusItemIndex.value + 1); break;
				case 'ArrowUp':
					// set focus to previous item
					setFocusItemIndex(focusItemIndex.value - 1); break;
				case 'End': 
					// set focus to last item
					setFocusItemIndex(focusableItems.value.length - 1); break;
				case 'Enter':
				case 'Space':
					// click the focused item
					focusItemIndex.value > -1 && focusableItems.value[focusItemIndex.value].click(); 
					break;
				default:
					if(/\S/.test(key) && key.length === 1) {
                  onFirstCharKey(e);
               }
					break;
			}

			// if(prevent) e.preventDefault();
			
		}

		function setFocusItemIndex(index: number) {
			focusItemIndex.value = index < 0 ? 0
				: index >= focusableItems.value.length ? focusableItems.value.length - 1
				: index;

			if(Array
					.from(focusableItems.value)
					.indexOf(focusableItems.value.item(index)) > -1
				) {
					(focusableItems.value[index] as HTMLElement).focus();
			}
		}

		function updateTabIndex(index?: number) {
			focusableItems.value.forEach((item: HTMLElement, i: number) => {
				item.setAttribute('tabindex', index === i ? '0' : '-1');
			})
		}

		function onFirstCharKey(e: KeyboardEvent) {
			const char = e.key.toLowerCase();
			// Find the first item that starts with the char and set focus
         let foundIndex = firstChars.value.indexOf(char, focusItemIndex.value + 1);

			// If not found in search after focus item, start from the beginning
         if(foundIndex === -1) {
            foundIndex = firstChars.value.indexOf(char,0);
         }
         // If match was found, set focus
         if(foundIndex > -1) {
            setFocusItemIndex(foundIndex);
         }
         // e.preventDefault();
		}

		function toggle(e: Event) {
			trigger.value = (e.currentTarget as HTMLElement).closest("[data-vz-component]");
			if(!isOpen.value) show(e)
			else hide(e);
		}

		function show(e: Event) {
			if(isOpen.value) return;
			isOpen.value = true;

			emit('show', {
				originalEvent: e,
				currentInstance: instance,
				value: true
			})
		}

		function hide(e: Event) {
			if(!isOpen.value) return;
         isOpen.value = false;

			emit('hide', {
				originalEvent: e,
				currentInstance: instance,
				value: false
			})
		}

		function onFocused(e: FocusEvent) {
			if(props.autoSelect) {
				setFocusItemIndex(0);
			}

			if(selectedItemIndex.value > -1) {
				setFocusItemIndex(selectedItemIndex.value)
			}

			emit('focus', {
				originalEvent: e,
				currentInstance: instance,
			})
		}

		function alignMenu() {
			const menu = extractRefHTMLElement(root);
			
         autoUpdate(trigger.value, menu, () => {
            computePosition(trigger.value, menu, {
               placement: props.placement as Placement,
               middleware: [shift({ padding: 10 }), 
                  offset(() => {
                     return (
                        !props.offset 
                           ? 5 
                           : props.offset
                     );
                  }), 
                  flip(),
						size({
							apply({rects, elements}) {
								return props.matchTriggerWidth
									&& Object.assign(elements.floating.style, {
										width: `${rects.reference.width}px`,
									}
								)
							}
						})	
					]
            }).then(({x, y}) => {
               Object.assign(menu.style, {
                  top: y + 'px',
                  left: x + 'px',
                  position: 'absolute',
                  // zIndex: '1000',
               })
            });
         });
      }

		function onEnterTransition() {
			focusableItems.value = DOM.find(
				menuList.value,
				'[role="menuitem"][data-disabled="false"][data-menu-item-type="item"]'
			);
			
			if(SelectContext) {
				const { selectedOptions, multiple } = SelectContext
				selectedItemIndex.value = Array.from(focusableItems.value)
					.findIndex((item) => {
						if(multiple.value) {
							const length = selectedOptions.value.length;
							
							if(length == 0) return 

							const lastOptionIndex = length - 1
							
							return item.dataset.value === selectedOptions.value[lastOptionIndex].value;
						}
						return item.dataset.value === selectedOptions.value.value;
					}
				)
			}

			firstChars.value = Array.from(focusableItems.value)
				.map((item: HTMLElement) => {
					return item.textContent?.charAt(0).toLowerCase();
				}
			);

			updateTabIndex();
         alignMenu();

			menuList.value?.focus();
      }

		function onLeaveTransition() {
			focusItemIndex.value = -1;
		}

		function rootRef(el: HTMLElement) {
			root.value = el;
		}

		function menuListRef(el: HTMLElement) {
			menuList.value = el;
		}

		provide(MenuTestKey, {
			show,
			hide,
			autoSelect: toRef(props, 'autoSelect') as Ref<boolean>,
			closeOnBlur: toRef(props, 'closeOnBlur') as Ref<boolean>,
			closeOnSelect: toRef(props, 'closeOnSelect') as Ref<boolean>,
		});

		return {
			show,
			isOpen,
			toggle,
			rootRef,
			trigger,
			hasModel,
			instance, 
			onFocused,
			transition,
			componentID,
			menuListRef,
			handleKeyDown,
			SelectContext,
			componentAttrs,
			onEnterTransition,
			onLeaveTransition
		};
	},
	render() {
		return (
			<Teleport to="body">
				<Transition name={this.transition}
					onEnter={this.onEnterTransition}
					onLeave={this.onLeaveTransition}
				>
					{ this.isOpen && (
						<DynamicTag class={NAMESPACES.VZ_MENU}
							type={this.tag}
							ref={this.rootRef}
							{...this.componentAttrs}
						>	
							<ul class={NAMESPACES.VZ_MENU_LIST}
								role="menu"
								tabindex="0"
								ref={ this.menuListRef }
								onFocus={ this.onFocused }
								onKeydown={ this.handleKeyDown } 
								id={ 
									this.instance.attrs.id 
										? this.instance.attrs.id + "-list" 
										: this.componentID + "-list"
								}
							>
								{ this.$slots.default?.() }

								{ this.hasModel && (this.model as MenuItemModel[])?.map((item, index) => {
									return (
										<>
											<MenuItemTest 
												type={(item.items && item.items.length > 0) && 'header'}
												{...item}
												key={
													item.label ? item.label.toLowerCase() + index.toString()
														: item.content ? item.content.toLowerCase() + index.toString()
														: item.key + index.toString()
												}
											/>
											{ (item.items && item.items.length > 0) && (item.items.map((subItem, subIndex) => {
												return (
													<MenuItemTest 
														{...subItem}
														key={
															subItem.label ? subItem.label.toLowerCase() + subIndex.toString()
																: subItem.content ? subItem.content.toLowerCase() + subIndex.toString()
																: subItem.key + subIndex.toString()
														}
													/>
												)
											}))}
										</>
									)
								})}
							</ul>
						</DynamicTag>
					)}
				</Transition>
			</Teleport>
		);
	}
});

type MenuType = InstanceType<typeof MenuTest>;

export {
	MenuTest,
	MenuType,
};