import React from "react";
import { homePageContents } from "../../../utils/LocalDB/homePageContents";
import Header from "../../organism/Header/header";
import Vetrina from "../../organism/Vetrina/vetrina";
import "./styles.scss";

const Home: React.FC = () => {
    return (
        <>
            <Header height="60svh" heightLg="90svh" image="/images/chillGuy.jpg" />
            {homePageContents.map((vetrinaContent, index) => (
                <Vetrina
                    type=""
                    text={vetrinaContent.title}
                    description={vetrinaContent.content}
                    image={vetrinaContent.img}
                />
            ))}
        </>
    );
};

export default Home;
