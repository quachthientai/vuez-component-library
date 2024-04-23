import type { Meta, StoryObj } from '@storybook/vue3';
import { vueRouter } from 'storybook-vue3-router';
import { Button } from '@/components/Button/Button';
import { Menu } from '@/components/Menu/Menu';
import { MenuButton } from '@/components/Menu/MenuButton';
import { MenuList } from '@/components/Menu/MenuList';
import { MenuItem } from '@/components/Menu/MenuItem/MenuItem';
import { Badge } from '../Badge/Badge';
import { Icon } from '@iconify/vue';

import { placementArgType, dimensionArgType, labelArgType, hrefArgType, routeArgType, contentArgType } from '../../../.storybook/argsTypes';
import { ref } from 'vue';

const meta = {
   title: 'Components/Menu',
   component: Menu,
   parameters: {
      controls: { exclude: [
         'Default (MenuDefaultSlots)',
         'Default (MenuListDefaultSlots)',
         'Default (MenuItemDefaultSlots)',
         'Icon (MenuItemIconSlots)',
         'Badge (MenuItemBadgeSlots)',
         'MenuButton'
      ]}
   },
   argTypes: {
      // * Menu's Props */
      closeOnBlur: {
         control: { type: 'boolean' },
         description: 'Close the menu when the user clicks outside or blur',
         table: {
            category: "Menu's Props",
            defaultValue: { summary: 'true' },
            type: { summary: 'boolean' }
         }
      },
      autoSelect: {
         control: { type: 'boolean' },
         description: 'Automatically select the first menu item when the menu opens',
         table: {
            category: "Menu's Props",
            defaultValue: { summary: 'true' },
            type: { summary: 'boolean' }
         }
      },
      closeOnSelect: {
         control: { type: 'boolean' },
         description: 'Close the menu when a menu item is selected or click',
         table: {
            category: "Menu's Props",
            defaultValue: { summary: 'true' },
            type: { summary: 'boolean' }
         }
      },
      MenuTag: {
         name: 'tag (MenuTag)',
         control: { type: 'text' },
         description: 'The HTML root to use for the menu container',
         table: {
            category: "Menu's Props",
            defaultValue: { summary: 'div' },
            type: { summary: 'string' }
         }
      },
      MenuDefaultSlots: {
         name: 'Default (MenuDefaultSlots)',
         description: 'Slot for default use to render menu button and menu list',
         table: {
            category: 'Menu\'s Slots',
         type: { summary: 'default' }
         }
      },
      // * Menu Button's Props */
      MenuButton: {
         description: 'Menu Button inherited props from Button component, please see Button Docs for more details',
         table: {
            category: "Menu Button's Props",
         }
      },
      // * Menu List's Props */
      model: {
         control: { type: 'object' },
         description: 'The menu model used to render item in menu list',
         table: {
            category: "Menu List's Props",
            defaultValue: { summary: '[]' },
            type: { summary: 'MenuItemModel[]' }
         }
      },
      placement: {
         ...placementArgType(),
         description: 'The placement of the menu list. **Note:** the menu list will be automatically flipped when it reaches the viewport bounds. **See more at https://floating-ui.com/docs/flip**',
         table: {
            category: "Menu List's Props",
            defaultValue: placementArgType().table.defaultValue,
            type: placementArgType().table.type,
         }
      },
      offset: {
         control: { type: 'number' },
         description: 'The offset between menu list and menu button',
         table: {
            category: "Menu List's Props",
            defaultValue: { summary: '0' },
            type: { summary: 'number' }
         }
      },
      MenuListDefaultSlots: {
         name: 'Default (MenuListDefaultSlots)',
         description: 'Slot for default use to render menu item',
         table: {
            category: "Menu List's Slots",
            type: { summary: 'default' }
         }
      },
      // * Menu Item's Props */
      label: {
         ...labelArgType(),
         description: 'The aria-label for the menu item',
         table: {
            category: "Menu Item's Props",
            defaultValue: labelArgType().table.defaultValue,
            type: labelArgType().table.type,
         }
      },
      to: {
         ...routeArgType(),
         description: 'The route for the menu item',
         table: {
            category: "Menu Item's Props",
            defaultValue: routeArgType().table.defaultValue,
            type: routeArgType().table.type,
         }
      },
      content: {
         ...contentArgType(),
         description: 'The content for the menu item',
         table: {
            category: "Menu Item's Props",
            defaultValue: contentArgType().table.defaultValue,
            type: contentArgType().table.type,
         }
      },
      id: {
         control: { type: 'text'},
         description: 'The id for the menu item',
         table: {
            category: "Menu Item's Props",
            defaultValue: { summary: 'undefined' },
            type: { summary: 'string' }
         }
      },
      href: {
         ...hrefArgType(),
         description: 'The href for the menu item',
         table: {
            category: "Menu Item's Props",
            defaultValue: hrefArgType().table.defaultValue,
            type: hrefArgType().table.type,
         }
      },
      divider: {
         control: { type: 'boolean' },
         description: 'Whether the menu item is a divider or not',
         table: {
            category: "Menu Item's Props",
            defaultValue: { summary: 'false' },
            type: { summary: 'boolean' }
         }
      },
      icon: {
         control: {
            type: 'text',
         },
         description: 'The icon for the menu item (prepend)',
         table: {
            category: "Menu Item's Props",
            defaultValue: { summary: 'undefined' },
            type: { summary: 'string' }
         }
      },
      items: {
         control: {
            type: 'object'
         },
         description: 'An array for the items if define item as group',
         table: {
            category: "Menu Item's Props",
            defaultValue: { summary: 'undefined' },
            type: { summary: 'MenuItemModel[]' }
         }
      },
      badge: {
         control: {
            type: 'object',
         },
         description: 'The badge for the menu item (append)',
         table: {
            category: "Menu Item's Props",
            defaultValue: { summary: 'undefined' },
            type: { summary: 'BadgePropType | () => VNode<RendererNode, RendererElement>' }
         }
      },
      MenuItemTag: {
         name: 'tag (MenuItemTag)',
         control: { type: 'text' },
         description: 'The HTML root to use for the menu item container ',
         table: {
            category: "Menu Item's Props",
            defaultValue: { summary: 'li' },
            type: { summary: 'string' }
         }
      },
      action: {
         description: 'The action for the menu item',
         table: {
            category: "Menu Item's Props",
            defaultValue: { summary: '() => {}' },
            type: { summary: '(e: Event) => void' }
         }
      },
      key: {
         control: { type: 'text' },
         description: 'The key for the menu item',
         table: {
            category: "Menu Item's Props",
            defaultValue: { summary: 'undefined' },
            type: { summary: 'string' }
         }
      },
      MenuItemDefaultSlots: {
         name: 'Default (MenuItemDefaultSlots)',
         description: 'Slot for default use to render menu item content',
         table: {
            category: 'Menu Item\'s Slots',
            type: { summary: 'default' }
         }
      },
      MenuItemIconSlots: {
         name: 'Icon (MenuItemIconSlots)',
         description: 'Slot for default use to render menu item icon',
         table: {
            category: 'Menu Item\'s Slots',
            type: { summary: 'icon' }
         }
      },
      MenuItemBadgeSlots: {
         name: 'Badge (MenuItemBadgeSlots)',
         description: 'Slot for default use to render menu item badge',
         table: {
            category: 'Menu Item\'s Slots',
            type: { summary: 'badge' }
         }
      },
   }
} satisfies Meta<typeof Menu>

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
   render: (args) => ({
      components: {'Menu': Menu, 
         'MenuButton': MenuButton,
         'MenuList': MenuList,
         'MenuItem': MenuItem,
         'Icon': Icon,
         'Badge': Badge
      },
      setup() {
         return { args };
      },
      template: `<Menu v-bind="args">
         <MenuButton :appendIcon="{icon: 'mdi:chevron-down'}">
            Dropdown
         </MenuButton>
         <MenuList :model="args.model" />
      </Menu>`,
   }),
   args: {
      model: [ {content: 'Home', icon: 'mdi:home'}, 
         {content: 'Account', icon: 'mdi:account'},
         {content: 'Setting', icon: 'mdi:cog'}, 
      ],
      autoSelect: false,
      closeOnSelect: false,
      closeOnBlur: false,
   },
};

