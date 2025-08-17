import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import Loading from "../../compoonents/common/Loading";

const Member = lazy(() => import("../../pages/member/MemberPage"));

const memberRouter = (): RouteObject[] => {
    return [
        {
            path: "join",
            element: (
                <Suspense fallback={Loading()}>
                    <Member />
                </Suspense>
            ),
        },
    ];
};

export default memberRouter;
