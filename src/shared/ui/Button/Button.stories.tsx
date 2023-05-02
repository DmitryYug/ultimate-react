import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { CenterComponentDecorator } from 'shared/config/storyBook/CenterComponentDecorator';
import ThemeDecorator from 'shared/config/storyBook/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;
export const Primary: Story = {
    args: {
        children: 'Button',
    },
    decorators: [
        (Story) => CenterComponentDecorator(Story),
        (Story) => ThemeDecorator(Story, Themes.LIGHT),
    ],
};
export const Clear: Story = {
    args: {
        children: 'Clear Button',
        btnStyle: ThemeButton.CLEAR,
    },
    decorators: [
        (Story) => CenterComponentDecorator(Story),
        (Story) => ThemeDecorator(Story, Themes.LIGHT),
    ],
};
export const Outline: Story = {
    args: {
        children: 'Outline Button',
        btnStyle: ThemeButton.OUTLINE,
    },
    decorators: [
        (Story) => CenterComponentDecorator(Story),
        (Story) => ThemeDecorator(Story, Themes.LIGHT),
    ],
};

export const OutlineThemeDark: Story = {
    args: {
        children: 'Outline Button',
        btnStyle: ThemeButton.OUTLINE,
    },
    decorators: [
        (Story) => CenterComponentDecorator(Story),
        (Story) => ThemeDecorator(Story, Themes.DARK),
    ],
};
