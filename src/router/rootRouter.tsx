import { Suspense, lazy } from "react";
import { RouteObject } from "react-router-dom";
import memberRouter from "./member/memberRouter";
import Loading from "../compoonents/common/Loading";

const Main = lazy(() => import("../pages/MainPage"));
const rootRouter: RouteObject[] = [
    {
        path: "",
        element: (
            <Suspense fallback={Loading()}>
                <Main />
            </Suspense>
        ),
    },
    {
        path: "member",
        children: memberRouter(),
    },
];

export default rootRouter;
