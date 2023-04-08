import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

export function AppRouter() {
    return (
        <Suspense fallback={(
            <PageLoader />
        )}
        >
            <Routes>
                {Object.values(routes).map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}
