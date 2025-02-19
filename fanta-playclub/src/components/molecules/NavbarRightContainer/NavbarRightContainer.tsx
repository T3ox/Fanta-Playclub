import { useState } from "react";
import HamburgerMenu from "../../../utils/icons/HamburgerMenu";
import Button from "../../atoms/Button/Button";
import GameSwitcher from "../../atoms/GameSwitcher/GameSwitcher";
import LoginModal from "../../organisms/LoginModal/LoginModal";
import "./styles.scss";
import Props from "./types";

const NavbarRightContainer: React.FC<Props> = ({ handleClick }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    
    const handleLoginClick = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="navbar-right-group ">
            <div className="d-flex switch-displayer">
                <GameSwitcher />
                <Button
                    text="Accedi/Registrati"
                    className="btn btn-light mx-4"
                    handle={handleLoginClick} 
                    isActive={true}
                />
            </div>
            <div className="button-container">
                <Button
                    text=""
                    className="navbar-toggler shadow-none border-0"
                    children={<HamburgerMenu />}
                    handle={handleClick}
                    isActive={true}
                />
            </div>
            <LoginModal handleClick={closeModal} showModal={isModalOpen} />
        </div>
    );
};

export default NavbarRightContainer;

/*
    <div className="navbar-right-group">
        <GameSwitcher />
        <Button
            text="Accedi/Registrati"
            className="btn btn-light mx-4"
            handle={() => {}}
        />
    </div>
*/
