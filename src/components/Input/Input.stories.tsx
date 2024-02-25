import type { Meta, StoryObj } from '@storybook/vue3';
import { Input } from './Input';
import {
	colorArgType,
	disabledArgType,
} from '../../../.storybook/argsTypes';
import { ref } from 'vue';

const meta = {
	title: 'Forms/Input',
	component: Input,
	argTypes: {
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
			<Input class="mt-3" v-bind="args" v-model="msg" 
				
				label="Password"
				:prependIcon="{icon: 'mdi:email'}"
				type="password"
				helperText="We’ll never share your details. Read our Privacy Policy."
				placeholder="Please enter password"
			/>
		`
	}),
};