export const AutoSelect: Story = {
   render: (args) => ({
      components: {'Menu': Menu, 
         'MenuButton': MenuButton,
         'MenuList': MenuList,
         'MenuItem': MenuItem,},
      setup() {
         return { args };
      },
      template: `
      <Menu autoSelect>
         <MenuButton :appendIcon="{icon: 'mdi:chevron-down'}">
            AutoSelectMenu
         </MenuButton>
         <MenuList :model="args.model"/>
      </Menu>`,
   }),
   args: {
      ...Basic.args,
   },
};

export const CloseOnSelect: Story = {
   render: (args) => ({
      components: {'Menu': Menu, 
         'MenuButton': MenuButton,
         'MenuList': MenuList,
         'MenuItem': MenuItem,},
      setup() {
         return { args };
      },
      template: `
      <Menu :closeOnSelect="true">
         <MenuButton :appendIcon="{icon: 'mdi:chevron-down'}">
            CloseOnSelectMenu
         </MenuButton>
         <MenuList :model="args.model"/>
      </Menu>`,
   }),
   args: {
      ...Basic.args,
   },
};

export const CloseOnBlur: Story = {
   render: (args) => ({
      components: {'Menu': Menu, 
         'MenuButton': MenuButton,
         'MenuList': MenuList,
         'MenuItem': MenuItem,},
      setup() {
         return { args };
      },
      template: `
      <Menu closeOnBlur>
         <MenuButton :appendIcon="{icon: 'mdi:chevron-down'}">
            CloseOnBlurMenu
         </MenuButton>
         <MenuList :model="args.model"/>
      </Menu>`,
   }),
   args: {
      ...Basic.args,
   },
};

