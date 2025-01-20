import { useEffect } from "react";
import { useUser } from "../../../utils/context/User";
import { roleImages } from "../../../utils/LocalDB/roleImages";
import { Player, userMock } from "../../../utils/LocalDB/userMock";
import EmptyPlayerCard from "../../molecules/EmptyPlayerCard/EmptyPlayerCard";
import FullPlayerCard from "../../molecules/FullPlayerCard/FullPlayerCard";
import "./styles.scss";

const TeamGroup = () => {
    const { selectedTeam, players } = useUser();

    // roles images pre-load
    useEffect(() => {
        roleImages.forEach((url) => {
            const img = new Image();
            img.src = url;
        });
    });

    const selectedPlayers =
        selectedTeam === "LoL"
            ? userMock.players.lol
            : userMock.players.valorant;

    function isEmptyObject(player: Player) {
        return player.riotID !== "" && player.cost != 0 ? false : true;
    }

    const emptyPlayerCard = (player: Player) => {
        return isEmptyObject(player) ? true : false;
    };
    return (
        <div
            className="team-group container d-flex justify-content-around bg-black"
            style={{ maxWidth: "80%" }}
        >
            {players.map((player) => (
                <div className="custom-col" key={player.iD}>
                    <div className="player-card_container">
                        <div
                            className={`player-card_border ${selectedTeam === "LoL" ? "lol" : "valorant"}`}
                        >
                            {emptyPlayerCard(player) ? (
                                <EmptyPlayerCard playerId={player.iD} />
                            ) : (
                                <FullPlayerCard player={player} />
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamGroup;
