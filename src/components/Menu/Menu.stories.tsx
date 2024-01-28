import type { Meta, StoryObj } from '@storybook/vue3';
import { vueRouter } from 'storybook-vue3-router';

import { Menu } from '@/components/Menu/Menu';
import { MenuButton } from '@/components/Menu/MenuButton';
import { MenuList } from '@/components/Menu/MenuList';
import { MenuItem } from '@/components/Menu/MenuItem/MenuItem';

import { MenuItemModel } from '@/components/Menu/MenuItem/MenuItemType';

import { placementArgType, dimensionArgType, labelArgType, hrefArgType, routeArgType, contentArgType } from '../../../.storybook/argsTypes';

const meta = {
   title: 'Components/Menu',
   component: Menu,
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
         description: 'The placement of the menu list',
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
            type: 'object',
         },
         description: 'The icon for the menu item (prepend)',
         table: {
            category: "Menu Item's Props",
            defaultValue: { summary: 'undefined' },
            type: { summary: 'MenuItemModelIcon' }
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
      type: {
         control: { type: 'text' },
         description: 'The type of the menu item',
         table: {
            category: "Menu Item's Props",
            defaultValue: { summary: 'item' },
            type: { summary: "'item' | 'header'" }
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
      }
   },
} satisfies Meta<typeof Menu>

export default meta;

type Story = StoryObj<typeof meta>;

const Items: MenuItemModel[] = [
   {
      content: 'VUEZUI',
      type: 'header',
      divider:true
   },
   { 
      content: 'Documents',
      type: 'header', 
   },
   { 
      content: 'New',
      icon: {
         icon: 'mdi:plus',
      }
   },
   { content: 'Search',
      icon: {
         icon: 'mdi:magnify',
      },
      divider: true,
   },
   { content: 'Search',
      icon: {
         icon: 'mdi:magnify',
      },
      divider: true,
   },
   { content: 'Settings',
      type: 'header', 
   }
]

export const Basic: Story = {
   render: (args) => ({
      components: {'Menu': Menu, 
         'MenuButton': MenuButton,
         'MenuList': MenuList,
         'MenuItem': MenuItem,},
      setup() {
         return { args };
      },
      template: `<Menu v-bind="args">
         <MenuButton :appendIcon="{icon: 'mdi:chevron-down'}">
            Dropdown
         </MenuButton>
         <MenuList :model="args.items"/>
      </Menu>`,
   }),
   args: {
      items: Items,
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
      <Menu v-bind="args">
         <MenuButton :appendIcon="{icon: 'mdi:chevron-down'}">
            Dropdown
         </MenuButton>
         <MenuList :model="args.items"/>
      </Menu>`,
   }),
   args: {
      ...Basic.args,
      autoSelect: true,
   },
};
