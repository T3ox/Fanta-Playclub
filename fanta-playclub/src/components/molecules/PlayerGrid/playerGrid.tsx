import React from "react";
import PlayerCard from "../../atoms/PlayerCard/playerCard";
import { Player } from "../../../utils/LocalDB/playerMock";
import "./playerGrid.css";

interface PlayersGridProps {
  players: Player[];
  search: string;
  minValue: number; 
  maxValue: number; 
  roleFilter: string | null;
  teamFilter: string | null;
}

const PlayersGrid: React.FC<PlayersGridProps> = ({ players, search, minValue, maxValue, roleFilter, teamFilter }) => {
  const filteredPlayers = players.filter(
    (player) =>
      player.nickname.toLowerCase().startsWith(search.toLowerCase()) &&
      player.costo >= minValue && 
      player.costo <= maxValue && 
      (!roleFilter || player.ruolo === roleFilter) &&
      (!teamFilter || player.salalan === teamFilter)
  );

  return (
    <div className="containerPlayerGrid"> 

      {filteredPlayers.map((player) => (
        <PlayerCard key={player.iD} player={player} />
      ))}
    </div>
  );
};

export default PlayersGrid;
