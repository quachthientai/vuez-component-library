import type { Meta, StoryObj } from '@storybook/vue3';
import { Radio } from '@/components/Radio/Radio';
import { Toggle } from '@/components/Toggle/Toggle';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { Input } from '@/components/Input/Input';
import { ref } from 'vue';

const meta = {
	title: 'Forms/test',
	component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	render: (args) => ({
		components: { 'Radio': Radio, 'Toggle': Toggle, 'Checkbox': Checkbox },
		setup() {
			const radioPicked = ref("");
			const toggleChecked = ref(false);
			const checkboxChecked = ref(true);
			return { args, radioPicked, toggleChecked, checkboxChecked };
		},
		template: `
			<div>
				<Radio label="Option 1" value="Option 1" v-model="radioPicked" v-bind="args" />
         	<Radio label="Option 2" value="Option 2" v-model="radioPicked" v-bind="args" />
			</div>

			<div>
				<Toggle v-bind="args" v-model="toggleChecked" label="test test"/>
			</div>

			<div class="mt-3">
				<Checkbox  v-bind="args" label="Checkbox 1" v-model="checkboxChecked"/>
			</div>

			
		`
	}),
};