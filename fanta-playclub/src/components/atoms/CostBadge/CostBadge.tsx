import React from "react";
import "./styles.scss";
import Props from "./types";

const CostBadge: React.FC<Props> = ({ cost }) => {
    return (
        <div className="cost-badge d-flex justify-content-center align-items-center">
            <span>{cost}</span>
        </div>
    );
};

export default CostBadge;
