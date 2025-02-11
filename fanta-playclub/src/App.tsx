import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/components/pages/Home";
import { AppProvider } from "./utils/context";

const App = () => {
    return (
        <Router>
            <AppProvider>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </AppProvider>
        </Router>
    );
};

export default App;
