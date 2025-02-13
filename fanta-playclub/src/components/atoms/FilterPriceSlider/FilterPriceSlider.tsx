import { Slider } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import Props from "./types";

const FilterPriceSlider: React.FC<Props> = ({
    minValue,
    maxValue,
    setMinValue,
    setMaxValue,
    title,
}) => {
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
        <div className="filter-section">
            <span>{title}</span>

            <div className="container-slider">
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
                ></motion.div>
            </div>
        </div>
    );
};

export default FilterPriceSlider;
