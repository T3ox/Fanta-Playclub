// import circlePlus from "../../utils/circlePlus.svg";
import { useUser } from "../../utils/context/User";
import GameSwitcher from "../atoms/GameSwitcher/GameSwitcher";
import TeamCostBar from "../molecules/TeamCostBar/TeamCostBar";
import TeamGroup from "../organisms/TeamGroup/TeamGroup";

const TeamPage = () => {
    const { selectedTeam } = useUser();

    return (
        <div
            className="d-flex justify-content-center align-items-center flex-column"
            style={{ backgroundColor: "black" }}
        >
            <TeamCostBar />
            <TeamGroup />
            <GameSwitcher />
            {selectedTeam}
        </div>
    );
};

export default TeamPage;
