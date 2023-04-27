import React from 'react';
import { Story } from '@storybook/react';

const styles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
};
export const CenterComponentDecorator = (Story: Story) => (
    <div style={styles}>
        <Story />
    </div>
);
