import React, {ErrorInfo, ReactNode} from 'react';
import {PageError} from 'widgets/PageError';
import {types} from 'sass';
import Error = types.Error;

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorStateProps {
    hasError: boolean
}
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorStateProps> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        console.log(error, errorInfo);
    }

    render() {
        const { children } = this.props;
        const { hasError } = this.state;
        if (hasError) {
            // Можно отрендерить запасной UI произвольного вида
            return <PageError />;
        }

        return children;
    }
}
