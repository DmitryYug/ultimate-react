import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storyBook/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import AboutPage from 'pages/AboutPage/ui/AboutPage';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AboutPage>;
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
