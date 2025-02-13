import Props from "./types";

const Button: React.FC<Props> = ({ text, handle, className, children }) => {
    return (
        <>
            <button className={className} onClick={handle}>
                {text}
                {children}
            </button>
        </>
    );
};

export default Button;
