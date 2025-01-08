import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { players, Player } from "../../utils/LocalDB/playerMock"; 
import FilterSection from "../molecules/FilterGroup/filterGroup";
import PlayerGrid from "../molecules/PlayerGrid/playerGrid"; 

interface Filters {
  nickname: string;
  ruoli: string[];
  salalan: string;
  costo: number;
}

type GameKeys = keyof typeof players;

const PlayersPage: React.FC = () => {
  const { game } = useParams<{ game: GameKeys }>(); 
  const [filters, setFilters] = useState<Filters>({
    nickname: "",
    ruoli: [],
    salalan: "",
    costo: 10,
  });

  const filteredPlayers = game && players[game]
    ? players[game].filter((player) => {
        const matchesNickname = player.nickname
          .toLowerCase()
          .includes(filters.nickname.toLowerCase());
        const matchesRole =
          filters.ruoli.length === 0 || filters.ruoli.includes(player.ruolo);
        const matchesSalaLan = player.salalan
          .toLowerCase()
          .includes(filters.salalan.toLowerCase());
        const matchesCosto = player.costo <= filters.costo;

        return matchesNickname && matchesRole && matchesSalaLan && matchesCosto;
      })
    : [];

  return (
        <div className="players-page">
          <div className="filter-group">
            <FilterSection
              filters={filters}
              setFilters={setFilters}
              ruoli={
                game === "lol"
                  ? ["Top Laner", "Jungler", "Mid Laner", "Bottom Laner", "Support"]
                  : ["Duelist", "Controller", "Initiator", "Sentinel"]
              }
            />
          </div>
          <div className="player-grid">
            <PlayerGrid filteredPlayers={filteredPlayers} />
          </div>
        </div>
      );
      
};

export default PlayersPage;
