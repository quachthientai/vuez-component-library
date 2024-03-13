/** @type { import('@storybook/vue3').Preview } */
import '../src/assets/scss/main.scss'
import type { Preview } from '@storybook/vue3'
import { withThemeByClassName, withThemeByDataAttribute } from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
    // actions: { argTypesRegex: '^on[A-Z].*' },
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
  },  
}

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];

export default preview
