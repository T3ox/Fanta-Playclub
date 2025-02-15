import React from "react";
import { useUser } from "../../../utils/context/User";
import "./playerCard.scss";
import Props from "./types";
import { useModal } from "../../../utils/context/FiltersModal";

const PlayerCard: React.FC<Props> = ({ player }) => {
    const { addPlayerShowModal, closeModal } = useUser();
    const { updateRoles, updateTeams } = useModal();

    return (
        <div
            className="card"
            onClick={() => {
                addPlayerShowModal(player);
                closeModal();
                updateRoles([])
                updateTeams([])
                
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
