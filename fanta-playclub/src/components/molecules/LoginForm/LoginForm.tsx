import React, { useState } from "react";
import LoginInput from "../../atoms/LoginInput/LoginInput";
import "./styles.scss"

interface LoginFormProps {
    onClose: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Logica di visualizzazione del form (temporaneo)
        console.log("Email:", email);
        console.log("Password:", password);

        onClose();
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
            <div className="password-container">
                <LoginInput
                    type={showPassword ? "text" : "password"} // Cambia il tipo della password per renderla visibile
                    placeholder="Password"
                    value={password}
                    onChange={setPassword}
                />
                <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="toggle-password"
                >
                    {showPassword ? "Hide" : "Show"} {/*da mettere l'immagine dell'occhio, esistono le librerie*/}
                </button>
            </div>
            <button type="submit" className="btn btn-primary" disabled={!isFormValid}>
                Login
            </button>
        </form>
    );
};

export default LoginForm;
