import type { Preview } from '@storybook/react';
import { GlobalStyleDecorator } from '../../src/shared/config/storyBook/GlobalStylesDecorator';
import RouterDecorator from '../../src/shared/config/storyBook/RouterDecorator';

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
        (Story) => RouterDecorator(Story),
    ],
};

export default preview;
