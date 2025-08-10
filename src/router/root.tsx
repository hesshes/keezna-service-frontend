import { Suspense, lazy } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";

const Loading = <div>Loading...</div>;
const Main = lazy(() => import("../pages/MainPage"));
const routes: RouteObject[] = [
    {
        path: "",
        element: (
            <Suspense fallback={Loading}>
                <Main />
            </Suspense>
        ),
    },
];

const router = createBrowserRouter(routes);

export default router;
