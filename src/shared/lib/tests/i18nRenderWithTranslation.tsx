import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import i18n from 'shared/config/i18n/i18nTestsConfig';

const i18nRenderWithTranslation = (component: ReactNode) => (
    render(
        <I18nextProvider i18n={i18n}>
            {component}
        </I18nextProvider>,
    )
);
export default i18nRenderWithTranslation;
