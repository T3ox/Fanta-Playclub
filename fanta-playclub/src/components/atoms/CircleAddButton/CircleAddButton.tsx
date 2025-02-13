import "./styles.scss";
import Props from "./types";
const CircleAddButton: React.FC<Props> = ({ handleClick }) => {
    return (
        <button
            className="wrapper2"
            onClick={(e) => {
                const target = e.currentTarget as HTMLElement;
                const id = parseInt(target.dataset.id || "0", 10); // Leggi l'ID dal dataset
                handleClick(id);
            }}
        >
            <div className="btn d-flex justify-content-center align-items-center"></div>
        </button>
    );
};

export default CircleAddButton;
