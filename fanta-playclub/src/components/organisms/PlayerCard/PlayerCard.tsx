import React from "react";
import { useUser } from "../../../utils/context/User";
import { Player } from "../../../utils/LocalDB/userMock";
import EmptyPlayerCard from "../../molecules/EmptyPlayerCard/EmptyPlayerCard";
import "./styles.scss";
import Props from "./types";

const PlayerCard: React.FC<Props> = ({ playerId }) => {
    const { selectedTeam, players } = useUser();

    function isEmptyObject(player: Player) {
        return player.riotID === "" && player.cost == 0 ? true : false;
    }

    const emptyPlayerCard = () => {
        if (selectedTeam === "LoL") {
            return players.every(isEmptyObject) ? true : false;
        } else {
            return players.every(isEmptyObject) ? true : false;
        }
    };

    return (
        <div className="player-card_container">
            <div
                className={`player-card_border ${selectedTeam === "LoL" ? "lol" : "valorant"}`}
            >
                {emptyPlayerCard() ? (
                    <EmptyPlayerCard playerId={playerId} />
                ) : (
                    <h1>Godo</h1>
                )}
            </div>
        </div>
    );
};

export default PlayerCard;
