const propsTable = {
   category: 'Props',
};

export const colorArgType = (
   options = ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'plain']
) => ({
   options,
   control: {
      type: 'select',
      labels: {
         primary: 'Primary',
         secondary: 'Secondary',
         info: 'Info',
         success: 'Success',
         warning: 'Warning',
         danger: 'Danger',
         plain: 'Plain'
      }
   },
   description: 'Define component colors',
   table: {
      ...propsTable,
      defaultValue: { summary: 'plain' },
      type: { summary: "'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'plain'" }
   } 
});

export const placementArgType = (
   options = ['top', 'right', 'bottom', 'left']
) => ({
   options,
   control: {
      type: 'select',
      labels: {
         top: 'Top',
         right: 'Right',
         bottom: 'Bottom',
         left: 'Left',
      }
   },
   description: 'Define component placement',
   table: {
      ...propsTable,
      defaultValue: { summary: 'bottom' },
      type: { summary: "'top' | 'right' | 'bottom' | 'left'" }
   }
})

export const contentArgType = () => ({
   control: {
      type: 'text',
   },
   description: 'Define component content',
   table: {
      ...propsTable,
      defaultValue: { summary: 'undefined' },
      type: { summary: 'string' }
   } 
});

export const disabledArgType = () => ({
   control: {
      type: 'boolean',
   },
   description: 'Whether component is disabled or not',
   table: {
      ...propsTable,
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' }
   } 
});

export const hrefArgType = () => ({
   control: {
      type: 'text',
   },
    description: 'Define external link for button',
   table: {
      ...propsTable,
      defaultValue: { summary: 'undefined' },
      type: { summary: 'string' }
   } 
});

export const elevationArgType = () => ({
   control: {
      type: 'range',
      min: 0,
      max: 5,
      step: 1
   },
   description: 'Define component elevation value',
   table: {
      ...propsTable,
      defaultValue: { summary: '0' },
      type: { summary: 'number' }
   }
});

export const sizeArgType = () => ({
   options: ['sm', 'md', 'lg'],
   control: {
      type: 'select',
      labels: {
         sm: 'sm',
         md: 'md',
         lg: 'lg',
      }
   },
   description: 'Define component size',
   table: {
      ...propsTable,
      defaultValue: { summary: 'md' },
      type: { summary: "'sm' | 'md' | 'lg'" }
   } 
});

export const variantArgType = () => ({
   options: ['solid', 'outlined', 'text'],
   control: {
      type: 'select',
      labels: {
         solid: 'solid',
         outlined: 'outlined',
         text: 'text',
      }
   },
   description: 'Define component variant',
   table: {
      ...propsTable,
      defaultValue: { summary: 'solid' },
      type: { summary: "'solid' | 'outlined' | 'text'" }
   } 
});

export const dimensionArgType = () => ({
   width: {
      control: {
         type: 'number',
      },
      description: 'Define component width',
      table: {
         ...propsTable,
         defaultValue: { summary: 'undefined' },
         type: { summary: 'number' }
      }
   },
   minWidth: {
      control: {
         type: 'number',
      },
      description: 'Define component min width',
      table: {
         ...propsTable,
         defaultValue: { summary: 'undefined' },
         type: { summary: 'number' }
      }
   },
   maxWidth: {
      control: {
         type: 'number',
      },
      description: 'Define component max width',
      table: {
         ...propsTable,
         defaultValue: { summary: 'undefined' },
         type: { summary: 'number' }
      }
   },
   height: {
      control: {
         type: 'number',
      },
      description: 'Define component height',
      table: {
         ...propsTable,
         defaultValue: { summary: 'undefined' },
         type: { summary: 'number' }
      }
   },
   minHeight: {
      control: {
         type: 'number',
      },
      description: 'Define component min height',
      table: {
         ...propsTable,
         defaultValue: { summary: 'undefined' },
         type: { summary: 'number' }
      }
   },
   maxHeight: {
      control: {
         type: 'number',
      },
      description: 'Define component max height',
      table: {
         ...propsTable,
         defaultValue: { summary: 'undefined' },
         type: { summary: 'number' }
      }
   }
})

export const iconArgType = () => ({
   appendIcon: {
      control: {
         type: 'object',
      },
      description: 'Define component append icon',
      table: {
         ...propsTable,
         defaultValue: { summary: 'undefined' },
         type: { summary: 'IconType' }
      }
   },
   prependIcon: {
      control: {
         type: 'object',
      },
      description: 'Define component prepend icon',
      table: {
         ...propsTable,
         defaultValue: { summary: 'undefined' },
         type: { summary: 'IconType' }
      }
   }
});

export const routeArgType = () => ({
   control: {
      type: 'text',
   },
   description: 'Define component router',
   table: {
      ...propsTable,
      defaultValue: { summary: 'undefined' },
      type: { summary: "string | RouteLocationRaw"}
   }
});

export const labelArgType = () => ({
   control: {
      type: 'text',
   },
   description: 'Define aria-label for component',
   table: {
      ...propsTable,
      defaultValue: { summary: 'undefined' },
      type: { summary: 'string' }
   }
})

