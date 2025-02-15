import React from "react";
import Header from "../../organism/Header/header";
import Vetrina from "../../organism/Vetrina/vetrina";
import "./styles.scss"
import { homePageContents } from "../../../utils/LocalDB/homePageContents";

const Home: React.FC = () => {
    return (
        <>
            <Header
                height="60svh"
                heightLg="100svh"
                image="/images/chillGuy.jpg"
            />
            {homePageContents.map((vetrinaContent, index)=>(
                <Vetrina type="" text={vetrinaContent.title} description={vetrinaContent.content} image={vetrinaContent.img} />
            ))}
        </>
    );
};

export default Home;
