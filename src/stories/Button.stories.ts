import type { Meta, StoryObj } from '@storybook/vue3';
import { Button } from '../components/Button/Button'
import { colorArgType, contentArgType, disabledArgType, hrefArgType, elevationArgType, sizeArgType, variantArgType, dimensionArgType, iconArgType } from '../../.storybook/argsTypes'

/**
 * TODO: fix button bug at href prop, when href is defined, button is showed as block
 * TODO: refactor composable (Dimension) to make it more reusable
 */
const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    content: contentArgType(),
    disabled: disabledArgType(),
    href: hrefArgType(),
    elevation: elevationArgType(),
    color: colorArgType(),
    size: sizeArgType(),
    variant: variantArgType(),
    ...dimensionArgType(),
    ...iconArgType(),
    icon: {
      control: {
        type: 'object',
        description: 'Define button as icon button'
      },
      table: {
        category: 'Props',
      }
    },
    block: {
      control: {
        type: 'boolean',
        description: 'Whether component is block or not',
      },
      table: {
        category: 'Props',
      },
    },
    loading: {
      control: {
        type: 'boolean',
        description: 'Whether component has loader or not',
      },
      table: {
        category: 'Props',
      },
    },
    default: {
      control: {
        type: 'text',
        desciption: 'Define component default slot',
      },
      table: {
        category: 'Slots',
      },
    }
  }
} satisfies Meta<typeof Button>

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    content: 'Button',
  }
};

export const ColorVariants: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<div class="flex gap-2">
      <Button v-bind="args" color="primary">Primary</Button>
      <Button v-bind="args" color="secondary">Secondary</Button>
      <Button v-bind="args" color="success">Success</Button>
      <Button v-bind="args" color="danger">Danger</Button>
      <Button v-bind="args" color="warning">Warning</Button>
      <Button v-bind="args" color="info">Info</Button>
      <Button v-bind="args" color="plain">Plain</Button>
    </div>`,
  })
};

export const SizeVariants: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<div class="flex gap-2">
      <Button v-bind="args" size="sm">Small</Button>
      <Button v-bind="args" size="md">Medium</Button>
      <Button v-bind="args" size="lg">Large</Button>
    </div>
    
    <div class="flex mt-2 gap-2">
      <Button v-bind="args" :icon="{icon: 'mdi-account'}"  size="sm">Small</Button>
      <Button v-bind="args" :icon="{icon: 'mdi-account'}"  size="md">Small</Button>
      <Button v-bind="args" :icon="{icon: 'mdi-account'}"  size="lg">Small</Button>
    </div>`,
  }),
}

export const BlockButton: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args" block />`,
  }),
  args: {
    ...Basic.args,
  }
}

export const TextButton: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<div class="flex gap-2">
      <Button v-bind="args" variant="text" color="primary">Primary</Button>
      <Button v-bind="args" variant="text" color="secondary">Secondary</Button>
      <Button v-bind="args" variant="text" color="success">Success</Button>
      <Button v-bind="args" variant="text" color="danger">Danger</Button>
      <Button v-bind="args" variant="text" color="warning">Warning</Button>
      <Button v-bind="args" variant="text" color="info">Info</Button>
      <Button v-bind="args" variant="text" color="plain">Plain</Button>
    </div>`,
  })
}

export const OutlinedButton: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<div class="flex gap-2">
      <Button v-bind="args" color="primary">Primary</Button>
      <Button v-bind="args" color="secondary">Secondary</Button>
      <Button v-bind="args" color="success">Success</Button>
      <Button v-bind="args" color="danger">Danger</Button>
      <Button v-bind="args" color="warning">Warning</Button>
      <Button v-bind="args" color="info">Info</Button>
      <Button v-bind="args" color="plain">Plain</Button>
    </div>`,
  }),
  args: {
    variant: 'outlined',
  }
};

