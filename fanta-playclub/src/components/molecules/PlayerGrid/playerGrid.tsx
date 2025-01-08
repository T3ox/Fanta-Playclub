import React from "react";
import PlayerCard from "../../atoms/PlayerCard/playerCard";
import { Player } from "../../../utils/LocalDB/playerMock";
import "./playerGrid.css";

interface PlayerGridProps {
  filteredPlayers: Player[];
}

const PlayerGrid: React.FC<PlayerGridProps> = ({ filteredPlayers }) => (
  <div className="player-grid">
    {filteredPlayers.map((player) => (
      <PlayerCard key={player.iD} player={player} />
    ))}
  </div>
);

export default PlayerGrid;
