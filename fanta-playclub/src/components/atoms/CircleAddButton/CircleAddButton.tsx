import "./styles.scss";
import Props from "./types";
const CircleAddButton: React.FC<Props> = ({ handleClick }) => {
    return (
        <button className="circle-button-wrapper" onClick={() => handleClick()}>
            <div className="circle-button btn d-flex justify-content-center align-items-center"></div>
        </button>
    );
};

export default CircleAddButton;