export const IconButton: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<div class="flex gap-2">
      <Button v-bind="args" :icon="{icon: 'mdi-account'}"/>
      <Button v-bind="args" :icon="{icon: 'mdi-account'}" color="primary"/>
      <Button v-bind="args" :icon="{icon: 'mdi-account'}" color="secondary"/>
      <Button v-bind="args" :icon="{icon: 'mdi-account'}" color="success"/>
      <Button v-bind="args" :icon="{icon: 'mdi-account'}" color="warning"/>
      <Button v-bind="args" :icon="{icon: 'mdi-account'}" color="danger"/>
      <Button v-bind="args" :icon="{icon: 'mdi-account'}" color="info"/>
    </div>`,
  }),
  args: {
    ...Basic.args,
  }
};

export const AppendIcon: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args" :appendIcon="{icon: 'mdi-account'}"/>`,
  }),
  args: {
    ...Basic.args,
  }
};

export const PrependIcon: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args" :prependIcon="{icon: 'mdi-account'}"/>`,
  }),
  args: {
    ...Basic.args,
  }
};

export const Elevation: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<div class="flex gap-2">
      <Button v-bind="args" elevation="1">Elevation 1</Button>
      <Button v-bind="args" elevation="2">Elevation 2</Button>
      <Button v-bind="args" elevation="3">Elevation 3</Button>
      <Button v-bind="args" elevation="4">Elevation 4</Button>
      <Button v-bind="args" elevation="5">Elevation 5</Button>
    </div>
    
    <div class="flex mt-3 gap-2">
      <Button v-bind="args" :icon="{icon: 'mdi-account'}" elevation="1" />
      <Button v-bind="args" :icon="{icon: 'mdi-account'}" elevation="2" />
      <Button v-bind="args" :icon="{icon: 'mdi-account'}" elevation="3" />
      <Button v-bind="args" :icon="{icon: 'mdi-account'}" elevation="4" />
      <Button v-bind="args" :icon="{icon: 'mdi-account'}" elevation="5" />
    </div>`
  }),
  args: {

  }
};

export const DisabledState: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args" />`,
  }),
  args: {
    ...Basic.args,
    disabled: true,
  }
};

export const LoadingState: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<div class="flex gap-2">
      <Button v-bind="args" loading/>
      <Button v-bind="args" loading color="primary" />
      <Button v-bind="args" loading color="secondary" />
      <Button v-bind="args" loading color="success" />
      <Button v-bind="args" loading color="warning" />
      <Button v-bind="args" loading color="danger" />
      <Button v-bind="args" loading color="info" />
    </div>
    
    <div class="flex mt-3 gap-2">
      <Button v-bind="args" variant="outlined" loading/>
      <Button v-bind="args" loading variant="outlined" color="primary" />
      <Button v-bind="args" loading variant="outlined" color="secondary" />
      <Button v-bind="args" loading variant="outlined" color="success" />
      <Button v-bind="args" loading variant="outlined" color="warning" />
      <Button v-bind="args" loading variant="outlined" color="danger" />
      <Button v-bind="args" loading variant="outlined" color="info" />
    </div>
    
    <div class="flex mt-3 gap-2">
      <Button v-bind="args" variant="text" loading/>
      <Button v-bind="args" loading variant="text" color="primary" />
      <Button v-bind="args" loading variant="text" color="secondary" />
      <Button v-bind="args" loading variant="text" color="success" />
      <Button v-bind="args" loading variant="text" color="warning" />
      <Button v-bind="args" loading variant="text" color="danger" />
      <Button v-bind="args" loading variant="text" color="info" />
    </div>
    
    <div class="flex mt-3 gap-2">
      <Button v-bind="args" :icon="{icon: 'mdi-account'}" loading/>
      <Button v-bind="args" loading :icon="{icon: 'mdi-account'}" color="primary" />
      <Button v-bind="args" loading :icon="{icon: 'mdi-account'}" color="secondary" />
      <Button v-bind="args" loading :icon="{icon: 'mdi-account'}" color="success" />
      <Button v-bind="args" loading :icon="{icon: 'mdi-account'}" color="warning" />
      <Button v-bind="args" loading :icon="{icon: 'mdi-account'}" color="danger" />
      <Button v-bind="args" loading :icon="{icon: 'mdi-account'}" color="info" />
    </div>`
  }),
  args: {
    loading: true
  }
}










