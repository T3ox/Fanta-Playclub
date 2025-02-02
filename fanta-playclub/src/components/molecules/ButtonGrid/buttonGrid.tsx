import React, { useState } from "react";
import Button from "../../atoms/Button/button";

const ButtonGrid: React.FC<{ labels: string[], onSelect: (label: string | null) => void }> = ({ labels, onSelect }) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (label: string) => {
    if (activeButton === label) {
      setActiveButton(null); 
      onSelect(null); 
    } else {
      setActiveButton(label);
      onSelect(label);
    }
  };

  return (
  
    <div className="button-grid">

      {labels.map((label) => (
        <Button key={label} label={label} isActive={activeButton === label} onClick={() => handleButtonClick(label)} />
      ))}
      
    </div>
  );
};

export default ButtonGrid;
