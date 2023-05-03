import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storyBook/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;
export const Primary: Story = {
    decorators: [
        (Story) => ThemeDecorator(Story, Themes.LIGHT),
    ],
};
export const Dark: Story = {
    decorators: [
        (Story) => ThemeDecorator(Story, Themes.DARK),
    ],
};
