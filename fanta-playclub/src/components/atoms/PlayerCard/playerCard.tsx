import React from "react";
import { useUser } from "../../../utils/context/User";
import "./playerCard.scss";
import Props from "./types";

const PlayerCard: React.FC<Props> = ({ player }) => {
    const { addPlayerShowModal, closeModal } = useUser();

    return (
        <div
            className="card"
            onClick={() => {
                addPlayerShowModal(player);
                closeModal();
            }}
        >
            <img src={""} alt="" />
            <h2>{player.riotID}</h2>
            <p>{player.role}</p>
            <p>{player.team}</p>
            <p className="points">{player.cost} PUNTO</p>
        </div>
    );
};

export default PlayerCard;
