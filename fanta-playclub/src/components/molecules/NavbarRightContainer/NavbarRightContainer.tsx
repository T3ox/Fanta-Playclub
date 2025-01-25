import HamburgerMenu from "../../../utils/icons/HamburgerMenu";
import Button from "../../atoms/Button/Button";
import GameSwitcher from "../../atoms/NavLink/GameSwitcher/GameSwitcher";
import "./styles.scss";
import Props from "./types";

const NavbarRightContainer: React.FC<Props> = ({ handleClick }) => {
    return (
        <div className="navbar-right-group ">
            <div className="d-flex switch-displayer">
                <GameSwitcher />
                <Button
                    text="Accedi/Registrati"
                    className="btn btn-light mx-4"
                    handle={() => {}}
                />
            </div>
            <div className="button-container">
                <Button
                    className="navbar-toggler shadow-none border-0"
                    children={<HamburgerMenu />}
                    handle={handleClick}
                />
            </div>
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
