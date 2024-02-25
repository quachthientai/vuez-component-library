import type { Meta, StoryObj } from '@storybook/vue3';
import { Checkbox } from './Checkbox';

import { ref } from 'vue';

const meta = {
   title: 'Forms/Checkbox',
   component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
   render: (args) => ({
      components: { Checkbox },
      setup() {
         const checked = ref(true);
         return { args, checked }; 
      },
      template: `
         <div class="mb-2">
            <span>Checked: </span> {{ checked }}
         </div>
			
         <Checkbox  v-bind="args" label="Checkbox 1" v-model="checked"/>
         <Checkbox  v-bind="args" label="Checkbox 2" v-model="checked" color="secondary"/>
         <Checkbox  v-bind="args" label="Checkbox 3" v-model="checked" color="success"/>
         <Checkbox  v-bind="args" label="Checkbox 4" v-model="checked" color="warning"/>
         <Checkbox  v-bind="args" label="Checkbox 5" v-model="checked" color="danger"/>
         <Checkbox  v-bind="args" label="Checkbox 6" v-model="checked" color="info"/>
      `
   })
}

