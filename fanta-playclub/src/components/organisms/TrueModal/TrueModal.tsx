import FiltersBar from "../FiltersBar/FiltersBar";
import PlayersGrid from "../PlayerGrid/playerGrid";
import "./styles.scss";
import Props from "./types";

const TrueModal: React.FC<Props> = ({ handleClick, showModal }) => {
    return (
        <div
            className={`modal fade ${showModal ? "show" : " "}`}
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header border-bottom-0">
                        <h5 className="modal-title" id="staticBackdroplabel">
                            Cart
                        </h5>
                        <button
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={handleClick}
                        ></button>
                    </div>
                    <div className="modal-body d-flex">
                        <div className="filters">
                            <FiltersBar />
                        </div>
                        <div className="content">
                            <PlayersGrid />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrueModal;
