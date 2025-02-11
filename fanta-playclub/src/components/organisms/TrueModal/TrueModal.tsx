import Filters from "../Filters/Filters";
import "./styles.scss";
import Props from "./types";

const TrueModal: React.FC<Props> = ({ showModal }) => {
    return (
        <div
            className={`modal fade ${showModal ? "show" : " "}`}
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <Filters />
                    </div>
                    {/*<div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">
                            Save changes
                        </button>
                    </div>*/}
                </div>
            </div>
        </div>
    );
};

export default TrueModal;
