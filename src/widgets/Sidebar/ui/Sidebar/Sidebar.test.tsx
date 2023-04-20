import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import i18nRenderWithTranslation from 'shared/lib/tests/i18nRenderWithTranslation';

describe('Sidebar', () => {
    test('base test', () => {
        i18nRenderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toHaveClass('Sidebar');
        screen.debug();
    });
    test('sidebar toggle button', () => {
        i18nRenderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('toggleButton');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        screen.debug();
    });
});
