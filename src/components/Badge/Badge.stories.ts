import type{ Meta, StoryObj } from '@storybook/vue3';
import { Badge } from './Badge';
import { Button } from '../Button/Button';
import { Icon } from '@iconify/vue';
import { colorArgType, contentArgType } from '../../../.storybook/argsTypes';

const meta = {
   title: 'Components/Badge',
   component: Badge,
   argTypes: {
      content: contentArgType(),
      color: colorArgType(),
      dot: {
         control: {
            type: 'boolean'
         },
         description: 'Whether badge is dot-style',
         table: {
            category: 'Props',
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' }
         }
      },
      rounded: {
         control: {
            type: 'boolean'
         },
         description: 'Whether badge is rounded-style',
         table: {
            category: 'Props',
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' }
         }
      },
      inline: {
         control: {
            type: 'boolean'
         },
         description: 'Whether badge is inline-style in the other component.',
         table: {
            category: 'Props',
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' }
         }
      },
      overlay: {
         control: {
            type: 'boolean'
         },
         description: 'Whether badge is overlay-style in the other component.',
         table: {
            category: 'Props',
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' }
         }
      },
      defaultSlot: {
         name: 'Default',
         description: 'Slot for default',
         table: {
            category: 'Slots',
            type: { summary: 'default' },
         }
      }
   }
} satisfies Meta<typeof Badge>

export default meta;

export const Basic: Story = {
   render: (args) => ({
      components: { Badge },
      setup() {
         return { args };
      },
      template: `<Badge v-bind="args"/>`
   }),
   args: {
      content: 'Badge'
   }
};

export const ColorVariants: Story = {
   render: (args) => ({
      components: { Badge },
      setup() {
         return { args };
      },
      template: `
         <Badge v-bind="args" color="primary"> Primary </Badge>
         <Badge v-bind="args" color="secondary" style="margin-left: 60px;"> Secondary </Badge>
         <Badge v-bind="args" color="success" style="margin-left: 137px;"> Success </Badge>
         <Badge v-bind="args" color="warning" style="margin-left: 200px;"> Warning </Badge>
         <Badge v-bind="args" color="danger" style="margin-left: 265px;"> Danger </Badge>
         <Badge v-bind="args" color="info" style="margin-left: 323px;"> Info </Badge>
         <Badge v-bind="args" color="plain" style="margin-left: 362px;"> Plain </Badge>
      `
   })
};

export const DotBadge: Story = {
   render: (args) => ({
      components: { Badge },
      setup() {
         return { args };
      },
      template: `
         <Badge v-bind="args" color="primary"/>
         <Badge v-bind="args" color="secondary" style="margin-left: 20px;"/>
         <Badge v-bind="args" color="success" style="margin-left: 40px;"/>
         <Badge v-bind="args" color="warning" style="margin-left: 60px;"/>
         <Badge v-bind="args" color="danger" style="margin-left: 80px;"/>
         <Badge v-bind="args" color="info" style="margin-left: 100px;"/>
         <Badge v-bind="args" color="plain" style="margin-left: 120px;"/>
      `
   }),
   args: {
      dot: true
   }
};

export const RoundedBadge: Story = {
   render: (args) => ({
      components: { Badge },
      setup() {
         return { args };
      },
      template: `
         <Badge v-bind="args" color="primary"/>
         <Badge v-bind="args" color="secondary" style="margin-left: 30px;"/>
         <Badge v-bind="args" color="success" style="margin-left: 60px;"/>
         <Badge v-bind="args" color="warning" style="margin-left: 90px;"/>
         <Badge v-bind="args" color="danger" style="margin-left: 120px;"/>
         <Badge v-bind="args" color="info" style="margin-left: 150px;"/>
         <Badge v-bind="args" color="plain" style="margin-left: 180px;"/>
      `
   }),
   args: {
      rounded: true,
      content: '1',
   }
};

export const InlineBadge: Story = {
   render: (args) => ({
      components: { 'Badge': Badge, 'Button': Button },
      setup() {
         return { args };
      },
      template: `<div class="flex gap-2">
         <Button :elevation="3" class="m-3" color="plain">
            BUTTON
            <Badge inline rounded color="danger" content="9" />
         </Button>

         <Button :elevation="3" class="m-3" color="plain">
            BUTTON
            <Badge inline color="danger" content="11+" />
         </Button>

         <Button :elevation="3" class="m-3" color="plain">
            BUTTON
            <Badge inline dot color="success" content="11" />
         </Button>
      </div>`
   })
};

export const OverlayBadge: Story = {
   render: (args) => ({
      components: { 'Badge': Badge, 'Button': Button, 'Icon': Icon },
      setup() {
         return { args };
      },
      template: `<div class="flex">
         <Button size="md" :elevation="3" class="m-3" color="plain">
            BUTTON
            <Badge overlay rounded color="danger" content="11" />
         </Button>

         <Button size="md" :elevation="3" class="m-3" color="plain">
            BUTTON
            <Badge overlay color="danger" content="11" />
         </Button>

         <Button size="md" :elevation="3" class="m-3" color="plain">
            BUTTON
            <Badge overlay dot color="danger" content="11" />
         </Button>
      </div>
      <div class="mt-3 flex">
         <Button color="plain" size="sm" class="m-3" variant="text">
            <template v-slot:icon>
            <Icon icon="mdi:bell-outline" class="animate-tada" width="1rem" height="1rem" />
            <Badge overlay dot color="danger" content="1" />
            </template>
         </Button>

         <Button color="plain" size="md" class="m-3" variant="text">
            <template v-slot:icon>
            <Icon icon="mdi:bell-outline" class="animate-tada" width="1.3rem" height="1.3rem" />
            <Badge overlay dot color="danger" content="1" />
            </template>
         </Button>

         <Button color="plain" size="lg" class="m-3" variant="text">
            <template v-slot:icon>
            <Icon icon="mdi:bell-outline" class="animate-tada" width="1.5rem" height="1.5rem" />
            <Badge overlay dot color="danger" content="1" />
            </template>
         </Button>
      </div>
      <div class="mt-3 flex">
         <Button color="plain" size="sm" class="m-3" variant="text">
            <template v-slot:icon>
            <Icon icon="mdi:bell-outline" class="animate-tada" width="1rem" height="1rem" />
            <Badge overlay rounded color="danger" content="1" />
            </template>
         </Button>

         <Button color="plain" size="md" class="m-3" variant="text">
            <template v-slot:icon>
            <Icon icon="mdi:bell-outline" class="animate-tada" width="1.3rem" height="1.3rem" />
            <Badge overlay rounded color="danger" content="1" />
            </template>
         </Button>

         <Button color="plain" size="lg" class="m-3" variant="text">
            <template v-slot:icon>
            <Icon icon="mdi:bell-outline" class="animate-tada" width="1.5rem" height="1.5rem" />
            <Badge overlay rounded color="danger" content="1" />
            </template>
         </Button>
      </div>`
   })
};

type Story = StoryObj<typeof meta>;