import type { Meta, StoryObj } from '@storybook/vue3';
import { Radio } from './Radio';
import { RadioGroup } from './RadioGroup';
import {
   colorArgType,
   disabledArgType,
   labelArgType,
} from '../../../.storybook/argsTypes';
import { ref } from 'vue';

const meta = {
   title: 'Forms/RadioGroup',
   component: RadioGroup,
   argTypes: {
      // * RadioGroup Props *
      direction: {
         options: ['horizontal', 'vertical'],
         control: {
            type: 'select',
         },
         description: 'The direction of the radio group',
         table: {
            category: 'RadioGroup Props',
            defaultValue: { summary: 'vertical' },
            type: { summary: "'vertical' | 'horizontal'" },
         }
      },
      RadioGroupLabel: {
         control: {
            type: labelArgType().control.type
         },
         name: 'label (RadioGroup)',
         description: 'Define aria-labelledby for the radio group',
         table: {
            category: 'RadioGroup Props',
            defaultValue: labelArgType().table.defaultValue,
            type: labelArgType().table.type,
         }
      },
      model: {
         control: {
            type: 'object'
         },
         description: 'The radiogroup model used to render radio in group',
         table: {
            category: 'RadioGroup Props',
            defaultValue: { summary: '[]' },
            type: { summary: 'RadioModel[]' },
         }
      },
      // * Radio Props *
      label: {
         ...labelArgType(),
         table: {
            ...labelArgType().table,
            category: 'Radio Props',
         }
      },
      color: {
         ...colorArgType(),
         table: {
            ...colorArgType().table,
            category: 'Radio Props',
         }
      },
      disabled: {
         ...disabledArgType(),
         table: {
            ...disabledArgType().table,
            category: 'Radio Props',
         }
      },
      checked: {
         control: {
            type: 'boolean'
         },
         description: 'The checked state of the radio',
         table: {
            category: 'Radio Props',
            defaultqValue: { summary: 'false' },
            type: { summary: 'boolean' },
         }
      },
      name: {
         control: {
            type: 'text'
         },
         description: 'The name of the radio',
         table: {
            category: 'Radio Props',
            defaultValue: { summary: 'null' },
            type: { summary: 'string' },
         }
      },
      value: {
         control: {
            type: 'text' 
         },
         description: 'The value of the radio',
         table: {
            category: 'Radio Props',
            defaultValue: { summary: 'null' },
            type: { summary: 'string | number | boolean' },
         }
      },
   }
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

const radioOptions = [
   { label: 'One', value: 'One' },
   { label: 'Two', value: 'Two' },
   { label: 'Three', value: 'Three' },
]

export const Basic: Story = {
   render: (args) => ({
      components: { 'Radio': Radio, 'RadioGroup': RadioGroup },
      setup() {
         const picked = ref("One");
         console.log(picked);
         return { picked,args };
      },
      template: `
         
         <div>onUpdatedValue: {{ picked }}</div>
         <RadioGroup label="Radio group" v-model="picked" :options="args.options" />
      `
   }),
   args: {
      options: radioOptions
   }
};