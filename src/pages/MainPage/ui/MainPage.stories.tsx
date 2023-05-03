import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storyBook/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import MainPage from 'pages/MainPage/ui/MainPage';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MainPage>;
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
