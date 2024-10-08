import { createBrowserRouter } from 'react-router-dom';
import { NotFound } from '../components/Pages/NotFound';

import { lazy, Suspense } from 'react';
import { LoadingScreen } from '../components/Pages/LoadingScreen';
import { WithReduxToolKit } from '../components/Pages/WithReduxToolKit';
import { Counter } from '../components/Pages/Counter';
import { DataFetchExample } from '../components/Pages/DataFetchExample';
import { WithTankStackQuery } from '../components/Pages/WithTankStackQuery';
import { WithRTKQuery } from '../components/Pages/WithRTKQuery';

const HomePage = lazy(
    () =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(import('../components/Pages/HomePage').then((module) => ({ default: module.HomePage })));
            }, 0);
        })
);

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<LoadingScreen />}>
                <HomePage />
            </Suspense>
        )
    },
    {
        path: 'reduxtoolkit',
        element: (
            <Suspense fallback={<LoadingScreen />}>
                <WithReduxToolKit />
            </Suspense>
        )
    },
    {
        path: 'counter',
        element: (
            <Suspense fallback={<LoadingScreen />}>
                <Counter />
            </Suspense>
        )
    },
    {
        path: 'datafetch',
        element: (
            <Suspense fallback={<LoadingScreen />}>
                <DataFetchExample />
            </Suspense>
        )
    },
    {
        path: 'tankstackquery',
        element: (
            <Suspense fallback={<LoadingScreen />}>
                <WithTankStackQuery />
            </Suspense>
        )
    },
    {
        path: 'rtkquery',
        element: (
            <Suspense fallback={<LoadingScreen />}>
                <WithRTKQuery />
            </Suspense>
        )
    },
    {
        path: '*',
        element: <NotFound />
    }
]);
