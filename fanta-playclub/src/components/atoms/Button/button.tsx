import Props from "./types";

const Button: React.FC<Props> = ({ text, handle, className, children, isActive }) => {
    return (
        <>
            <button
                className={`${className} ${isActive ? "active" : ""}`}
                onClick={handle}
            >
                {text}
                {children}
            </button>
        </>
    );
};

export default Button;
