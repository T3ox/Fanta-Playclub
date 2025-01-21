import "./style.scss";

const GameSwitcher = () => {
    return (
        <label className="switch my-4">
            <input type="checkbox" />
            <span className="slider"></span>
        </label>
    );
};

export default GameSwitcher;
