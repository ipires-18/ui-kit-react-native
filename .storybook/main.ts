import type {StorybookConfig} from '@storybook/react-webpack5';
const config: StorybookConfig = {
  stories: [
    '../packages/docs/**/*.mdx',
    '../packages/docs/**/*.stories.@(ts|tsx)',
    '../packages/components/**/*.mdx',
    '../packages/components/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-react-native-web'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
    defaultName: "Documentação"
  },
};
export default config;
