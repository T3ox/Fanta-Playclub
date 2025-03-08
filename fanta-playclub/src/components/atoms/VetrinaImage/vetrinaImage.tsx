import React from "react";
import "./style.scss";
import VetrinaImageProps from "./types";

const VetrinaImage: React.FC<VetrinaImageProps> = ({ imgSrc, alt }) => {
    return (
        <>
            <img src={imgSrc} alt={alt} className="image-vetrina" />
        </>
    );
};

export default VetrinaImage;
