import React from "react";
import DoubleSlider from "../../atoms/PriceSlider/doublePriceSlider"; // Assicurati che il percorso sia corretto
import ButtonGrid from "../../molecules/ButtonGrid/buttonGrid";
import './filters.css'; 

interface FiltersProps {
  search: string;
  setSearch: (value: string) => void;
  minValue: number; 
  maxValue: number; 
  setMinValue: (value: number) => void; 
  setMaxValue: (value: number) => void; 
  roleFilter: string | null;
  setRoleFilter: (role: string | null) => void; // Updated to accept null
  teamFilter: string | null;
  setTeamFilter: (team: string | null) => void; // Updated to accept null
}

const Filters: React.FC<FiltersProps> = ({ 
  search, 
  setSearch, 
  minValue, 
  maxValue, 
  setMinValue, 
  setMaxValue, 
  roleFilter, 
  setRoleFilter, 
  teamFilter, 
  setTeamFilter 
}) => (
  <div className="filters-section">

    <h3>Filtro per nome</h3>
    <input 
      className="filter-input" 
      type="text" 
      placeholder="Cerca per nome" 
      value={search} 
      onChange={(e) => setSearch(e.target.value)} 
    />

    <h3>Filtro Prezzo</h3>
    <DoubleSlider 
      minValue={minValue} 
      maxValue={maxValue} 
      setMinValue={setMinValue} 
      setMaxValue={setMaxValue} 
    />

    <h3>Filtro Ruolo</h3>
    <ButtonGrid labels={["Top Laner", "Jungler", "Mid Laner", "ADC", "Support"]} onSelect={setRoleFilter} /> 
    
    <h3>Filtro Squadra</h3>
    <ButtonGrid labels={["Pc1", "Pc2", "Pc3", "Pc4"]} onSelect={setTeamFilter} /> 
  </div>
);

export default Filters;
