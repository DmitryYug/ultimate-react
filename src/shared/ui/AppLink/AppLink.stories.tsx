import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storyBook/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { CenterComponentDecorator } from 'shared/config/storyBook/CenterComponentDecorator';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppLink>;
export const Primary: Story = {
    args: {
        children: 'Base link',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [
        (Story) => CenterComponentDecorator(Story),
        (Story) => ThemeDecorator(Story, Themes.LIGHT),
    ],
};

export const Dark: Story = {
    args: {
        children: 'Dark app theme link',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [
        (Story) => CenterComponentDecorator(Story),
        (Story) => ThemeDecorator(Story, Themes.DARK),
    ],
};
