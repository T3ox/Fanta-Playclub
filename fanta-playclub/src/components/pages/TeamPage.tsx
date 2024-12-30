// import circlePlus from "../../utils/circlePlus.svg";
import { useUser } from "../../utils/context/User";
import GameSwitcher from "../atoms/GameSwitcher/GameSwitcher";
import TeamCost from "../molecules/TeamCost/TeamCost";
import TeamGroup from "../organisms/TeamGroup/TeamGroup";
import "./styles.scss";

const TeamPage = () => {
    const { selectedTeam } = useUser();

    return (
        <div
            className="team-page d-flex align-items-center flex-column"
            style={{ backgroundColor: "black" }}
        >
            <TeamCost />
            <TeamGroup />
            <GameSwitcher />
        </div>
    );
};

export default TeamPage;
