import React, { useState } from "react";
import Modal from "react-modal";
import { Player } from "../../../utils/LocalDB/playerMock";
import Filters from "../Filters/Filters";
import "./ChoosePlayerModal.css";

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
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <div className="modal-filters-section">
                <Filters
                    search={search}
                    setSearch={setSearch}
                    minValue={minValue}
                    maxValue={maxValue}
                    setMinValue={setMinValue}
                    setMaxValue={setMaxValue}
                    roleFilter={roleFilter}
                    setRoleFilter={setRoleFilter}
                    teamFilter={teamFilter}
                    setTeamFilter={setTeamFilter}
                />
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
    );
};

export default ChoosePlayerModal;
