import React from "react";
import "./style.scss";

import Props from "./types";

const VetrinaText: React.FC<Props> = ({ title, content, list, moreContent }) => {
    return (
        <>
            {list.map((item, key) => (
                <div className="vetrina-text-container m-2" key={key}>
                    <h2 className="py-2">{title}</h2>
                    <span>{content}</span>
                    {list && item.title && <h3>{item.title}</h3>}
                    {item.content?.length > 0 && (
                        <ul className="d-flex flex-column align-items-center">
                            {item.content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </>
    );
};

export default VetrinaText;
