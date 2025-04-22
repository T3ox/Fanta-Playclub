import { useState } from "react";
import { useUser } from "../../../utils/context/User";
import "./style.scss";

const GameSwitcher = () => {
    const { changeSelectedGame } = useUser();
    const [isClickable, setIsClickable] = useState(true);

    const handleClick = () => {
        if (isClickable) {
            setIsClickable(false);
            changeSelectedGame();

            setTimeout(() => {
                setIsClickable(true);
            }, 1000);
        }
    };

    return (
        <div className="game-switcher">
            <label className="switch">
                <input type="checkbox" onClick={handleClick} disabled={!isClickable} />
                <span className="slider"></span>
            </label>
        </div>
    );
};

export default GameSwitcher;
