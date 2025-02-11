import React from "react";
import { FilterProvider } from "./FiltersModal";
import Props from "./types";

export const AppProvider = React.memo(({ children }: Props) => {
    return <FilterProvider>{children}</FilterProvider>;
});
