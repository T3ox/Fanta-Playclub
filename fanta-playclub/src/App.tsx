import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Home from "./components/pages/Home";
import HomePage from "../src/components/pages/Home";
import TeamPage from "./components/pages/TeamPage";
import Layout from "./utils/Layout/Layout";
import { AppProvider } from "./utils/context";

const App = () => {
    return (
        <BrowserRouter>
            <AppProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/team" element={<TeamPage />} />
                    </Routes>
                </Layout>
            </AppProvider>
        </BrowserRouter>
    );
};

export default App;
