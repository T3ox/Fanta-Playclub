import "./styles.scss";
import Props from "./types";

const TeamCostBar: React.FC<Props> = ({ teamCost, totalTeamCost }) => {
    return (
        <div className="progress-loader">
            <div
                className={"team-cost"}
                style={{ width: `${(teamCost / totalTeamCost) * 100}%` }}
            ></div>
        </div>
    );
};

export default TeamCostBar;
