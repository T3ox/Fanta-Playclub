import PlayerCard from "../PlayerCard/PlayerCard";

interface Player {
    id: number;
    name: string;
    position: string;
}

const TeamGroup = () => {
    const players: Player[] = [
        { id: 1, name: "Player 1", position: "Top" },
        { id: 2, name: "Player 2", position: "Jungle" },
        { id: 3, name: "Player 3", position: "Mid" },
        { id: 4, name: "Player 4", position: "ADC" },
        { id: 5, name: "Player 5", position: "Support" },
    ];

    return (
        <div
            className="container d-flex justify-content-around bg-black"
            style={{ maxWidth: "80%" }}
        >
            {players.map((player) => (
                <PlayerCard key={player.id} />
            ))}
            {}
        </div>
    );
};

export default TeamGroup;
