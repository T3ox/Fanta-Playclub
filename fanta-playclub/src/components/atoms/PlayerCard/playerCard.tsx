import React from "react";
import { Player } from "../../../utils/LocalDB/playerMock"; 
import "./playerCard.css"

interface PlayerCardProps {
    player: Player;
  }
  
  const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => (
    <div className="card">
      <img src={player.immagine} alt={player.nickname} />
      <h2>{player.nickname}</h2>
      <p>{player.ruolo}</p>
      <p>{player.salalan}</p>
      <p>{player.rank}</p>
      <p className="points">{player.costo} PUNTO</p>
    </div>
  );
  
  export default PlayerCard;