import Props from "./types";

const Button: React.FC<Props> = ({ text, handle, className }) => {
    return (
        <>
            <button className={className} onClick={handle}>
                {text}
            </button>
        </>
    );
};

export default Button;
