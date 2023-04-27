import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { CenterComponentDecorator } from 'shared/config/storyBook/CenterComponentDecorator';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    decorators: [
        (Story) => CenterComponentDecorator(Story),
    ],
};

export default meta;
type Story = StoryObj<typeof Button>;
export const Primary: Story = {
    args: {
        children: 'Button',
    },
};
export const Clear: Story = {
    args: {
        children: 'Clear Button',
        btnStyle: ThemeButton.CLEAR,
    },
};
export const Outline: Story = {
    args: {
        children: 'Outline Button',
        btnStyle: ThemeButton.OUTLINE,
    },
};
