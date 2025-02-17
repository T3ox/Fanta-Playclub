import React, { useState } from "react";
import LoginInput from "../../atoms/LoginInput/InputLogin";

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        //logica di visualizzazione del form (temporaneo)
        console.log("Email:", email);
        console.log("Password:", password);
    };

    const isFormValid = email.trim() !== "" && password.trim() !== "";

    return (
        <form onSubmit={handleSubmit}>
            <LoginInput
                type="email"
                placeholder="Email"
                value={email}
                onChange={setEmail} 
            />
            <LoginInput
                type="password"
                placeholder="Password"
                value={password}
                onChange={setPassword} 
            />
            <button type="submit" className="btn btn-primary" disabled={!isFormValid}>
                Login
            </button>
        </form>
    );
};

export default LoginForm;
