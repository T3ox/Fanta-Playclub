import "./styles.scss";
import Props from "./types";

const NavLink: React.FC<Props> = ({ url, displayName }) => {
    return (
        <>
            <li className="nav-item my-1">
                <a className="nav-link" href={url}>
                    {displayName}
                </a>
            </li>
        </>
    );
};

export default NavLink;
