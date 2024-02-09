import type { Meta, StoryObj } from '@storybook/vue3';
import { Toggle } from './Toggle';
import { ref } from 'vue';

const meta = {
  title: 'Forms/Toggle',
  component: Toggle,
  args: {
    content: ''
  },
} satisfies Meta<typeof Toggle>

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
   render: (args) => ({
      components: { Toggle },
      setup() {
         const isChecked = ref(false);
         return { isChecked, args };
      },
      template: `
         <div class="mb-2">
            <span>Checked: </span> {{ isChecked }}
         </div>
         <Toggle v-bind="args" v-model="isChecked"/>
      `
   }),
   args: {
      disabled: true,
   }
}
