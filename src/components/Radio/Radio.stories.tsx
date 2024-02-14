import type { Meta, StoryObj } from '@storybook/vue3';
import { Radio } from './Radio';
import {
   colorArgType,
   disabledArgType,
   labelArgType,
} from '../../../.storybook/argsTypes';
import { ref } from 'vue';

const meta = {
   title: 'Forms/Radio',
   component: Radio,
   argTypes: {
      label: labelArgType(),
      color: colorArgType(),
      disabled: disabledArgType(),
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
      modelValue: {
         description: 'The modelValue of the radio',
         table: {
            category: 'Props',
            defaultValue: { summary: 'null' },
            type: { summary: 'string | number | boolean' },
         }
      },
      value: {
         description: 'The value of the radio',
         table: {
            category: 'Props',
            defaultValue: { summary: 'null' },
            type: { summary: 'string | number | boolean' },
         }
      },
   }
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
   render: (args) => ({
      components: { Radio },
      setup() {
         const picked = ref("Option 1");
         return { picked, args };
      },
      template: `
         <div class="mb-2">
            <span>Picked: </span> {{ picked }}
         </div>
         <Radio label="Option 1" value="Option 1" v-model="picked" v-bind="args" />
         <Radio label="Option 2" value="Option 2" v-model="picked" v-bind="args" />
      `
   }),
};

export const ColorVariants: Story = {
   render: (args) => ({
      components: { Radio },
      setup() {
         const picked = ref("");
         return { picked, args };
      },
      template: `
         <div class="mb-2">
            <span>Picked: </span> {{ picked }}
         </div>

         <div class="flex flex-col">
            <Radio label="Primary" value="Primary" color="primary" v-model="picked" v-bind="args" />
            <Radio label="Secondary" value="Secondary" color="secondary" v-model="picked" v-bind="args" />
            <Radio label="Success" value="Success" color="success" v-model="picked" v-bind="args" />
            <Radio label="Warning" value="Warning" color="warning" v-model="picked" v-bind="args" />
            <Radio label="Danger" value="Danger" color="danger" v-model="picked" v-bind="args" />
            <Radio label="Info" value="Info" color="info" v-model="picked" v-bind="args" />
         </div>
      `
   }),
};

export const Disabled: Story = {
   render: (args) => ({
      components: { Radio },
      setup() {
         const picked = ref("");
         return { picked, args };
      },
      template: `
         <div class="mb-2">
            <span>Picked: </span> {{ picked }}
         </div>
         <Radio label="Option 1" value="One" v-model="picked" v-bind="args" />
         <Radio label="Option 2" value="Two" v-model="picked" v-bind="args" />
         <Radio label="Option 3" value="Three" v-model="picked" v-bind="args" />

         
      `
   }),
   args: {
      disabled: true
   }
};
