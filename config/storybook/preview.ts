import type { Preview } from '@storybook/react';
import ThemeDecorator from '../../src/shared/config/storyBook/ThemeDecorator';
import { GlobalStyleDecorator } from '../../src/shared/config/storyBook/GlobalStylesDecorator';
import { Themes } from '../../src/app/providers/ThemeProvider';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => GlobalStyleDecorator(Story),
        (Story) => ThemeDecorator(Story, Themes.LIGHT),
    ],
};

export default preview;
