import React, { useState } from "react";
import Modal from "react-modal";
import { Player } from "../../../utils/LocalDB/playerMock";
import Filters from "../Filters/Filters";
import "./styles.scss";

Modal.setAppElement("#root");

interface ChoosePlayerModalProps {
    players: Player[];
    isOpen: boolean;
    onClose: () => void;
}

const ChoosePlayerModal: React.FC<ChoosePlayerModalProps> = ({
    players,
    isOpen,
    onClose,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [minValue, setMinValue] = useState(1);
    const [maxValue, setMaxValue] = useState(10);
    const [roleFilter, setRoleFilter] = useState<string | null>(null);
    const [teamFilter, setTeamFilter] = useState<string | null>(null);

    const handleClose = () => {
        setSearch("");
        setMinValue(1);
        setMaxValue(10);
        setRoleFilter(null);
        setTeamFilter(null);
        onClose();
    };

    return (
        <>
            <div
                className={`modal fade ${isModalOpen ? "show" : " "}`}
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            ></div>

            <Modal
                isOpen={isOpen}
                onRequestClose={handleClose}
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <div className="modal-filters-section">
                    <Filters />
                </div>
                {/*<div className="modal-players-section">
                <PlayersGrid
                players={players}
                search={search}
                minValue={minValue}
                maxValue={maxValue}
                roleFilter={roleFilter}
                teamFilter={teamFilter}
                />
                </div>*/}
            </Modal>
        </>
    );
};

export default ChoosePlayerModal;
