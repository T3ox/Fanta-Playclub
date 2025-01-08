import React from "react";

interface SliderPrezzoProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
}

const SliderPrezzo: React.FC<SliderPrezzoProps> = ({ value, onChange, min, max }) => (
  <input type="range" min={min} max={max} value={value} onChange={onChange} />
);

export default SliderPrezzo;
export {};