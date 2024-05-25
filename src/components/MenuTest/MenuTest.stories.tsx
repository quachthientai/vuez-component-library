import type { Meta, StoryObj } from '@storybook/vue3';
import { Button } from '@/components/Button/Button';
import { MenuTest } from './MenuTest';
import { MenuItemTest } from '@/components/MenuItemTest/MenuItemTest';
import { Badge } from '@/components/Badge/Badge';
import {
	colorArgType,
	placementArgType,
} from '../../../.storybook/argsTypes';
import { h, ref } from 'vue';

const meta = {
	title: 'Components/MenuTest',
	component: MenuTest,
	argTypes: {
		color: colorArgType(),
		autoSelect: {
         control: { type: 'boolean' },
         description: 'Automatically select the first menu item when the menu opens',
         table: {
            category: "Props",
            defaultValue: { summary: 'true' },
            type: { summary: 'boolean' }
         }
      },
		closeOnSelect: {
         control: { type: 'boolean' },
         description: 'Close the menu when a menu item is selected or click',
         table: {
            category: "Props",
            defaultValue: { summary: 'true' },
            type: { summary: 'boolean' }
         }
      },
		tag: {
			control: { type: 'text' },
			description: 'The HTML root to use for the menu container',
			table: {
            category: "Props",
            defaultValue: { summary: 'div' },
            type: { summary: 'string' }
         }
		},
		model: {
         control: { type: 'object' },
         description: 'The menu model used to render item in menu list',
         table: {
            category: "Props",
            defaultValue: { summary: '[]' },
            type: { summary: 'MenuItemModel[]' }
         }
      },
		placement: {
         ...placementArgType(),
         description: 'The placement of the menu list. **Note:** the menu list will be automatically flipped when it reaches the viewport bounds. **See more at https://floating-ui.com/docs/flip**',
         table: {
            category: "Props",
            defaultValue: placementArgType().table.defaultValue,
            type: placementArgType().table.type,
         }
      },
		offset: {
         control: { type: 'number' },
         description: 'The offset between menu list and menu button',
         table: {
            category: "Props",
            defaultValue: { summary: '0' },
            type: { summary: 'number' }
         }
      },
	}
} satisfies Meta<typeof MenuTest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	render: (args) => ({
		components: { 'MenuTest': MenuTest, 'MenuItemTest': MenuItemTest, 'Button': Button },
		setup() {
			const open = ref(false);
			const menu = ref();

			function toggle(e) {
				menu.value.toggle(e.originalEvent);
			}
			return { args, open, menu, toggle };
		},
		template: `
			<Button content="Menu"  @click="toggle" aria-haspopup="true" aria-controls="test" aria-expaned="true"/>
			<MenuTest v-bind="args" ref="menu" />
		`
	}),
	args: {
		model: [ {content: 'Home', icon: 'mdi:home'}, 
         {content: 'Account', icon: 'mdi:account'},
         {content: 'Setting', icon: 'mdi:cog'}, 
      ],
		autoSelect: false,
		closeOnSelect: false
	}
};

export const Group: Story = {
	render: (args) => ({
		components: { 'MenuTest': MenuTest, 'MenuItemTest': MenuItemTest, 'Button': Button, 'Badge': Badge },
		setup() {
			const open = ref(false);
			const menu = ref();

			function toggle(e) {
				menu.value.toggle(e.originalEvent);
			}
			return { args, open, menu, toggle };
		},
		template: `
			<Button content="Menu"  @click="toggle" aria-haspopup="true" aria-controls="test" aria-expaned="true"/>
			<MenuTest v-bind="args" ref="menu" />
		`
	}),
	args: {
		model: [ 
			{	content: 'Documents', 
				icon: 'mdi:plus',
				items: [
					{ content: 'New', icon: 'mdi:plus' }, 
					{ content: 'Search', icon: 'mdi:magnify' }
				]
			}, 
         {	content: 'Profile', 
				items: [
					{ content: 'Settings', icon: 'mdi:settings', badge: () => {
							return <Badge inline rounded color="danger" content="1"/>
						} 
					}, 
					{ content: 'Logout', icon: 'mdi:logout' }
				]
			},
      ],
		autoSelect: false,
		closeOnSelect: false
	}
};

