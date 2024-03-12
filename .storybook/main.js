const config = {
  stories: ['../src/components/**/*.mdx', '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-docs',
    '@storybook/addon-themes',
    // '@storybook/addon-styling',
    //'storybook-tailwind-dark-mode',

    'storybook-addon-vue-slots'
  ],
  core: {},
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  typescript: {}
}
export default config
