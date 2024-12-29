import { useEffect, useState } from "react";
import { useUser } from "../../../utils/context/User";
import { userMock } from "../../../utils/LocalDB/userMock";
import "./styles.scss";

const TeamCostBar = () => {
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
    {
        /*<div className="progres-container"></div>*/
    }

    return (
        <div className="progress-loader my-3">
            <div
                className={"team-cost"}
                style={{ width: `${(teamCost / TOTALTEAMCOST) * 100}%` }}
            ></div>
        </div>
    );
};

export default TeamCostBar;
