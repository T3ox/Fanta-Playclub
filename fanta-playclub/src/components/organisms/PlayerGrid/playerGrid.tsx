import { useModal } from "../../../utils/context/FiltersModal";
import PlayerCard from "../../atoms/PlayerCard/playerCard";
import "./playerGrid.css";

interface PlayersGridProps {
    /*players: Player[];
    search: string;
  minValue: number; 
  maxValue: number; 
  roleFilter: string | null;
  teamFilter: string | null;*/
}

const PlayersGrid = () => {
    const { filteredPlayers } = useModal();

    const search = "";
    const minValue = 1;
    const maxValue = 5;
    const roleFilter = "";
    const teamFilter = "";

    /*const filteredPlayers = players.filter(
        (player) =>
            player.nickname.toLowerCase().startsWith(search.toLowerCase()) &&
            player.costo >= minValue &&
            player.costo <= maxValue &&
            (!roleFilter || player.ruolo === roleFilter) &&
            (!teamFilter || player.salalan === teamFilter)
    );*/

    return (
        <div className="containerPlayerGrid">
            {filteredPlayers.length > 0 &&
                filteredPlayers.map((player) => (
                    <PlayerCard key={player.iD} player={player} />
                ))}
        </div>
    );
};

export default PlayersGrid;
