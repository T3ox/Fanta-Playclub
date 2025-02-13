import React, { useState } from "react";
import CloseButton from "../../../utils/icons/closeButton";
import Button from "../../atoms/Button/Button";
import GameSwitcher from "../../atoms/NavLink/GameSwitcher/GameSwitcher";
import NavLinksGroup from "../../molecules/NavLinksGroup/NavLinksGroup";
import "./styles.scss";
import Props from "./types";

const Offcanvas: React.FC<Props> = ({ show, handleClick, links }) => {
    // Use context
    //const { teamSelected } = React.useContext(userContext);
    const [teamSelected, setTeamSelected] = useState("LoL");

    return (
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
                    onClick={handleClick}
                >
                    <CloseButton />
                </button>
            </div>
            <div className="offcanvas-body">
                <NavLinksGroup className="" links={links} />
                <div className="offcanvas-body_other d-flex flex-column align-items-center my-2">
                    <Button
                        text="Accedi/Registrati"
                        className="btn btn-light login-button"
                        handle={() => {}}
                    />
                    <div className="game-switcher-container d-flex justify-content-between align-items-center">
                        <span className="selected-game">
                            {teamSelected === "LoL"
                                ? "League of Legends"
                                : "Valorant"}
                        </span>
                        <GameSwitcher />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offcanvas;
