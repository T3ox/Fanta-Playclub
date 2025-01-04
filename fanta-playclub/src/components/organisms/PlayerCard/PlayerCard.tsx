import React from "react";
import { useUser } from "../../../utils/context/User";
import GenericPlayerCard from "../../molecules/GenericPlayerCard/PlayerCard";
import "./styles.scss";
import Props from "./types";

const PlayerCard: React.FC<Props> = ({ handle }) => {
    const { selectedTeam } = useUser();

    function isEmptyObject(obj: object) {
        return Object.keys(obj).length === 0;
    }

    /*userMock.players.valorant.length === 0 ||
    userMock.players.valorant.every(isEmptyObject)
        ? console.log("vuoto")
        : console.log("non è vuoto");*/

    return (
        <div className="player-card_container">
            <div
                className={`player-card_border ${selectedTeam === "LoL" ? "lol" : "valorant"}`}
            >
                <GenericPlayerCard handle={handle} />
            </div>
        </div>
    );
};

export default PlayerCard;
