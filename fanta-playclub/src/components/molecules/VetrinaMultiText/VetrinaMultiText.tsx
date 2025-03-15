import "./styles.scss";
import Props from "./types";

const VetrinaMultiText: React.FC<Props> = ({ list }) => {
    const { title, content, image } = list;

    return (
        <div className="multi-vetrina d-flex flex-column align-items-center">
            <img src={image} alt="" className="multi-vetrina_image" />
            <h3 className="multi-vetrina_title">{title}</h3>
            <span className="multi-vetrina_subtitle">{content[0]}</span>
        </div>
    );
};

export default VetrinaMultiText;
