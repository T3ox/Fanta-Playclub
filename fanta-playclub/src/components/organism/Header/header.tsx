import  HeaderProps  from "./types";
import "./style.scss";

interface CustomCSSProperties extends React.CSSProperties {
    "--height"?: string;
    "--heightLg"?: string;
}

const Header: React.FC<HeaderProps> = ({ height, heightLg, image }) => {
    const customStyles: CustomCSSProperties = {
        "--height": height,
        "--heightLg": heightLg,
    };

    return (
        <header className="header" style={customStyles}>
            <img
                src={image}
                alt="Banner"
                className="banner-img"
            />
        </header>
    );
};

export default Header;
