// @ts-ignore
import type { Meta, StoryObj } from '@storybook/vue3';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { CheckboxGroup } from '@/components/CheckboxGroup/CheckboxGroup';
import {
   colorArgType,
   directionArgType,
   disabledArgType,
   labelArgType,
} from '../../../.storybook/argsTypes';
import { ref } from 'vue';
import { CheckboxModel } from '../Checkbox/type';

const meta = {
   title: 'Forms/CheckboxGroup',
   component: CheckboxGroup,
   argTypes: {
		label: labelArgType(),
		options: {
			control: {
				type: 'array'
			},
			description: 'The options of the checkbox group',
			table: {
				category: 'Props',
				defaultValue: { summary: '[]' },
				type: { summary: 'CheckboxModel[]' },
			}
		},
		modelValue: {
			description: 'The modelValue of the checkbox group',
			table: {
				category: 'Props',
				defaultValue: { summary: '[]' },
				type: { summary: 'string[] || number[]' },
			}
		},
		name: {
			control: {
				type: 'text'
			},
			description: 'The name of the checkbox group',
			table: {
				category: 'Props',
				defaultValue: { summary: 'null' },
				type: { summary: 'string' },
			}
		},
		disabled: disabledArgType(),
		direction: directionArgType(),
		color: colorArgType(),
		DefaultSlots: {
			name: 'default',
			description: 'The default slot used to render checkbox in group',
			table: {
				category: 'Slots',
				type: { summary: 'default' }
			}
		},
		updateModelValue: {
			name: 'update:modelValue',
			description: 'Event emitted for updating modelValue',
			table: {
				category: 'Events',
			}
		}
   },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const checkboxOptions : CheckboxModel[] = [
   { label: 'Apple', value: "Apple" },
   { label: 'Banana', value: "Banana" },
   { label: 'Cherry', value: "Cherry" },
]



export const Basic: Story = {
   render: (args) => ({
      components: { 'Checkbox': Checkbox, 'CheckboxGroup': CheckboxGroup },
      setup() {
         const checked = ref(['Apple', 'Banana', 'Cherry']);
         return { args, checked };
      },
      template: `
         <div class="mb-2">
            <span>Checked: </span> {{ checked }}
         </div>
         <CheckboxGroup v-bind="args" :options="args.options" v-model="checked" label="Fruits"/>
      `
   }),
   args: {
      options: checkboxOptions
   }
}

export const ColorVariants: Story = {
	render: (args) => ({
		components: { 'Checkbox': Checkbox, 'CheckboxGroup': CheckboxGroup },
		setup() {
			const checked = ref(['Apple', 'Banana', 'Cherry']);
			return { args, checked };
		},
		template: `
			<div class="mb-2">
				<span>Checked: </span> {{ checked }}
			</div>
			<div class="flex gap-6">
				<div>
					<CheckboxGroup v-bind="args" color="primary" :options="args.options" v-model="checked" label="Fruits (Primary)"></CheckboxGroup>
				</div>
				<div>
					<CheckboxGroup v-bind="args" color="secondary" :options="args.options" v-model="checked" label="Fruits (Secondary)"></CheckboxGroup>
				</div>
				<div>
					<CheckboxGroup v-bind="args" color="success" :options="args.options" v-model="checked" label="Fruits (Success)"></CheckboxGroup>
				</div>
				<div>
					<CheckboxGroup v-bind="args" color="warning" :options="args.options" v-model="checked" label="Fruits (Warning)"></CheckboxGroup>
				</div>
				<div>
					<CheckboxGroup v-bind="args" color="danger" :options="args.options" v-model="checked" label="Fruits (Danger)"></CheckboxGroup>
				</div>
				<div>
					<CheckboxGroup v-bind="args" color="info" :options="args.options" v-model="checked" label="Fruits (Info)"></CheckboxGroup>
				</div>
			</div>
		`
	}),
	args: {
      options: checkboxOptions
   }
}

export const DirectionVariants: Story = {
	render: (args) => ({
		components: { 'Checkbox': Checkbox, 'CheckboxGroup': CheckboxGroup },
		setup() {
			const checked = ref(['Apple', 'Banana', 'Cherry']);
			return { args, checked };
		},
		template: `
			<div class="mb-2">
            <span>Checked: </span> {{ checked }}
         </div>
				
			<div>
				<CheckboxGroup v-bind="args" class="mb-3" direction="vertical" :options="args.options" v-model="checked" label="Fruits (Vertical)"/>
				<CheckboxGroup v-bind="args" direction="horizontal" :options="args.options" v-model="checked" label="Fruits (Horizontal)"/>
			</div>
		`
	}),
	args: {
		options: checkboxOptions,
	}
}

export const Disabled: Story = {
   render: (args) => ({
      components: { 'Checkbox': Checkbox, 'CheckboxGroup': CheckboxGroup },
      setup() {
         const checked = ref(['Apple', 'Banana', 'Cherry']);
         return { args, checked };
      },
      template: `
         <div class="mb-2">
            <span>Checked: </span> {{ checked }}
         </div>
         <CheckboxGroup v-bind="args" :options="args.options" v-model="checked" label="Fruits"/>
      `
   }),
   args: {
      options: checkboxOptions,
		disabled: true
   }
}