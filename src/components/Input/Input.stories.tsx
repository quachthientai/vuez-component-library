import type { Meta, StoryObj } from '@storybook/vue3';
import { Input } from './Input';
import { Button } from '../Button/Button';
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
		components: { 'Input': Input, 'Button': Button },
		setup() {
			const msg = ref('testing message');
		
			const disabled = ref(false);
			return { args, msg, disabled };
		},
		template: `
			Message: {{ msg }}
			Disabled: {{ disabled }}
			<Button @click="disabled = !disabled"  class="mt-3" color="primary" content="Toggle disabled"/>

			<Input class="mt-3" :disabled="disabled"  clearable v-bind="args"  data-test="asd" v-model="msg" type="email" min="3"
				helperText="We’ll never share your details. Read our Privacy Policy."
				label="Email"
				placeholder="Please enter your email"
			/>

			<Input class="mt-3" :disabled="disabled" label="Text" v-bind="args"  data-test="asd" v-model="msg" type="text" min="3"
				helperText="We’ll never share your details. Read our Privacy Policy."
				
				placeholder="Please enter password"
			/>

			
		`
	}),
	args: {
		typeIcon: true,
		prependIcon: {
			icon: 'mdi-lock'
		}
	}
};