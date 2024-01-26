/** @type { import('@storybook/vue3').Preview } */
import '../src/assets/scss/main.scss'
import type { Preview } from '@storybook/vue3'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    docs: {
      toc: {
        headingSelector: 'h3, h4',
        title: 'Table of Contents'
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
