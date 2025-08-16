import "../assets/css/topnav.scss";
import { TopNavProps } from "../types/component.types";
import { JSX, useRef, useState } from "react";

function TopNav({ children }: TopNavProps): JSX.Element {
    const [isExpanded, setIsExpended] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const toggleMenu = () => {
        setIsExpended((b) => !b);
    };

    return (
        <>
            <header id="header" role="banner">
                <div className="header__inner">
                    <div className="header__logo">
                        <a href="#">
                            portfolio<em>developer</em>
                        </a>
                    </div>
                    <nav
                        className={`header__nav${isExpanded ? " show" : ""}`}
                        role="navigation"
                        aria-label="메인 메뉴"
                    >
                        <ul>
                            <li>
                                <a href="#intro">intro</a>
                            </li>
                            <li>
                                <a href="#skill">skill</a>
                            </li>
                            <li>
                                <a href="#site">site</a>
                            </li>
                            <li>
                                <a href="#port">portfolio</a>
                            </li>
                            <li>
                                <a href="#contact">contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div
                        className="header__nav__mobile"
                        id="headerToggle"
                        aria-controls="primary-menu"
                        aria-expanded={isExpanded}
                        role="button"
                        tabIndex={0}
                        onClick={toggleMenu}
                    >
                        <span></span>
                    </div>
                </div>
            </header>
        </>
    );
}

export default TopNav;
