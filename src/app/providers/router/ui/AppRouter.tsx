import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'shared/config/routeConfig/routeConfig';

export function AppRouter() {
    return (
        <Suspense fallback={(
            <div>
                Loading...
            </div>
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
