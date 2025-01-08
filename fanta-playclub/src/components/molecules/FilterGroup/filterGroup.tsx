import React from "react";
import Checkbox from "../../atoms/CheckBox/checkBox";
import Input from "../../atoms/TextInput/textImput";
import SliderPrezzo from "../../atoms/SliderPrezzo/sliderPrezzo";
import "./filterGroup.css";

interface Filters {
  nickname: string;
  ruoli: string[];
  salalan: string;
  costo: number;
}

interface FilterGroupProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  ruoli: string[];
}

const FilterGroup: React.FC<FilterGroupProps> = ({ filters, setFilters, ruoli }) => {
  return (
    <div className="sidebar">
      <h3>FILTRI</h3>
      <div className="filter-section">
        <label>Nickname:</label>
        <Input
          placeholder="Nickname"
          value={filters.nickname}
          onChange={(e) => setFilters({ ...filters, nickname: e.target.value })}
        />
      </div>
      <div className="filter-section">
        <label>Ruoli:</label>
        {ruoli.map((ruolo) => (
          <Checkbox
            key={ruolo}
            label={ruolo}
            value={filters.ruoli.includes(ruolo)}
            onChange={() => {
              const newRuoli = filters.ruoli.includes(ruolo)
                ? filters.ruoli.filter((r) => r !== ruolo)
                : [...filters.ruoli, ruolo];
              setFilters({ ...filters, ruoli: newRuoli });
            }}
          />
        ))}
      </div>
      <div className="filter-section">
        <label>Sala LAN:</label>
        <Input
          placeholder="Sala LAN"
          value={filters.salalan}
          onChange={(e) => setFilters({ ...filters, salalan: e.target.value })}
        />
      </div>
      <div className="filter-section">
        <label>Prezzo:</label>
        <SliderPrezzo
          min={0}
          max={10}
          value={filters.costo}
          onChange={(e) => setFilters({ ...filters, costo: parseInt(e.target.value) })}
        />
        <p className="price-label">Max: {filters.costo} punti</p>
      </div>
    </div>
  );
};

export default FilterGroup;
