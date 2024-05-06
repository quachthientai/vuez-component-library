import type { Meta, StoryObj } from '@storybook/vue3';
import { Select } from './Select';
import { SelectOptionModel } from '../Select/types';

import {
	colorArgType,
	disabledArgType,
	labelArgType,
} from '../../../.storybook/argsTypes';
import { ref } from 'vue';
import { CloseOnSelect } from '../Menu/Menu.stories';

const meta = {
	title: 'Forms/Select',
	component: Select,
	argTypes: {
		modelValue: {
			description: 'The modelValue of the Select',
			table: {
				category: 'Props',
				defaultValue: { summary: 'null' },
				type: { summary: 'SelectOptionModel' },
			}
		},
		clearable: {
			control: 'boolean',
			description: "Whether the select is clearable",
			table: {
				category: 'Props',
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' }
			}
		},
		name: {
			control: {
				type: 'text'
			},
			description: 'The name of the select',
			table: {
				category: 'Props',
				defaultValue: { summary: 'undefined' },
				type: { summary: 'string' },
			}
		},
		options: {
         control: { type: 'object' },
         description: 'The select model used to render item in select list',
         table: {
            category: "Props",
            defaultValue: { summary: '[]' },
            type: { summary: 'SelectOptionModel[]' }
         }
      },
		chips: {
			control: 'boolean',
			description: 'Use Chip component to show the selection, work only with multiple props',
			table: {
            category: "Props",
            defaultValue: { summary: 'false' },
            type: { summary: 'boolean' }
         }
		},
		closableChips: {
			control: 'boolean',
			description: 'Enable closable props for chip',
			table: {
            category: "Props",
            defaultValue: { summary: 'false' },
            type: { summary: 'boolean' }
         }
		},
		multiple: {
			control: 'boolean',
			description: 'Change select to multiple. Accept array for value',
			table: {
            category: "Props",
            defaultValue: { summary: 'false' },
            type: { summary: 'boolean' }
         }
		},
		checkMark: {
			control: 'boolean',
			description: 'Whether the selected option will be mark with check',
			table: {
            category: "Props",
            defaultValue: { summary: 'false' },
            type: { summary: 'boolean' }
         }
		},
		readonly: {
			control: 'boolean',
			description: 'Whether the select is readonly',
			table: {
            category: "Props",
            defaultValue: { summary: 'false' },
            type: { summary: 'boolean' }
         }
		},
		disabled: disabledArgType(),
		color: colorArgType(),
		label: labelArgType(),
	}
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const SelectOptions : SelectOptionModel[] = [
	{label:'Home', value: 'Home'},
	{label:'Account', value: 'Account'},
	{label:'Setting', value: 'Setting'},
	{label:'United States', value: 'United States'},
	{label:'United Kingdom', value: 'United Kingdom'},
	{label:'John asd', value: 'John asd'},
	{label:'zxczxcvsdgsdf', value: 'zxczxcvsdgsdf'},
	{label:'qe123123123123', value: 'qe123123123123'},
	{label:'7sdgvxcvxcvxc', value: '7sdgvxcvxcvxc'},
	{label:'1266585686758', value: '1266585686758'}
]

export const Basic: Story = {
	render: (args) => ({
		components: { Select },
		setup() {
			const val = ref({label:'Home', value: 'Home'})
			return { args, val };
		},
		template: `
			<Select v-bind="args" v-model="val" />
		`
	}),
	args: {
		options: SelectOptions
	}
};

export const Label: Story = {
	render: (args) => ({
		components: { Select },
		setup() {
			const val = ref({label:'Home', value: 'Home'})
			return { args, val };
		},
		template: `
			<Select v-bind="args" v-model="val" />
		`
	}),
	args: {
		options: SelectOptions,
		label: 'Options'
	}
};

export const Multiple: Story = {
	render: (args) => ({
		components: { Select },
		setup() {
			const selected = ref([
				{label:'Home', value: 'Home'},
				{label:'Account', value: 'Account'},
				{label:'Setting', value: 'Setting'},
			]);

			return { args, selected }
		},
		template: `
			<Select v-bind="args" v-model="selected" />
		`
	}),
	args: {
		options: SelectOptions,
		multiple: true
	}
}

export const Chips: Story = {
	render: (args) => ({
		components: { Select },
		setup() {
			const selected = ref([
				{label:'Home', value: 'Home'},
				{label:'Account', value: 'Account'},
				{label:'Setting', value: 'Setting'},
			]);

			return { args, selected }
		},
		template: `
			<Select v-bind="args" v-model="selected" />
		`
	}),
	args: {
		options: SelectOptions,
		multiple: true,
		chips: true,
		label: 'Chips select'
	}
}

export const ClosableChips: Story = {
	render: (args) => ({
		components: { Select },
		setup() {
			const selected = ref([
				{label:'Home', value: 'Home'},
				{label:'Account', value: 'Account'},
				{label:'Setting', value: 'Setting'},
			]);

			return { args, selected }
		},
		template: `
			<Select v-bind="args" v-model="selected" />
		`
	}),
	args: {
		options: SelectOptions,
		multiple: true,
		chips: true,
		closableChips: true,
		label: 'Chips select'
	}
}

export const Clearable: Story = {
	render: (args) => ({
		components: { Select },
		setup() {
			const val = ref({label:'Account', value: 'Account'})
			return { args, val };
		},
		template: `
			<Select v-bind="args" v-model="val" />
		`
	}),
	args: {
		options: SelectOptions,
		clearable: true,
		label: 'Label'
	}
};

export const Checkmark: Story = {
	render: (args) => ({
		components: { Select },
		setup() {
			const selected = ref({label:'Home', value: 'Home'});

			return { args, selected }
		},
		template: `
			<Select v-bind="args" label="Checkmark" v-model="selected" /> 
		`
	}),
	args: {
		options: SelectOptions,
		checkMark: true
	}
}

export const Disabled: Story = {
	render: (args) => ({
		components: { Select },
		setup() {
			const val = ref({label:'Home', value: 'Home'})
			return { args, val };
		},
		template: `
			<Select v-bind="args" v-model="val" />
		`
	}),
	args: {
		options: SelectOptions,
		disabled: true
	}
};

export const MaxSelectedValue: Story = {
	render: (args) => ({
		components: { Select },
		setup() {
			const selected = ref([
				{label:'Home', value: 'Home'},
				{label:'Account', value: 'Account'},
				{label:'Setting', value: 'Setting'},
			]);

			return { args, selected }
		},
		template: `
			<div class="grid gap-y-5">
				<Select v-bind="args" label="test" v-model="selected" />
				<Select v-bind="args" label="test" chips v-model="selected" />
			</div>
			

			
		`
	}),
	args: {
		options: SelectOptions,
		multiple: true,
		maxSelectedValue: 3
		// label: 'test'
	}
};

export const Counter: Story = {
	render: (args) => ({
		components: { Select },
		setup() {
			const selected = ref([
				{label:'Home', value: 'Home'},
				{label:'Account', value: 'Account'},
				{label:'Setting', value: 'Setting'},
			]);

			return { args, selected }
		},
		template: `
			<div class="grid gap-y-5">
				<Select v-bind="args" label="test" v-model="selected" />
			</div>
		`
	}),
	args: {
		options: SelectOptions,
		multiple: true,
		maxSelectedValue: 3,
		counter: true,

		// label: 'test'
	}
}

export const SelectAllToggle: Story = {
	render: (args) => ({
		components: { Select },
		setup() {
			const selected = ref([
				{label:'Home', value: 'Home'},
				{label:'Account', value: 'Account'},
				{label:'Setting', value: 'Setting'},
			]);

			return { args, selected }
		},
		template: `
			<div class="grid gap-y-5">
				<Select v-bind="args" label="test" v-model="selected" />
			</div>
		`
	}),
	args: {
		options: SelectOptions,
		multiple: true,
		maxSelectedValue: 3,
		counter: true,
		selectAllToggle: true
		// label: 'test'
	}
}

