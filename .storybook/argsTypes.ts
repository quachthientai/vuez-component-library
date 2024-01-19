const propsTable = {
   category: 'Props'
};

export const colorArgType = (
   options = ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'plain']
) => ({
   options,
   control: {
      type: 'select',
      description: 'Define component colors',
      defaultValue: 'plain',
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
   table: {...propsTable} 
});

export const contentArgType = () => ({
   control: {
      type: 'text',
      description: 'Define component content',
   },
   table: {...propsTable} 
});

export const disabledArgType = () => ({
   control: {
      type: 'boolean',
      description: 'Whether component is disabled or not',
   },
   table: {...propsTable} 
});

export const hrefArgType = () => ({
   control: {
      type: 'text',
      description: 'Define component href',
   },
   table: {...propsTable} 
});

export const elevationArgType = () => ({
   control: {
      type: 'range',
      min: 0,
      max: 5,
      step: 1
   },
   table: {...propsTable}
});

export const sizeArgType = () => ({
   options: ['sm', 'md', 'lg'],
   control: {
      type: 'select',
      description: 'Define component size',
      defaultValue: 'md',
      labels: {
         sm: 'sm',
         md: 'md',
         lg: 'lg',
      }
   },
   table: {...propsTable} 
});

export const variantArgType = () => ({
   options: ['solid', 'outlined', 'text'],
   control: {
      type: 'select',
      description: 'Define component variant',
      defaultValue: 'solid',
      labels: {
         solid: 'solid',
         outlined: 'outlined',
         text: 'text',
      }
   },
   table: {...propsTable} 
});

export const dimensionArgType = () => ({
   width: {
      control: {
         type: 'number',
         description: 'Define component width',
      },
      table: {...propsTable}
   },
   minWidth: {
      control: {
         type: 'number',
         description: 'Define component min width',
      },
      table: {...propsTable}
   },
   maxWidth: {
      control: {
         type: 'number',
         description: 'Define component max width',
      },
      table: {...propsTable}
   },
   height: {
      control: {
         type: 'number',
         description: 'Define component height',
      },
      table: {...propsTable}
   },
   minHeight: {
      control: {
         type: 'number',
         description: 'Define component min height',
      },
      table: {...propsTable}
   },
   maxHeight: {
      control: {
         type: 'number',
         description: 'Define component max height',
      },
      table: {...propsTable}
   }
})

export const iconArgType = () => ({
   appendIcon: {
      control: {
         type: 'object',
         description: 'Define component append icon',
      },
      table: {...propsTable}
   },
   prependIcon: {
      control: {
         type: 'object',
         description: 'Define component prepend icon',
      },
      table: {...propsTable}
   }
});
