import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/components/pages/Home";
import PlayersPage from "./components/pages/PlayerPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/players/:game" element={<PlayersPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
