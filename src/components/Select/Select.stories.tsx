import type { Meta, StoryObj } from '@storybook/vue3';
import { Select } from './Select';

import {
	colorArgType,
} from '../../../.storybook/argsTypes';

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
			return { args };
		},
		template: `
			<Select v-bind="args" />
		`
	}),
};