import type { Meta, StoryObj } from '@storybook/vue3';
import { Textarea } from './Textarea';
import {
	colorArgType,
} from '../../../.storybook/argsTypes';
import { ref } from 'vue';

const meta = {
	title: 'Forms/Textarea',
	component: Textarea,
	argTypes: {
		color: colorArgType(),
	}
} satisfies Meta<typeof meta>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	render: (args) => ({
		components: { Textarea },
		setup() {
			const msg = ref('');
			return { args, msg };
		},
		template: `
			Message: {{ msg }}
			<Textarea v-model="msg" label="Enter your message" clearable v-bind="args" helperText="This is test helper text"/>
		`
	}),
	args: {
		// appendIcon: { icon: 'mdi:mail' },
		// prependIcon: { icon: 'mdi:mail' },
	}
};