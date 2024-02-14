import type { Meta, StoryObj } from '@storybook/vue3';
import { Checkbox } from '@/components/Checkbox/Checkbox'; 
import { CheckboxGroup } from './CheckboxGroup';
import {
   colorArgType,
   disabledArgType,
   labelArgType,
} from '../../../.storybook/argsTypes';
import { ref } from 'vue';
import { CheckboxModel } from '../Checkbox/CheckboxType';

const meta = {
   title: 'Forms/CheckboxGroup',
   component: CheckboxGroup,
   argTypes: {

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
         <CheckboxGroup color="warning" v-bind="args" :options="args.options" v-model="checked" label="Fruits"/>
      `
   }),
   args: {
      options: checkboxOptions
   }
}