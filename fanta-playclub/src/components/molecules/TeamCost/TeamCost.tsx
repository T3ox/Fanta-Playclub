import { useEffect, useState } from "react";
import { useUser } from "../../../utils/context/User";
import { userMock } from "../../../utils/LocalDB/userMock";
import TeamCostBar from "../../atoms/TeamCostBar/TeamCostBar";
import "./styles.scss";

const TeamCost = () => {
    // Dichiarazione useState per costo del proprio team, variabile per team scelto dal Context e costo massimo del team
    const [teamCost, setTeamCost] = useState(0);
    const { selectedTeam } = useUser();
    const TOTALTEAMCOST = 15;

    // Metodo per calcolare costo del team
    const sumCosts = () => {
        if (selectedTeam === "LoL") {
            let sum = 0;
            userMock.players.lol.map((player) => {
                sum += player.cost;
            });

            return sum;
        } else {
            let sum = 0;
            userMock.players.valorant.map((player) => {
                sum += player.cost;
            });

            return sum;
        }
    };

    useEffect(() => {
        setTeamCost(sumCosts());
    }, []);

    return (
        <div className="team-cost-container d-flex align-items-center justify-content-between">
            <div className="progres-container">
                <TeamCostBar
                    teamCost={teamCost}
                    totalTeamCost={TOTALTEAMCOST}
                />
            </div>
            <span className="text">
                {teamCost}/{TOTALTEAMCOST}
            </span>
        </div>
    );
};

export default TeamCost;
