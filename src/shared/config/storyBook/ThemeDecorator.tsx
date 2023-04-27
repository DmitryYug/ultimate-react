import { Story } from '@storybook/react';
import { classNames } from 'shared';
import { Themes } from 'app/providers/ThemeProvider';

const ThemeDecorator = (Story: Story, theme: Themes) => (
    <div className={classNames('app', {}, [theme])}>
        <Story />
    </div>
);

export default ThemeDecorator;