export const Placement: Story = {
   render: (args) => ({
      components: {'Menu': Menu, 
         'MenuButton': MenuButton,
         'MenuList': MenuList,
         'MenuItem': MenuItem,},
      setup() {
         return { args };
      },
      template: `<div class="flex gap-2 m-[150px]">
         <Menu>
            <MenuButton :appendIcon="{icon: 'mdi:chevron-down'}">
               Top
            </MenuButton>
            <MenuList placement="top" :model="args.model"/>
         </Menu>
         <Menu>
            <MenuButton :appendIcon="{icon: 'mdi:chevron-down'}">
               Bottom
            </MenuButton>
            <MenuList :model="args.model"/>
         </Menu>
         <Menu>
            <MenuButton :appendIcon="{icon: 'mdi:chevron-down'}">
               Left
            </MenuButton>
            <MenuList placement="left" :model="args.model"/>
         </Menu>
         <Menu>
            <MenuButton :appendIcon="{icon: 'mdi:chevron-down'}">
               Right
            </MenuButton>
            <MenuList placement="right" :model="args.model"/>
         </Menu>
         
         
      </div>
      `,
   }),
   args: {
      ...Basic.args,
   },
};

export const Test: Story = {
	render: (args) => ({
		components: { 'Menu': Menu, 'MenuList': MenuList, 'MenuItem': MenuItem, 'Button': Button },
		setup() {
			const menu = ref();
			

			function onMenuToggle(e) {
				menu.value.show();
			}

			return { args, menu, onMenuToggle };
		},
		template: `
			<Button @click="onMenuToggle">
				dropdown
			</Button>

			<Menu ref="menu">
            <MenuList placement="top" :model="args.model"/>
         </Menu>
			
		`,
	}),
	args: {
		...Basic.args
	}
}

