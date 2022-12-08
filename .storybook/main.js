module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@pxtrn/storybook-addon-docs-stencil',
    '@storybook/addon-notes/register'
  ],
  framework: '@storybook/html'
};
