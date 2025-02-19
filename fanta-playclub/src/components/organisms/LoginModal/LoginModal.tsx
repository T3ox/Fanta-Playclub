/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import LoginForm from "../../molecules/LoginForm/LoginForm";
import "./styles.scss";
import Props from "./types";

const LoginModal: React.FC<Props> = ({ handleClick, showModal }) => {
    return (
        <div className={`modal-overlay ${showModal ? "show" : ""}`}>
            <div
                className={`modal ${showModal ? "show" : ""}`}
                tabIndex={-1}
                aria-labelledby="loginModalLabel"
                aria-hidden={!showModal}
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <h5 className="modal-title" id="loginModalLabel">
                                Login
                            </h5>
                            <button
                                className="btn-close"
                                onClick={handleClick}
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <LoginForm onClose={handleClick} />
                            <p>
                                Non hai un account?{" "}
                                <a className="text-primary text-decoration-underline">
                                    Registrati {/*TODO: collegare Registrati al modal di registrazione*/}
                                </a>
                            </p>
                        </div>
                    </div>
                    {/*TODO: aggiungere invio email per recuperare la password*/}
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
