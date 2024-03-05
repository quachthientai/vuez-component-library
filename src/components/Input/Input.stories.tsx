import type { Meta, StoryObj } from '@storybook/vue3';
import { Input } from './Input';
import {
	iconArgType,
	colorArgType,
	disabledArgType,
} from '../../../.storybook/argsTypes';
import { ref } from 'vue';

const meta = {
	title: 'Forms/Input',
	component: Input,
	argTypes: {
		type: {
			control: 'select',
			options: ['text', 'email', 'number', 'password', 'url', 'tel'],
			description: 'The type of the input',
			table: {
				category: 'Props',
				defaultValue: { summary: 'text' },
				type: { summary: 'string' },
			}
		},
		clearable: {
			control: 'boolean',
			description: 'Whether the input is clearable',
			table: {
				category: 'Props',
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
			}
		},
		showPasswordToggle: {
			control: 'boolean',
			description: 'Whether the input has password toggle',
			table: {
				category: 'Props',
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
			}
		},
		typeIcon: {
			control: 'boolean',
			description: 'Whether the input has type icon',
			table: {
				category: 'Props',
				defaultValue: { summary: 'true' },
				type: { summary: 'boolean' },
			}
		},
		...iconArgType(),
		color: colorArgType(),
		disabled: disabledArgType(),
	}
} satisfies Meta<typeof meta>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	render: (args) => ({
		components: { Input },
		setup() {
			const msg = ref('');
			
			return { args, msg };
		},
		template: `
			Message: {{ msg }}
			<Input class="mt-3"  v-bind="args" v-model="msg" 
				helperText="We’ll never share your details. Read our Privacy Policy."
				
			/>

			<Input class="mt-3"  v-bind="args" v-model="msg" type="email"
				
				placeholder="Please enter password"
			/>

			<Input class="mt-3"  v-bind="args" v-model="msg" type="number" min=1
				helperText="We’ll never share your details. Read our Privacy Policy."
				placeholder="Please enter password"
			/>

			<Input class="mt-3"  v-bind="args" v-model="msg" showPasswordToggle type="password"
				helperText="We’ll never share your details. Read our Privacy Policy."
				placeholder="Please enter password"
			/>
		`
	}),
};