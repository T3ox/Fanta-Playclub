import { useUser } from "../../../utils/context/User";
import TeamCostBar from "../../atoms/TeamCostBar/TeamCostBar";
import "./styles.scss";

const TeamCost = () => {
    const { selectedTeam, team, teamCost } = useUser();

    // Dichiarazione useState per costo del proprio team, variabile per team scelto dal Context e costo massimo del team
    //const [teamCost, setTeamCost] = useState<number>(sumCosts());
    const TOTALTEAMCOST = 15;

    return (
        <div className="team-cost-container d-flex align-items-center justify-content-between">
            <div className="progres-container">
                <TeamCostBar teamCost={teamCost} totalTeamCost={TOTALTEAMCOST} />
            </div>
            <span className="text">
                {teamCost}/{TOTALTEAMCOST}
            </span>
        </div>
    );
};

export default TeamCost;
