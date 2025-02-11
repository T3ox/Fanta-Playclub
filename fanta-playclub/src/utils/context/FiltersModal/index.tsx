import { createContext, useContext, useMemo, useState } from "react";
import Props from "../types";
import FilterContext from "./types";

// Crei un context per racchiudere i dati condivisi
const Context = createContext<FilterContext>({
    search: "",
    setSearch: () => {},
    minValue: 0,
    maxValue: 0,
    setMinValue: () => {},
    setMaxValue: () => {},
    roleFilter: null,
    //setRoleFilter: () => {},
    teamFilter: null,
    //setTeamFilter: () => {},
});

// Crei un provider per condividere il context
export const FilterProvider = ({ children }: Props) => {
    // Variabile impostata a LoL perchè sarà sempre la prima pagina che ti apre

    const FILTERSVALUES = {
        minimumCost: 1,
        maximumCost: 5,
    };

    const [search, setSearch] = useState("LoL");
    const [minValue, setMinValue] = useState(FILTERSVALUES.minimumCost);
    const [maxValue, setMaxValue] = useState(FILTERSVALUES.maximumCost);
    const [roleFilter, setRoleFilter] = useState(null);
    const [teamFilter, setTeamFilter] = useState(null);

    // valori da passare all'esterno, quindi tutte le variabili e metodi usati
    const MemorizedValue = useMemo(() => {
        const value: FilterContext = {
            search,
            setSearch,
            minValue,
            setMinValue,
            maxValue,
            setMaxValue,
            roleFilter,
            //setRoleFilter,
            teamFilter,
            //setTeamFilter,
        };
        return value;
    }, []);

    // Ritorni il Provider del context
    return (
        <Context.Provider value={MemorizedValue}>{children}</Context.Provider>
    );
};

export const useUser = (): FilterContext => useContext(Context);
