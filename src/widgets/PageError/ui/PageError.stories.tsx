import type { Meta, StoryObj } from '@storybook/react';
import { PageError } from 'widgets/PageError';
import ThemeDecorator from 'shared/config/storyBook/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

const meta: Meta<typeof PageError> = {
    title: 'widget/PageError',
    component: PageError,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageError>;
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
