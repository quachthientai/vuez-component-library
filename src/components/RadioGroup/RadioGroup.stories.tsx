import type { Meta, StoryObj } from '@storybook/vue3';
import { Radio } from '../Radio/Radio';
import { RadioGroup } from './RadioGroup';
import type { RadioModel } from '../Radio/type';
import { colorArgType, directionArgType, disabledArgType, labelArgType } from '../../../.storybook/argsTypes';
import { ref } from 'vue';

const meta = {
   title: 'Forms/RadioGroup',
   component: RadioGroup,
   argTypes: {
      label: labelArgType(),
      disabled: disabledArgType(),
		color: colorArgType(),
		direction: directionArgType(),
      options: {
         control: {
            type: 'object'
         },
         description: 'The radiogroup model used to render radio in group',
         table: {
            category: 'Props',
            defaultValue: { summary: '[]' },
            type: { summary: 'RadioModel[]' },
         }
      },
      modelValue: {
         description: 'The modelValue of the radio group',
         table: {
            category: 'Props',
            defaultValue: { summary: 'null' },
            type: { summary: 'string | number | boolean' },
         }
      },
      name: {
         control: {
            type: 'text'
         },
         description: 'The name of the radio',
         table: {
            category: 'Props',
            defaultValue: { summary: 'null' },
            type: { summary: 'string' },
         }
      },
		DefaultSlots: {
			name: 'default',
			description: 'The default slot used to render radio in group',
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
   }
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

const radioOptions : RadioModel[] = [
   { label: 'Option 1', value: 'Option 1' },
   { label: 'Option 2', value: 'Option 2' },
   { label: 'Option 3', value: 'Option 3' },
]

// export const Test: Story = {
// 	render: (args) => ({
// 		components: { 'Radio': Radio, 'RadioGroup': RadioGroup },
// 		setup() {
// 			const picked = ref("Option 1");
// 			return { picked, args };
// 		},
// 		template: `
// 			<div class="mb-2">
// 				<span>Picked: </span> {{ picked }}
// 			</div>
// 			<RadioGroup v-model="picked">
// 				<Radio v-for="option in args.options" :label="option.label" :value="option.value"/>
// 			</RadioGroup>
// 		`
// 	}),
// 	args: {
// 		options: radioOptions,
// 		label: 'Radio Group'
// 	}
// }

export const Basic: Story = {
   render: (args) => ({
      components: { 'Radio': Radio, 'RadioGroup': RadioGroup },
      setup() {
         const picked = ref("");
         return { picked, args };
      },
      template: `
         <div class="mb-2">
            <span>Picked: </span> {{ picked }}
         </div>
         <RadioGroup v-bind="args" :label="args.label" v-model="picked" :options="args.options"/>
      `
   }),
   args: {
      options: radioOptions,
      label: 'Radio Group'
   }
};

export const ColorVariants: Story = {
   render: (args) => ({
      components: { 'Radio': Radio, 'RadioGroup': RadioGroup },
      setup() {
         const picked = ref("Option 1");
         return { picked, args };
      },
      template: `
			<div class="mb-2">
            <span>Picked: </span> {{ picked }}
         </div>
         <div class="flex gap-6">
            <div>
               <RadioGroup v-bind="args" color="primary" v-model="picked" label="Primary" :options="args.options"/>
            </div>
            <div>
               <RadioGroup v-bind="args" color="secondary" v-model="picked" label="Secondary"  :options="args.options"/>
            </div>
            <div>
               <RadioGroup v-bind="args" color="success" v-model="picked" label="Success" :options="args.options"/>
            </div>
            <div>
               <RadioGroup v-bind="args" color="warning" v-model="picked" label="Warning"  :options="args.options"/>
            </div>
            <div>
               <RadioGroup v-bind="args" color="danger" v-model="picked" label="Danger" :options="args.options"/>
            </div>
            <div>
               <RadioGroup v-bind="args" color="info" v-model="picked" label="Info"  :options="args.options"/>
            </div>
         </div>
      `
   }),
   args: {
      options: radioOptions,
   }
};

export const DirectionVariants: Story = {
	render: (args) => ({
		components: { 'Radio': Radio, 'RadioGroup': RadioGroup },
		setup() {
			const picked = ref("Option 1");
			return { picked, args };
		},
		template: `
			<div class="mb-2">
            <span>Picked: </span> {{ picked }}
         </div>
				
			<div>
				<RadioGroup v-bind="args" class="mb-3" direction="vertical" :options="args.options" v-model="picked" label="Vertical"/>
				<RadioGroup v-bind="args" class="mb-3" direction="horizontal" :options="args.options" v-model="picked" label="Horizontal"/>
			</div>
		`
	}),
	args: {
		options: radioOptions
	}
}

export const Disabled: Story = {
	render: (args) => ({
		components: { 'Radio': Radio, 'RadioGroup': RadioGroup },
		setup() {
			const picked = ref("Option 1");
			return { picked, args };
		},
		template: `
			<div class="mb-2">
            <span>Picked: </span> {{ picked }}
         </div>
         <RadioGroup v-bind="args" :label="args.label" v-model="picked" :options="args.options"/>
		`
	}),
   args: {
      options: radioOptions,
		label: 'Radio Group',
		disabled: true
   }
}