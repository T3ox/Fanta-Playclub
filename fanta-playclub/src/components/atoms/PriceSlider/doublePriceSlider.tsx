import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@mui/material";
import "./doublePriceSlider.css"

interface DoubleSliderProps {
  minValue: number;
  maxValue: number;
  setMinValue: (value: number) => void;
  setMaxValue: (value: number) => void;
}

const DoubleSlider: React.FC<DoubleSliderProps> = ({ minValue, maxValue, setMinValue, setMaxValue }) => {
  const [values, setValues] = useState<number[]>([minValue, maxValue]);

  useEffect(() => {
    setValues([minValue, maxValue]);
  }, [minValue, maxValue]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setValues(newValue);
      setMinValue(newValue[0]);
      setMaxValue(newValue[1]);
    }
  };

  return (
    <div className="ContainerSlider">

      <Slider
        value={values}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={1}
        max={10}
        step={1}
      />

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
      >
      </motion.div>

    </div>
  );
};

export default DoubleSlider;