// @ts-ignore
import type { Meta, StoryObj } from '@storybook/vue3';
import { Input } from './Input';
import { Button } from '../Button/Button';
import {
	iconArgType,
	colorArgType,
	disabledArgType,
	labelArgType,
} from '../../../.storybook/argsTypes';
import { ref } from 'vue';

const meta = {
	title: 'Forms/Input',
	component: Input,
	argTypes: {
		modelValue: {
			description: 'The modelValue of the input',
			table: {
				category: 'Props',
				defaultValue: { summary: 'null' },
				type: { summary: 'string' },
			}
		},
		value: {
			description: 'The value of the input',
			table: {
				category: 'Props',
				defaultValue: { summary: 'null' },
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
		helperText: {
			control: 'text',
			description: 'The helper text of the input',
			table: {
				category: 'Props',
				defaultValue: { summary: 'undefined' },
				type: { summary: 'string' },
			}
		},
		name: {
			control: {
				type: 'text'
			},
			description: 'The name of the input',
			table: {
				category: 'Props',
				defaultValue: { summary: 'undefined' },
				type: { summary: 'string' },
			}
		},
		type: {
			control: 'select',
			options: ['text', 'email', 'number', 'password', 'url', 'tel'],
			description: 'The type of the input',
			table: {
				category: 'Props',
				defaultValue: { summary: 'text' },
				type: { summary: 'text | password | email | number | tel | url' },
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
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
			}
		},
		...iconArgType(),
		label: labelArgType(),
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
			<div class="mb-3">
				Message: {{ msg }}
			</div>
			<Input v-model="msg" v-bind="args" placeholder="Type something.."/>
		`
	}),
}

export const InputType: Story = {
	render: (args) => ({
		components: { Input },
		setup() {
			const msg = ref('');
			return { args, msg };
		},
		template: `
			<div class="mb-3">
		`
	})
}

export const Test: Story = {
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

			<Input class="mt-3" :disabled="disabled" clearable v-bind="args"  data-test="asd" v-model="msg" type="email" min="3"
				helperText="We’ll never share your details. Read our Privacy Policy."
				label="Email"
				
			/>

			<Input class="mt-3" :disabled="disabled" label="Text" v-bind="args" data-test="asd" v-model="msg" type="text" min="3"
				helperText="We’ll never share your details. Read our Privacy Policy."
				placeholder="Please enter password"
			/>

			<Input class="mt-3" :disabled="disabled" :typeIcon="false"   data-test="asd" v-model="msg" type="text" 
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