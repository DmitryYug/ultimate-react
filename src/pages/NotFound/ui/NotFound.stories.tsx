import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storyBook/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { NotFound } from 'pages/NotFound';

const meta: Meta<typeof NotFound> = {
    title: 'pages/NotFound',
    component: NotFound,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NotFound>;
export const Primary: Story = {
    args: {},
    decorators: [
        (Story) => ThemeDecorator(Story, Themes.LIGHT),
    ],
};
export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => ThemeDecorator(Story, Themes.DARK),
    ],
};
