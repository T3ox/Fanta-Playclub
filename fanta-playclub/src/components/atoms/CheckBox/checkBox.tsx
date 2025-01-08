import React from "react";

interface CheckboxProps {
  label: string;
  value: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, value, onChange }) => (
  <label>
    <input type="checkbox" checked={value} onChange={onChange} /> {label}
  </label>
);

export default Checkbox;
