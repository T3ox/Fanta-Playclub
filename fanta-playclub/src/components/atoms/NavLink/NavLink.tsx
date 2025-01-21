import "./styles.scss";
import Props from "./types";

const NavLink: React.FC<Props> = ({ text }) => {
    return (
        <>
            <li className="nav-item mx-2">
                <a className="nav-link" href="/menu">
                    {text}
                </a>
            </li>
        </>
    );
};

export default NavLink;
