import { ref } from 'vue';
import { Toggle } from './Toggle';
import type { Meta, StoryObj } from '@storybook/vue3';
import { colorArgType, disabledArgType, labelArgType } from '../../../.storybook/argsTypes';

const meta = {
	title: 'Forms/Toggle',
	component: Toggle,
	argTypes: {
		label: labelArgType(),
		color: colorArgType(),
		disabled: disabledArgType(),
		name: {
			control: {
				type: 'text'
			},
			description: 'The name of the toggle',
			table: {
				category: 'Props',
				defaultValue: { summary: 'null' },
				type: { summary: 'string' },
			}
		},
		modelValue: {
			description: 'The modelValue of the toggle',
			table: {
				category: 'Props',
				defaultValue: { summary: 'null' },
				type: { summary: 'boolean' },
			}
		},
		value: {
			description: 'The value of the toggle',
			table: {
				category: 'Props',
				defaultValue: { summary: 'null' },
				type: { summary: 'boolean' },
			}
		},
		DefaultSlots: {
			name: 'default',
			description: 'The default slot for label of the toggle',
			table: {
				category: 'Slots',
				type: { summary: 'default' }
			}
		},
		updateModelValue: {
			name: 'update:modelValue',
			description: 'Event emitted for updating modelValue',
			table: {
				category: 'Events',
			}
		}
	},
} satisfies Meta<typeof Toggle>

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
   render: (args) => ({
      components: { Toggle},
      setup() {
         const checked = ref(true);
         return { checked, args };
      },
      template: `
         <div class="mb-2">
            <span>Checked: </span> {{ checked }}
         </div>
         <Toggle v-bind="args" v-model="checked"/>
      `
   }),
   args: {
      disabled: false,
		label: 'Toggle'
   }
}

export const ColorVariants: Story = {
   render: (args) => ({
      components: { Toggle },
      setup() {
         const checked = ref(true);
         return { checked, args };
      },
      template: `
         <div class="mb-2">
            <span>Checked: </span> {{ checked }}
         </div>
			<div class="grid gap-2">
				<Toggle v-bind="args" color="primary" v-model="checked"/>
				<Toggle v-bind="args" color="secondary" v-model="checked"/>
				<Toggle v-bind="args" color="success" v-model="checked"/>
				<Toggle v-bind="args" color="warning" v-model="checked"/>
				<Toggle v-bind="args" color="danger" v-model="checked"/>
				<Toggle v-bind="args" color="info" v-model="checked"/>
			</div>
         
      `
   }),
   args: {
      disabled: false,
		label: 'Toggle'
   }
}

export const Disabled: Story = {
	render: (args) => ({
      components: { Toggle},
      setup() {
         const checked = ref(true);
         return { checked, args };
      },
      template: `
         <div class="mb-2">
            <span>Checked: </span> {{ checked }}
         </div>
         <Toggle v-bind="args" v-model="checked"/>
      `
   }),
	args: {
		label: 'Toggle',
		disabled: true
	}
};
