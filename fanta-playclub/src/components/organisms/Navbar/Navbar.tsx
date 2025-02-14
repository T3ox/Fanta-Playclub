import { useEffect, useState } from "react";
import HamburgerMenu from "../../../utils/icons/HamburgerMenu";
import NavbarRightContainer from "../../molecules/NavbarRightContainer/NavbarRightContainer";
import NavLinksGroup from "../../molecules/NavLinksGroup/NavLinksGroup";
import Offcanvas from "../Offcanvas/Offcanvas";
import "./styles.scss";

const Navbar = () => {
    const links = [
        {
            url: "/team",
            displayName: "Squadra",
        },
        {
            url: "/leaderboard",
            displayName: "Leaderboard",
        },
    ];
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
                    <HamburgerMenu />
                </button>

                <div className={`collapse navbar-collapse`} id="navbarNav">
                    <NavLinksGroup className="" links={links} />

                    <NavbarRightContainer handleClick={handleShow} />
                </div>
            </nav>

            {show && <div className="offcanvas-overlay" onClick={handleClose}></div>}
            <Offcanvas show={show} handleClick={handleClose} links={links} />
        </header>
    );
};

export default Navbar;
