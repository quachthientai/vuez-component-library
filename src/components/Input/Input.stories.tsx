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
		loading: {
			control: 'boolean',
			description: 'Whether the input is loading',
			table: {
				category: 'Props',
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
			}
		},
		suffix: {
			control: {
				type: 'text'
			},
			description: 'The suffix of the input',
			table: {
				category: 'Props',
				defaultValue: { summary: 'undefined' },
				type: { summary: 'string' },
			}
		},
		prefix: {
			control: {
				type: 'text'
			},
			description: 'The suffix of the input',
			table: {
				category: 'Props',
				defaultValue: { summary: 'undefined' },
				type: { summary: 'string' },
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

export const ColorVariants: Story = {
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
				
			<div>
				<Input v-model="msg" class="mb-3" label="Primary" v-bind="args" placeholder="Type something.."/>
				<Input v-model="msg" class="mb-3" color="Secondary" label="Secondary" v-bind="args" placeholder="Type something.."/>
				<Input v-model="msg" class="mb-3" color="Info" label="Info" v-bind="args" placeholder="Type something.."/>
				<Input v-model="msg" class="mb-3" color="Success" label="Success" v-bind="args" placeholder="Type something.."/>
				<Input v-model="msg" class="mb-3" color="Warning" label="Warning" v-bind="args" placeholder="Type something.."/>
				<Input v-model="msg" class="mb-3" color="Danger" label="Danger" v-bind="args" placeholder="Type something.."/>
			</div>
		`
	})
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
				Message: {{ msg }}
			</div>
				
			<div>
				<Input v-model="msg" class="mb-3" label="Text" v-bind="args" placeholder="Type something.."/>
				<Input v-model="msg" class="mb-3" type="password" label="Password" v-bind="args" placeholder="Type something.."/>
				<Input v-model="msg" class="mb-3" type="email" label="Email" v-bind="args" placeholder="Type something.."/>
				<Input v-model="msg" class="mb-3" type="url" label="URL" v-bind="args" placeholder="Type something.."/>
				<Input v-model="msg" class="mb-3" type="tel" label="Telephone" v-bind="args" placeholder="Type something.."/>
				<Input v-model="msg" class="mb-3" type="number" label="Numeric" v-bind="args" placeholder="Type something.."/>
			</div>
		`
	}),
	args: {
		typeIcon: true,
	}
}

export const HelperText: Story = {
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
			<Input v-model="msg" class="mb-3" label="Primary" v-bind="args" placeholder="Type something.."/>
		`
	}),
	args: {
		helperText: 'We’ll never share your details. Read our Privacy Policy.'
	}
}

export const PrependAndAppendIcon: Story = {
	render: (args) => ({
		components: { Input },
		setup() {
			const msg = ref('Hey!');
			return { args, msg };
		},
		template: `
			<div class="mb-3">
				Message: {{ msg }}
			</div>
			<Input v-model="msg" class="mb-3" v-bind="args"  label="Message" placeholder="Type something.."/>
		`
	}),
	args: {
		helperText: 'We’ll never share your details. Read our Privacy Policy.',
		prependIcon: {
			icon: 'mdi-smiley'
		}, 
		appendIcon: {
			icon: 'mdi-send-variant'
		}
	}
}

export const Disabled: Story = {
	render: (args) => ({
		components: { Input },
		setup() {
			const msg = ref('Hey!');
			return { args, msg };
		},
		template: `
			<div class="mb-3">
				Message: {{ msg }}
			</div>
			<Input v-model="msg" class="mb-3" v-bind="args"  label="Message" placeholder="Type something.."/>
		`
	}),
	args: {
		disabled: true
	}
}

export const Loading: Story = {
	render: (args) => ({
		components: { Input },
		setup() {
			const msg = ref('Hey!');
			return { args, msg };
		},
		template: `
			<div class="mb-3">
				Message: {{ msg }}
			</div>
			<Input v-model="msg" class="mb-3" v-bind="args"  label="Message" placeholder="Type something.."/>
		`
	}),
	args: {
		loading: true
	}
}

export const Clearable: Story = {
	render: (args) => ({
		components: { Input },
		setup() {
			const msg = ref('Hey!');
			return { args, msg };
		},
		template: `
			<div class="mb-3">
				Message: {{ msg }}
			</div>
			<Input v-model="msg" class="mb-3" v-bind="args"  label="Message" placeholder="Type something.."/>
		`
	}),
	args: {
		clearable: true
	}
}

export const ShowPasswordToggle: Story = {
	render: (args) => ({
		components: { Input },
		setup() {
			const msg = ref('Hey!');
			return { args, msg };
		},
		template: `
			<div class="mb-3">
				Message: {{ msg }}
			</div>
			<Input v-model="msg" class="mb-3" v-bind="args"  label="Message" placeholder="Type something.."/>
		`
	}),
	args: {
		showPasswordToggle: true,
		clearable: true,
		type: 'password'
	}
}

export const PrefixAndSuffix: Story = {
	render: (args) => ({
		components: { Input },
		setup() {
			const amount = ref('10.00');
			const email = ref('quachthientai');

			return { args, amount, email };
		},
		template: `
			<Input v-model="amount" class="mb-3" v-bind="args" prefix="$" label="Prefix for currency" placeholder="Type something.."/>

			<Input v-model="email" class="mb-3" v-bind="args" suffix="@gmail.com" label="Suffix for email" placeholder="Type something.." type="email"/>
		`
	}),
}

export const Test: Story = {
	render: (args) => ({
		components: { 'Input': Input, 'Button': Button },
		setup() {
			const msg = ref('');

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

export const Counter: Story = {
	render: (args) => ({
		components: { Input },
		setup() {
			const msg = ref('');
			return { args, msg };
		},
		template: `
			<Input v-model="msg" v-bind="args" counter helperText="hey" />
		`
	}),
}

export const Mask: Story = {
	render: (args) => ({
		components: { Input },
		setup() {
			const msg = ref('');
			return { args, msg };
		},
		template: `
			<div class="mb-3"> Message: {{ msg }}</div>

			<Input v-model="msg" v-bind="args" mask="(###) ###-####"/>
		`
	})
}