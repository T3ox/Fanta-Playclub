import { useUser } from "../../../utils/context/User";
import "./style.scss";

const GameSwitcher = () => {
    const { changeSelectedTeam } = useUser();

    return (
        <label className="switch my-4">
            <input type="checkbox" onChange={changeSelectedTeam} />
            <span className="slider"></span>
        </label>
    );
};

export default GameSwitcher;
