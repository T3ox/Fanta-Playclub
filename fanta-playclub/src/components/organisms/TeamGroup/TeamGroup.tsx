import { useState } from "react";
import { useUser } from "../../../utils/context/User";
import { userMock } from "../../../utils/LocalDB/userMock";
import PlayerCard from "../PlayerCard/PlayerCard";
import "./styles.scss";

const TeamGroup = () => {
    const [showPlayerModal, setShowPlayerModal] = useState(false);
    const { selectedTeam } = useUser();

    const players =
        selectedTeam === "LoL"
            ? userMock.players.lol
            : userMock.players.valorant;

    return (
        <div
            className="team-group container d-flex justify-content-around bg-black"
            style={{ maxWidth: "80%" }}
        >
            {players.map((player) => (
                <div className="custom-col">
                    <PlayerCard
                        key={player.iD}
                        handle={() => {
                            setShowPlayerModal(showPlayerModal!);
                            console.log(showPlayerModal);
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default TeamGroup;
