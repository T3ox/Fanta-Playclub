import React from "react";
import './textinput.css'

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => (
  <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
);

export default Input;
