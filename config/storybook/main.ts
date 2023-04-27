import path from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async (config) => {
        const paths = {
            src: path.resolve(__dirname, '..', '..', 'src'),
        };
        config.resolve.modules.push(paths.src, 'node_modules');
        config.module.rules.push(buildCssLoader(true));
        return config;
    },
};
export default config;