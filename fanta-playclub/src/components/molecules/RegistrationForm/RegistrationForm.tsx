import React, { useState } from "react";
import LoginInput from "../../atoms/LoginInput/LoginInput";
import Props from "./types";
import "./styles.scss"

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<Props>({
    username: "",
    email: "",
    password: "",
    verifyPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password === formData.verifyPassword) {
      console.log("Registrazione completata con successo");
    } else {
      console.log("Le password non corrispondono");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <LoginInput
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(value) => setFormData({ ...formData, username: value })}
      />
      <LoginInput
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(value) => setFormData({ ...formData, email: value })}
      />
      <LoginInput
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(value) => setFormData({ ...formData, password: value })}
      />
      <LoginInput
        type="password"
        placeholder="Verifica Password"
        value={formData.verifyPassword}
        onChange={(value) => setFormData({ ...formData, verifyPassword: value })}
      />
      <button type="submit" className="btn btn-primary">
        Registrati
      </button>
    </form>
  );
};

export default RegisterForm;
