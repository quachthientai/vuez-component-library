// @ts-ignore
import type { Meta, StoryObj } from '@storybook/vue3';
import { Textarea } from './Textarea';
import { Button } from '../Button/Button';
import {
	colorArgType, disabledArgType, labelArgType, iconArgType
} from '../../../.storybook/argsTypes';
import { ref } from 'vue';

const meta = {
	title: 'Forms/Textarea',
	component: Textarea,
	argTypes: {
		modelValue: {
			description: 'The modelValue of the textarea',
			table: {
				category: 'Props',
				defaultValue: { summary: 'null' },
				type: { summary: 'string' },
			}
		},
		value: {
			description: 'The value of the textarea',
			table: {
				category: 'Props',
				defaultValue: { summary: 'null' },
				type: { summary: 'string' },
			}
		},
		clearable: {
			control: 'boolean',
			description: 'Whether the textarea is clearable',
			table: {
				category: 'Props',
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
			}
		},
		helperText: {
			control: 'text',
			description: 'The helper text of the textarea',
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
			description: 'The name of the textarea',
			table: {
				category: 'Props',
				defaultValue: { summary: 'undefined' },
				type: { summary: 'string' },
			}
		},
		autoResize: {
			control: 'boolean',
			description: 'Whether the textarea is auto resizeable',
			table: {
				category: 'Props',
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
			}
		},
		counter: {
			control: 'boolean',
			description: 'Whether the textarea has a counter',
			table: {
				category: 'Props',
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
			}
		},
		PrependIconSlot: {
			name: 'prepend',
			description: 'The prepend icon slot',
			table: {
				category: 'Slots',
				type: { summary: 'prepend' }
			}
		},
		AppendIconSlot: {
			name: 'append',
			description: 'The append icon slot',
			table: {
				category: 'Slots',
				type: { summary: 'append' }
			}
		},
		LabelSlot: {
			name: 'label',
			description: 'The label slot',
			table: {
				category: 'Slots',
				type: { summary: 'label' }
			}
		},
		HelperTextSlot: {
			name: 'helper-text',
			description: 'The helper text slot',
			table: {
				category: 'Slots',
				type: { summary: 'helper-text' }
			}
		},
		updateModelValue: {
			name: 'update:modelValue',
			description: 'Event emitted for updating modelValue',
			table: {
				category: 'Events',
			}
		},
		clearModelValue: {
			name: 'clear:modelValue',
			description: 'Event emitted for clearing modelValue',
			table: {
				category: 'Events',
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
		components: { 'Textarea': Textarea, 'Button': Button },
		setup() {
			const msg = ref('');
			const disabled = ref(false);
			return { args, msg, disabled };
		},
		template: `
			Message: {{ msg }}
			
			<Textarea v-model="msg" 
				class="my-3"
				placeholder="Type something..." 
				label="Enter your message"
				v-bind="args"
			/>
		`
	})
};

export const ColorVariants: Story = {
	render: (args) => ({
		components: { Textarea },
		setup() {
			const msg = ref('');
			return { args, msg };
		},
		template: `
			<div class="mb-3">
				Message: {{ msg }}
			</div>

			<div>
				<Textarea v-model="msg" class="mb-3" label="Primary" v-bind="args" placeholder="Type something..."/>
				<Textarea v-model="msg" class="mb-3" label="Secondary" color="secondary" v-bind="args" placeholder="Type something..."/>
				<Textarea v-model="msg" class="mb-3" label="Info" color="info" v-bind="args" placeholder="Type something..."/>
				<Textarea v-model="msg" class="mb-3" label="Success" color="success" v-bind="args" placeholder="Type something..."/>
				<Textarea v-model="msg" class="mb-3" label="Danger" color="danger" v-bind="args" placeholder="Type something..."/>
				<Textarea v-model="msg" class="mb-3" label="Warning" color="warning" v-bind="args" placeholder="Type something..."/>
			</div>
		`
	})
};

export const AutoResize: Story = {
	render: (args) => ({
		components: { Textarea },
		setup() {
			const msg = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
			return { args, msg };
		},
		template: `
			<div>
				<Textarea v-model="msg" class="mb-3" label="Bio" v-bind="args" autoResize placeholder="Type something..."/>
			</div>
		`
	})
};

export const HelperText: Story = {
	render: (args) => ({
		components: { Textarea },
		setup() {
			const msg = ref('');
			return { args, msg };
		},
		template: `
			<div class="mb-3">
				Message: {{ msg }}
			</div>

			<Textarea 
				v-model="msg" 
				class="mb-3" 
				label="Bio" 
				v-bind="args" 
				placeholder="Type something..."
			/>
		`
	}),
	args: {
		helperText: 'This is a helper text'
	}
};

export const PrependAndAppendIcons: Story = {
	render: (args) => ({
		components: { Textarea },
		setup() {
			const msg = ref('Hey!');
			return { args, msg };
		},
		template: `
			<div class="mb-3">
				Message: {{ msg }}
			</div>
			<Textarea clearable v-model="msg" class="mb-3" v-bind="args"  label="Message" placeholder="Type something.."/>
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
};

export const Disabled: Story = {
	render: (args) => ({
		components: { Textarea },
		setup() {
			const msg = ref('Hey!');
			return { args, msg };
		},
		template: `
			<div class="mb-3">
				Message: {{ msg }}
			</div>
			<Textarea v-model="msg" class="mb-3" v-bind="args"  label="Message" placeholder="Type something.."/>
		`
	}),
	args: {
		disabled: true
	}
};

export const Clearable: Story = {
	render: (args) => ({
		components: { Textarea },
		setup() {
			const msg = ref('Hey!');
			return { args, msg };
		},
		template: `
			<div class="mb-3">
				Message: {{ msg }}
			</div>
			<Textarea v-model="msg" class="mb-3" v-bind="args"  label="Message" placeholder="Type something.."/>
		`
	}),
	args: {
		clearable: true
	}
};

export const Counter: Story = {
	render: (args) => ({
		components: { Textarea },
		setup() {
			const msg = ref(null);
			return { args, msg };
		},
		template: `
			<div class="my-3">
				<p class="text-lg font-semibold">Without max length attribute</p>
				<Textarea v-model="msg" v-bind="args" counter clearable/>
			</div>
			
			<div class="my-3">
				<p class="text-lg font-semibold">With max length attribute</p>
				<Textarea v-model="msg" v-bind="args" maxLength="15" counter clearable />
			</div>
			
		`
	}),
};
