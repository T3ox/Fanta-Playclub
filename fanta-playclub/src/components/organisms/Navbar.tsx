import { useEffect, useState } from "react";
import NavLinksGroup from "../molecules/NavLinksGroup/NavLinksGroup";

import CloseButton from "../../utils/icons/closeButton";
import GameSwitcher from "../atoms/NavLink/GameSwitcher/GameSwitcher";
import "./styles.scss";

const Navbar = () => {
    const links = ["Squadra", "Leaderboard"];
    const offcanvasElement = document.getElementById("offcanvasNavbar");

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        document.body.style.overflow = "auto";
    };

    const handleShow = () => {
        setShow(true);
        document.body.style.overflow = "hidden";
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <header id="navbar-header">
            <nav className={`navbar navbar-expand-md navbar-dark`}>
                <a className="navbar-brand fs-4" href="/">
                    Home
                </a>
                <button
                    className="navbar-toggler shadow-none border-0"
                    type="button"
                    onClick={handleShow}
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className={`collapse navbar-collapse`} id="navbarNav">
                    <NavLinksGroup links={links} />
                    <GameSwitcher />
                </div>
            </nav>
            {show && (
                <div className="offcanvas-overlay" onClick={handleClose}></div>
            )}

            <div
                className={`offcanvas offcanvas-end ${
                    show ? "show overflow-hidden" : "hiding"
                }`}
                tabIndex={-1}
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
            >
                <div className="offcanvas-header">
                    <button
                        type="button"
                        className="close-offcanvas"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        onClick={handleClose}
                    >
                        <CloseButton />
                    </button>
                </div>
                <div className="offcanvas-body">
                    <NavLinksGroup links={links} />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
