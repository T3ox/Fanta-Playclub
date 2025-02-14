import React from "react";
import { FilterProvider } from "./FiltersModal";
import Props from "./types";
import { UserProvider } from "./User";

export const AppProvider = React.memo(({ children }: Props) => {
    return (
        <UserProvider>
            <FilterProvider>{children}</FilterProvider>
        </UserProvider>
    );
});