export const AutoSelect: Story = {
   render: (args) => ({
		components: { 'MenuTest': MenuTest, 'MenuItemTest': MenuItemTest, 'Button': Button },
		setup() {
			const open = ref(false);
			const menu = ref();

			function toggle(e) {
				menu.value.toggle(e.originalEvent);
			}
			return { args, open, menu, toggle };
		},
		template: `
			<Button content="Menu"  @click="toggle" aria-haspopup="true" aria-controls="test" aria-expaned="true"/>
			<MenuTest v-bind="args" ref="menu" />
		`
	}),
   args: {
      ...Basic.args,
		autoSelect: true,
   },
};

export const CloseOnSelect: Story = {
	render: (args) => ({
		components: { 'MenuTest': MenuTest, 'MenuItemTest': MenuItemTest, 'Button': Button },
		setup() {
			const open = ref(false);
			const menu = ref();

			function toggle(e) {
				menu.value.toggle(e.originalEvent);
			}
			return { args, open, menu, toggle };
		},
		template: `
			<Button content="Menu"  @click="toggle" aria-haspopup="true" aria-controls="test" aria-expaned="true"/>
			<MenuTest v-bind="args" ref="menu" />
		`
	}),
   args: {
      ...Basic.args,
		closeOnSelect: true,
   },
};

export const Placement: Story = {
	render: (args) => ({
		components: { 'MenuTest': MenuTest, 'MenuItemTest': MenuItemTest, 'Button': Button },
		setup() {
			const top = ref();
			const bottom = ref();
			const left = ref();
			const right = ref();

			function toggle(e) {
				top.value.toggle(e.originalEvent);
				bottom.value.toggle(e.originalEvent);
				left.value.toggle(e.originalEvent);
				right.value.toggle(e.originalEvent);
			}
			return { args, top, bottom, left, right, toggle };
		},
		template: `
		<div class="flex gap-2 m-[150px]">
			<div>
				<Button content="Top"  @click="toggle" aria-haspopup="true" aria-controls="test" aria-expaned="true"/>	
				<MenuTest placement="top" v-bind="args" ref="top" />
			</div>
			

			<div>
				<Button content="Bottom"  @click="toggle" aria-haspopup="true" aria-controls="test" aria-expaned="true"/>	
				<MenuTest placement="bottom" v-bind="args" ref="bottom" />
			</div>

			<div>
				<Button content="Left"  @click="toggle" aria-haspopup="true" aria-controls="test" aria-expaned="true"/>	
				<MenuTest placement="left" v-bind="args" ref="left" />
			</div>

			<div>
				<Button content="Right"  @click="toggle" aria-haspopup="true" aria-controls="test" aria-expaned="true"/>	
				<MenuTest placement="right" v-bind="args" ref="right" />
			</div>
		</div>
			
		`
	}),
   args: {
      ...Basic.args,
		autoSelect: true,
   },
}

export const Test: Story = {
	render: (args) => ({
		components: { 'MenuTest': MenuTest, 'MenuItemTest': MenuItemTest, 'Button': Button },
		setup() {
			const open = ref(false);
			const menu = ref();

			function toggle(e) {
				menu.value.toggle(e.originalEvent);
			}

			function itemAction(e) {
				console.log(e);
			}
			return { args, open, menu, toggle,itemAction };
		},
		template: `
			<Button content="Menu"  @click="toggle" aria-haspopup="true" aria-controls="test" aria-expaned="true"/>
			<MenuTest ref="menu">
				<MenuItemTest 
					v-for="item in args.model"
					:content="item.content"
					@onItemAction="itemAction"
				/>
			</MenuTest>
		`
	}),
	args: {
		model: [ {content: 'Home', icon: 'mdi:home'}, 
         {content: 'Account', icon: 'mdi:account'},
         {content: 'Setting', icon: 'mdi:cog'}, 
      ],
		autoSelect: false,
		closeOnSelect: false
	}
};