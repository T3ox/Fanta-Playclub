import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TrueModal from "../organisms/TrueModal/TrueModal";
import "./styles.scss";

const HomePage: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    //const playersList: Player[] = players.lol;
    const [selectedTeam, setSelectedTeam] = useState("LoL");

    const roles =
        selectedTeam === "LoL"
            ? ["Top Laner", "Jungler", "Mid Laner", "ADC", "Support"]
            : ["Controller", "Duelist", "Initiator", "Sentinel"];

    const playClubs = [
        "Another World Caserta",
        "Esplace Genova",
        "Gamever Napoli",
        "Hub Voghera",
        "Levelx55 Perugia",
        "Lobby E-Games Bari",
        "Parrot Sushi-Lan Roma",
        "PLB World Milano",
        "RedShift Gaming Messina",
        "Rift Esports Club Catanzaro",
        "Romagna Esports Club Cesena",
        "SpaceGames Salerno",
        "Spidibit Catania",
        "Titan Gaming Center Milano",
    ];

    return (
        <div className="home-page">
            <h1>Seleziona il gioco</h1>
            {/*<button onClick={() => setModalOpen(true)}>Scegli Giocatore</button>
            <ChoosePlayerModal
                players={playersList}
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />*/}

            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => setModalOpen(true)}
            >
                Launch demo modal
            </button>

            {modalOpen ? (
                <TrueModal
                    handleClick={() => setModalOpen(false)}
                    showModal={modalOpen}
                />
            ) : null}
            {modalOpen && <div className="overlay-background"></div>}
        </div>
    );
};
export default HomePage;
