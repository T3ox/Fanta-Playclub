import React from "react";
import { useModal } from "../../../utils/context/FiltersModal";
import { useUser } from "../../../utils/context/User";
import {
    lolRoleImageSetter,
    teamImageSetter,
    valorantRoleImageSetter,
} from "../../../utils/helper/helper";
import "./styles.scss";
import Props from "./types";

const ModalPlayerCard: React.FC<Props> = ({ player }) => {
    const { addPlayerShowModal, closeModal, selectedTeam } = useUser();
    const { updateRoles, updateTeams } = useModal();

    const playClubName = (team: string): JSX.Element => {
        const words = team.split(" ");
        const lastWord = words.pop();
        const rest = words.join(" ");

        return (
            <div className="sala-lan-container">
                <span className="sala-lan mb-2">{rest}</span>
                <br/>
                <span className="città">{lastWord}</span>
            </div>
        );
    };

    const imageSetter: string =
        selectedTeam === "LoL"
            ? lolRoleImageSetter(player.role)
            : valorantRoleImageSetter(player.role);

    return (
        <div
            className="modal-player-card d-flex justify-content-center flex-column shadow"
            onClick={() => {
                addPlayerShowModal(player);
                closeModal();
                updateRoles([]);
                updateTeams([]);
            }}
        >
            <div className="modal-player-card_player-info d-flex justify-content-between">
                <div className="player-card_team d-flex align-items-center justify-content-start flex-column">
                    <div className="player-card_team-image">
                        <img src={teamImageSetter(player.team)} alt="team" />
                    </div>
                    {playClubName(player.team)}
                </div>
                <div className="player-card-general d-flex align-items-center flex-column">
                    <div className="d-flex justify-content-center align-items-center player-cost">
                        <img src="/images/credits-icon.png" alt="" />
                        <p className="points">{player.cost}</p>
                    </div>
                    <div className="modal-player-card_player-name">{player.riotID}</div>
                    <img src={imageSetter} alt="role" />
                </div>
            </div>

            {/*<div
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
                        <span>{playClubName(player.team)}</span>
                        </div>
                        <div className="player-card-general">
                        <div className="d-flex justify-content-center align-items-center player-cost">
                        <img src="/images/credits-icon.png" alt="" />
                        <p className="points">{player.cost}</p>
                        </div>
                        <img src={imageSetter} alt="role" />
                        </div>
                        </div>
                        </div>*/}
        </div>
    );
};

export default ModalPlayerCard;
