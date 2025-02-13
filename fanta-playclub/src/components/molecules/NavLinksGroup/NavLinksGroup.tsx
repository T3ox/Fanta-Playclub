import NavLink from "../../atoms/NavLink/NavLink";
import "./styles.scss";
import Props from "./types";

const NavLinksGroup: React.FC<Props> = ({ links, className }) => {
    return (
        <ul className={`navbar-nav navbar-link ${className}`}>
            {links.map((link) => (
                <NavLink url={link.url} displayName={link.displayName} />
            ))}
        </ul>
    );
};

export default NavLinksGroup;
