import TopNav from "../compoonents/TopNav";
import { MainLayoutProps } from "../types/component.types";

function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            <TopNav />
            <main id="main" role="main">
                <div className="h-dvh">{children}
                </div>
            </main>
            
        </>
    );
}

export default MainLayout;
