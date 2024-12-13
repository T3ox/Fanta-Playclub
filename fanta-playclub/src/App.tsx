import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { useCookies } from "react-cookie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import CookieNotice from "./utils/Cookies/CookiesNotice";
import Layout from "./utils/Layout/Layout";

const App = () => {
    const [cookies] = useCookies(["cookieConsent"]);
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                {!cookies.cookieConsent && <CookieNotice />}
            </Layout>
        </BrowserRouter>
    );
};

export default App;
