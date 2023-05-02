import path from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';
import { RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

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

        /** Exclude default svg loader from default storybook
          webpack config */
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });

        /** Replace it with our svg loader */
        config.module.rules.push(buildSvgLoader());
        return config;
    },
};
export default config;
