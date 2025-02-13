import "./styles.scss";
import Props from "./types";

const NavLink: React.FC<Props> = ({ text }) => {
    return (
        <>
            <li className="nav-item my-1">
                <a className="nav-link " href="/menu">
                    {text}
                </a>
            </li>
        </>
    );
};

export default NavLink;
