import React from "react";
import { vetrina1, vetrina2, vetrina3 } from "../../../utils/vetrinaService";
import Vetrina from "../../organism/Vetrina/vetrina";
import Header from "../../organism/Header/header";
import Footer from "../../organism/Footer/footer";

const bannerURL: string = require("../../../utils/Images/chillGuy.jpg");

const Home: React.FC = () => {
    return (
        <>
            <Header
                height="60svh" 
                heightLg="100svh" 
                image={bannerURL}
                content={<h1>HomePage</h1>}
            />
            <Vetrina type="vetrina1" {...vetrina1} />
            <Vetrina type="vetrina2" {...vetrina2} />
            <Vetrina type="vetrina3" {...vetrina3} />
            <Footer />
        </>
    );
};

export default Home;