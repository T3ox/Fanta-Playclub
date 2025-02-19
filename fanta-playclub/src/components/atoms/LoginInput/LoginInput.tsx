import React, { ChangeEvent } from "react";
import "./styles.scss";
import Props from "./types";
import "./styles.scss"

const LoginInput: React.FC<Props> = ({ type, placeholder, value, onChange }) => {
    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        onChange(evt.target.value);
    };

    return (
        <div className="mb-3">
            <input
                className="form-control"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
            />
        </div>
    );
};

export default LoginInput;
