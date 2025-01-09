import React from "react";
import { UserProvider } from "./User";
import Props from "./types";

export const AppProvider = React.memo(({ children }: Props) => {
    return <UserProvider>{children}</UserProvider>;
});
