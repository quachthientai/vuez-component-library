// @ts-ignore
import type { Meta, StoryObj } from '@storybook/vue3';
import { Textarea } from './Textarea';
import { Button } from '../Button/Button';
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
		components: { 'Textarea': Textarea, 'Button': Button },
		setup() {
			const msg = ref('');
			const disabled = ref(false);
			return { args, msg, disabled };
		},
		template: `
			Message: {{ msg }}
			Disabled: {{ disabled }}
			<Button class="mb-3" @click="disabled = !disabled">Toggle Disabled</Button>

			<Textarea v-model="msg" placeholder="testing placeholder" :disabled="disabled" rows="2" label="Enter your message" clearable v-bind="args" helperText="This is test helper text"/>
		`
	}),
	args: {
		// appendIcon: { icon: 'mdi:mail' },
		
	}
};