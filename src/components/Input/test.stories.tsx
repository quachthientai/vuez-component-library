import type { Meta, StoryObj } from '@storybook/vue3';
import { Radio } from '@/components/Radio/Radio';
import { Toggle } from '@/components/Toggle/Toggle';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { Input } from '@/components/Input/Input';
import { Button } from '@/components/Button/Button';
import { ref } from 'vue';

const meta = {
	title: 'Forms/test',
	component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	render: (args) => ({
		components: { 'Radio': Radio, 'Toggle': Toggle, 'Checkbox': Checkbox, 'Input': Input, 'Button': Button },
		setup() {
			const radioPicked = ref("");
			const toggleChecked = ref(false);
			const checkboxChecked = ref(true);
			const msg = ref('');
			return { args, radioPicked, toggleChecked, checkboxChecked, msg };
		},
		template: `
			<div class="max-w-md">
				<Input class="mb-3" clearable v-model="msg" v-bind="args" data-test="asd" type="email"
					helperText="We’ll never share your details. Read our Privacy Policy."
					placeholder="name@gmail.com" label="Email"
				/>

				<Input class="mb-2" v-model="msg" v-bind="args" type="password"
					label="Password"
					placeholder="Please enter password"
				/>
				<Checkbox label="Remember me?"/>
				<Button class="mt-3" color="primary" content="Sign in"/>
			</div>
			

			
		`
	}),
};