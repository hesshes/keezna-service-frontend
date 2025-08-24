import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import Loading from "../../compoonents/common/Loading";

const Image = lazy(() => import("../../pages/image/ImagePage"));

const imageRouter = (): RouteObject[] => {
    return [
        {
            path: "",
            element: (
                <Suspense fallback={Loading()}>
                    <Image />
                </Suspense>
            ),
        },
    ];
};

export default imageRouter;
