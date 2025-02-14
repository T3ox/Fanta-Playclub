import React, { useState } from "react";
import Modal from "react-modal";
import { Player } from "../../../utils/LocalDB/userMock";
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
            >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <h5 className="modal-title" id="staticBackdroplabel">
                                Cart
                            </h5>
                            <div
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChoosePlayerModal;
