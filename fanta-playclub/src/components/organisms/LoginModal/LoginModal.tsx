import React from "react";
import LoginForm from "../../molecules/LoginForm/LoginForm"; // Assicurati di avere il percorso corretto
import "./styles.scss";

interface Props {
    handleClick: () => void;
    showModal: boolean;
}

const LoginModal: React.FC<Props> = ({ handleClick, showModal }) => {
    return (
        <div
            className={`modal fade ${showModal ? "show" : ""}`}
            id="loginModal"
            data-bs-backdrop="static" 
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="loginModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header border-bottom-0">
                        <h5 className="modal-title" id="loginModalLabel">
                            Login
                        </h5>
                        <button
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={handleClick}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <LoginForm /> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
