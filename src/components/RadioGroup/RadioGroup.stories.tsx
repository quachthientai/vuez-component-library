import type { Meta, StoryObj } from '@storybook/vue3';
import { Radio } from '../Radio/Radio';
import { RadioGroup } from './RadioGroup';
import type { RadioModel } from '../Radio/type';
import { colorArgType, disabledArgType, labelArgType } from '../../../.storybook/argsTypes';
import { ref } from 'vue';

const meta = {
   title: 'Forms/RadioGroup',
   component: RadioGroup,
   argTypes: {
      label: labelArgType(),
      disabled: disabledArgType(),
		color: colorArgType(),
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
      direction: {
         options: ['horizontal', 'vertical'],
         control: {
            type: 'select',
         },
         description: 'The direction of the radio group',
         table: {
            category: 'Props',
            defaultValue: { summary: 'vertical' },
            type: { summary: "'vertical' | 'horizontal'" },
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
   }
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

const radioOptions : RadioModel[] = [
   { label: 'Option 1', value: 'Option 1' },
   { label: 'Option 2', value: 'Option 2' },
   { label: 'Option 3', value: 'Option 3' },
]

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