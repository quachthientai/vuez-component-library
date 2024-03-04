import type { Meta, StoryObj } from '@storybook/vue3';
import { Checkbox } from './Checkbox';

import { ref } from 'vue';
import { colorArgType, disabledArgType, labelArgType } from '../../../.storybook/argsTypes';

const meta = {
   title: 'Forms/Checkbox',
   component: Checkbox,
	argTypes: {
		label: labelArgType(),
		color: colorArgType(),
		disabled: disabledArgType(),
		indeterminate: {
			control: {
				type: 'boolean'
			},
			description: 'The indeterminate state of the checkbox',
			table: {
				category: 'Props',
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
			}
		},
		name: {
			control: {
				type: 'text'
			},
			description: 'The name of the checkbox',
			table: {
				category: 'Props',
				defaultValue: { summary: 'null' },
				type: { summary: 'string' },
			}
		},
		modelValue: {
			description: 'The modelValue of the checkbox',
			table: {
				category: 'Props',
				defaultValue: { summary: 'null' },
				type: { summary: 'string | number | boolean' },
			}
		},
		value: {
			description: 'The value of the checkbox',
			table: {
				category: 'Props',
				defaultValue: { summary: 'null' },
				type: { summary: 'string | number | boolean' },
			}
		},
		DefaultSlots: {
			name: 'default',
			description: 'The default slot for label of the checkbox',
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
	}
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = { 
	render: (args) => ({
		components: { Checkbox },
		setup() {
			const checked = ref(true);
			return { args, checked };
		},
		template: `
			<div class="mb-2">
				<span>Checked: </span> {{ checked }}
			</div>
			<Checkbox v-bind="args" v-model="checked"/>
		`
	}),
	args: {
		label: 'Checkbox',
	}
}

export const ColorVariants: Story = {
   render: (args) => ({
      components: { Checkbox },
      setup() {
         const checked = ref(true);
         return { args, checked }; 
      },
      template: `
         <div class="mb-2">
            <span>Checked: </span> {{ checked }}
         </div>

			<div class="flex flex-col">
				<Checkbox v-bind="args" label="Checkbox 1" v-model="checked"/>
				<Checkbox v-bind="args" label="Checkbox 2" v-model="checked" color="secondary"/>
				<Checkbox v-bind="args" label="Checkbox 3" v-model="checked" color="success"/>
				<Checkbox v-bind="args" label="Checkbox 4" v-model="checked" color="warning"/>
				<Checkbox v-bind="args" label="Checkbox 5" v-model="checked" color="danger"/>
				<Checkbox v-bind="args" label="Checkbox 6" v-model="checked" color="info"/>
			</div>
      `
   })
}

export const Disabled: Story = {
	render: (args) => ({
		components: { Checkbox },
		setup() {
			const checked = ref(true);
			return { args, checked };
		},
		template: `
			<div class="mb-2">
            <span>Checked: </span> {{ checked }}
         </div>
			<Checkbox  v-bind="args" label="Checkbox 1" v-model="checked"/>
		`
	}),
	args: {
		disabled: true
	}
}

export const Indeterminate: Story = { 
	render: (args) => ({
		components: { Checkbox },
		setup() {
			const checked = ref(true);
			return { args, checked };
		},
		template: `
			<div class="mb-2">
				<span>Checked: </span> {{ checked }}
			</div>
			<Checkbox v-bind="args" v-model="checked"/>
		`
	}),
	args: {
		label: 'Checkbox',
		indeterminate: true
	}
}

