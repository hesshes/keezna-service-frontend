import Intro from "../compoonents/Intro";
import MainLayout from "../layouts/MainLayout";

const MainPage = (): JSX.Element => {
    return (
        <MainLayout>
            <Intro />
        </MainLayout>
    );
};

export default MainPage;
