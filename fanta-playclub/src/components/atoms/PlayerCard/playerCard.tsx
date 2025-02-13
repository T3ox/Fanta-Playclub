import React from "react";
import { Player } from "../../../utils/LocalDB/playerMock";
import "./playerCard.css";

interface PlayerCardProps {
    player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => (
    <div className="card">
        <img src={""} alt="" />
        <h2>{player.riotID}</h2>
        <p>{player.role}</p>
        <p>{player.team}</p>
        <p className="points">{player.cost} PUNTO</p>
    </div>
);

export default PlayerCard;
