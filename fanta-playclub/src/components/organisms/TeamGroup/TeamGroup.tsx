import { useUser } from "../../../utils/context/User";
import { userMock } from "../../../utils/LocalDB/userMock";
import PlayerCard from "../PlayerCard/PlayerCard";
import "./styles.scss";

const TeamGroup = () => {
    const { selectedTeam, showPlayerModal, addPlayerShowModal } = useUser();

    const players =
        selectedTeam === "LoL"
            ? userMock.players.lol
            : userMock.players.valorant;

    //showPlayerModal ? console.log("godo") : console.log("non godo");

    return (
        <div
            className="team-group container d-flex justify-content-around bg-black"
            style={{ maxWidth: "80%" }}
        >
            {players.map((player) => (
                <div className="custom-col" key={player.iD}>
                    <PlayerCard key={player.iD} playerId={player.iD} />
                </div>
            ))}
        </div>
    );
};

export default TeamGroup;
