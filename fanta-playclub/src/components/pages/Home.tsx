import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Player, players } from "../../utils/LocalDB/playerMock";
import ChoosePlayerModal from "../organisms/modal/ChoosePlayerModal";

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const playersList: Player[] = players.lol;

    return (
        <div className="home-page">
            <h1>Seleziona il gioco</h1>
            <button onClick={() => setModalOpen(true)}>Scegli Giocatore</button>
            <ChoosePlayerModal
                players={playersList}
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </div>
    );
};
export default HomePage;
