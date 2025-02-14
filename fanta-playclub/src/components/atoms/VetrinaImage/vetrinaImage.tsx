import React from "react";
import  VetrinaImageProps  from "./types";
import "./style.scss"

const VetrinaImage: React.FC<VetrinaImageProps> = ({ imgSrc, alt }) => {
    return (
        <div className="d-flex justify-content-center">
            <img src={imgSrc} alt={alt} id="img-vetrina" />
        </div>
    );
};

export default VetrinaImage;
