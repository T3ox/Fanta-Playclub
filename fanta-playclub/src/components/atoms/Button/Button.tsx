import "./styles.scss";
import Props from "./types";

const Button: React.FC<Props> = ({ text, handle, className, children, isActive }) => {
    console.log("isactive", isActive);
    return (
        <>
            <button className={className} onClick={handle} disabled={!isActive}>
                {text}
                {children}
            </button>
        </>
    );
};

export default Button;
