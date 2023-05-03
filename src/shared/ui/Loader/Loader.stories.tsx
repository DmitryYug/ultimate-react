import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storyBook/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { Loader } from 'shared';
import { CenterComponentDecorator } from 'shared/config/storyBook/CenterComponentDecorator';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Loader>;
export const Primary: Story = {
    decorators: [
        (Story) => CenterComponentDecorator(Story),
        (Story) => ThemeDecorator(Story, Themes.LIGHT),
    ],
};
export const Dark: Story = {
    decorators: [
        (Story) => CenterComponentDecorator(Story),
        (Story) => ThemeDecorator(Story, Themes.DARK),
    ],
};
