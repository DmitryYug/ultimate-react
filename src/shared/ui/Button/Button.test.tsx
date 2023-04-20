import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('base test', () => {
        render(<Button>Test button</Button>);
        expect(screen.getByText('Test button')).toBeInTheDocument();
    });
    test('theme classes', () => {
        render(<Button btnStyle={ThemeButton.CLEAR}>Test button</Button>);
        expect(screen.getByText('Test button')).toHaveClass('clear');
        screen.debug();
    });
});
