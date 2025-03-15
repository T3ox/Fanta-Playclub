// import circlePlus from "../../utils/circlePlus.svg";
import TeamCost from "../../molecules/TeamCost/TeamCost";
import TeamGroup from "../../organisms/TeamGroup/TeamGroup";
import "./styles.scss";

const TeamPage = () => {
    return (
        <div className="team-page d-flex align-items-center flex-column">
            <TeamCost />
            <TeamGroup />
        </div>
    );
};

export default TeamPage;
