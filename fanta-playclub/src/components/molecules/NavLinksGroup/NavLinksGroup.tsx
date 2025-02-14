import NavLink from "../../atoms/NavLink/NavLink";
import "./styles.scss";
import Props from "./types";

const NavLinksGroup: React.FC<Props> = ({ links, className }) => {
    return (
        <ul className={`navbar-nav navbar-link ${className}`}>
            {links.map((link, key) => (
                <div key={key}>
                    <NavLink url={link.url} displayName={link.displayName} />
                </div>
            ))}
        </ul>
    );
};

export default NavLinksGroup;
