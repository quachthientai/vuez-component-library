/** @type { import('@storybook/vue3').Preview } */
import '../src/assets/scss/main.scss'
import type { Preview } from '@storybook/vue3'
import { colorArgType, contentArgType, disabledArgType,hrefArgType } from './argsTypes'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8fafc' },
        { name: 'dark', value: '#1e293b' }
      ]
    },
  },
  // * Global argTypes */
  
}

export default preview
