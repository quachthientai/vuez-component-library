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
		binary:{
			control: {
				type: 'boolean'
			},
			description: 'Allow to select a boolean value instead of multiple value',
			table: {
				category: 'Props',
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' }
			}
		},
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

			const selected = ref(['Orange'])
			return { args, checked, selected };
		},
		template: `
			<div class="mb-2 flex flex-col gap-2">
				<span>Selected: {{ selected }}</span> 
				<span>Checked: {{ checked }}</span> 
			</div>
			<Checkbox v-bind="args" value="Orange"  v-model="selected"/>
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
			const selectedCategories = ref([]);
         return { args, checked, selectedCategories }; 
      },
      template: `
         <div class="mb-2">
            <span>Selected: </span> {{ selectedCategories }}
         </div>

			<div class="flex flex-col">
				<Checkbox v-for="item of args.categories" 
					:label="item.label" 
					:color="item.color"
					:value="item.value"
					v-model="selectedCategories"
				/>
				
			</div>
      `
   }),
	args: {
		categories: [
			{ label: 'Primary', value: 'primary', color: 'primary' },
			{ label: 'Secondary', value: 'secondary', color: 'secondary' },
			{ label: 'Success', value: 'success', color: 'success' },
			{ label: 'Warning', value: 'warning', color: 'warning' },
			{ label: 'Danger', value: 'danger', color: 'danger' },
			{ label: 'Info', value: 'info', color: 'info' },
		]
	}
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

