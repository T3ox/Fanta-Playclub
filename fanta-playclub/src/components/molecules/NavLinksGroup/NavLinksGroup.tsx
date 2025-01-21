import NavLink from "../../atoms/NavLink/NavLink";
import Props from "./types";
const NavLinksGroup: React.FC<Props> = ({ links }) => {
    return (
        <ul className="navbar-nav justify-content-start align-items-center fs-5 flex-grow-1 pe-3 ">
            {links.map((link) => (
                <NavLink text={link} />
            ))}
        </ul>
    );
};

export default NavLinksGroup;
