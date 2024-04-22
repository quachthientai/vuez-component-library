import type { Meta, StoryObj } from '@storybook/vue3';
import { Select } from './Select';

import {
	colorArgType,
} from '../../../.storybook/argsTypes';
import { ref } from 'vue';
import { CloseOnSelect } from '../Menu/Menu.stories';

const meta = {
	title: 'Forms/Select',
	component: Select,
	argTypes: {
		color: colorArgType(),
	}
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	render: (args) => ({
		components: { Select },
		setup() {
			const val = ref([
				{content: 'Home', label:'Home', value: 'Home'},
				{content: 'Account', label:'Account', value: 'Account'}
			]);
			// const val = ref({content: 'Home', label:'Home', value: 'Home'})
			return { args, val };
		},
		template: `
			<Select v-bind="args" multiple chips v-model="val" />
		`
	}),
	args: {
		options: [ {content: 'Home', label:'Home', value: 'Home'},
			{content: 'Account', label:'Account', value: 'Account'},
			{content: 'Setting', label:'Setting', value: 'Setting'},
		]
	}
};