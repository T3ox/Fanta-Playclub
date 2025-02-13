import "./style.scss";

const GameSwitcher = () => {
    return (
        <div className="game-switcher">
            <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
            </label>
        </div>
    );
};

export default GameSwitcher;
