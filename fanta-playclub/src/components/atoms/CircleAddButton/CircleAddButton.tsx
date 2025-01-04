import "./styles.scss";
import Props from "./types";
const CircleAddButton: React.FC<Props> = ({ handleClick }) => {
    return (
        <div className="wrapper" onClick={handleClick}>
            <div className="btn d-flex justify-content-center align-items-center"></div>
        </div>
    );
};

export default CircleAddButton;
