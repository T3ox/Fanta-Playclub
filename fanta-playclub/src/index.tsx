import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Elemento root non trovato! Controlla il file index.html.");
}

const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

reportWebVitals();
