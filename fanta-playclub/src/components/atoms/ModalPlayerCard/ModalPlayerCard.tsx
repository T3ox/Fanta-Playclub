import React from "react";
import { useModal } from "../../../utils/context/FiltersModal";
import { useUser } from "../../../utils/context/User";
import { teamImageSetter } from "../../../utils/helper/helper";
import "./styles.scss";
import Props from "./types";

const ModalPlayerCard: React.FC<Props> = ({ player }) => {
    const { addPlayerShowModal, closeModal } = useUser();
    const { updateRoles, updateTeams } = useModal();

    return (
        <div
            className="modal-player-card d-flex flex-column shadow"
            onClick={() => {
                addPlayerShowModal(player);
                closeModal();
                updateRoles([]);
                updateTeams([]);
            }}
        >
            <div className="modal-player-card_player-name">{player.riotID}</div>

            <div className="modal-player-card_player-info d-flex">
                <div className="player-card_team d-flex align-items-center flex-column">
                    <div className="player-card_team-image">
                        <img src={teamImageSetter(player.team)} alt="team" />
                    </div>
                    <span>{player.team}</span>
                </div>
                <div className="player-card-general">
                    <p>{player.role}</p>
                    <>
                        <p className="points">{player.cost} PUNTO</p>
                        <img src="/images/credits-icon.png" alt="" />
                    </>
                </div>
            </div>
        </div>
    );
};

export default ModalPlayerCard;
