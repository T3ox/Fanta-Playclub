import Props from "./types";

const VetrinaMultiText: React.FC<Props> = ({ list }) => {
    const { title, content } = list;

    return (
        <div style={{ color: "black" }}>
            <h3>{title}</h3>
            <span>{content[0]}</span>
        </div>
    );
};

export default VetrinaMultiText;
