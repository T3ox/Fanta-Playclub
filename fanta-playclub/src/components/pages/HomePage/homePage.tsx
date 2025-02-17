import React from "react";
import { homePageContents } from "../../../utils/LocalDB/homePageContents";
import Header from "../../organisms/Header/header";
import Vetrina from "../../organisms/Vetrina/vetrina";
import "./styles.scss";

const Home: React.FC = () => {
    return (
        <>
            <Header height="60svh" heightLg="90svh" image="/images/chillGuy.jpg" />
            {homePageContents.map((vetrinaContent, index) => (
                <Vetrina
                    type={vetrinaContent.type}
                    text={vetrinaContent.title}
                    description={vetrinaContent.content}
                    image={vetrinaContent.img}
                />
            ))}
        </>
    );
};

export default Home;

