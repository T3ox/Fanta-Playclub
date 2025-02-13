import React from "react";
import Props from "./types";
import { UserProvider } from "./User";


export const AppProvider = React.memo(({ children }: Props) => {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    );
});
