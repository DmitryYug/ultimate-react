import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from 'widgets/Sidebar';
import ThemeDecorator from 'shared/config/storyBook/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;
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
