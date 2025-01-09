import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Home from "./components/pages/Home";
import LeaderBoard from "./components/pages/LeaderBoard";
import Layout from "./utils/Layout/Layout";
import { AppProvider } from "./utils/context";

const App = () => {
    return (
        <BrowserRouter>
            <AppProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<LeaderBoard />} />
                    </Routes>
                </Layout>
            </AppProvider>
        </BrowserRouter>
    );
};

export default App;
