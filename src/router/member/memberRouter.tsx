import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import Loading from "../../compoonents/common/Loading";
import MembnerJoin from "../../compoonents/member/Member";

const MemberJoin = lazy(() => import("../../pages/member/MemberJoinPage"));
const memberRouter = (): RouteObject[] => {
    return [
        {
            path: "join",
            element: (
                <Suspense fallback={Loading()}>
                    <MemberJoin />
                </Suspense>
            ),
        },
    ];
};

export default memberRouter;
