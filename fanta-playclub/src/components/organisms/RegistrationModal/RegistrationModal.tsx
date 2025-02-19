import React from "react";
import RegisterForm from "../../molecules/RegistrationForm/RegistrationForm";
import Props from "./types";

const RegisterModal: React.FC<Props> = ({ handleClick, showModal }) => {
  return (
    <div className={`modal-overlay ${showModal ? "show" : ""}`}>
      <div
        className={`modal ${showModal ? "show" : ""}`}
        tabIndex={-1}
        aria-labelledby="registerModalLabel"
        aria-hidden={!showModal}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <h5 className="modal-title" id="registerModalLabel">
                Registrazione
              </h5>
              <button
                className="btn-close"
                onClick={handleClick}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
