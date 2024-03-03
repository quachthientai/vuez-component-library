import type { Meta, StoryObj } from '@storybook/vue3';
import { Chip } from './Chip';
import { Button } from '../Button/Button';
import {
	colorArgType,
} from '../../../.storybook/argsTypes';
import { ref } from 'vue';

const meta = {
	title: 'Components/Chip',
	component: Chip,
	argTypes: {
		color: colorArgType(),
	}
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	render: (args) => ({
		components: { 'Button': Button, 'Chip': Chip },
		setup() {
			const disabled = ref(true);
			function toggle(e) {
				disabled.value = !disabled.value;
			}
			return { args, disabled, toggle };
		},
		template: `
			<div class="flex gap-3">
				{{ disabled }}
				<Button @click="disabled = !disabled">test</Button>

				<Chip icon="mdi:check-circle"  color="primary" @click="(e) => console.log(e)" size="sm" closable content="Biking"/>
				<Chip icon="mdi:check-circle" color="primary" closable content="Biking"/>
				<Chip icon="mdi:check-circle" size="lg" closable content="Biking"/>
			</div>
			
		`
	}),
};