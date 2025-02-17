import React, { useEffect, useState } from "react";
//import { homePageContents } from "../../../utils/LocalDB/homePageContents";
import Header from "../../organisms/Header/header";
import Vetrina from "../../organisms/Vetrina/vetrina";
import "./styles.scss";
import getHomePageContent from "../../../API/getHomePageContent";
import { HomePageVetrinaContent } from "../../../API/APIData";

const Home: React.FC = () => {
    const [data, setData] = useState<HomePageVetrinaContent[]>([]);

    useEffect(()=> {
        const getData = async () => {
            const data: HomePageVetrinaContent[] = await getHomePageContent();
            setData(data);
        }

        
        getData();
    }, [])

    return (
        <>
            <Header height="60svh" heightLg="90svh" image="/images/chillGuy.jpg" />
            {/*homePageContents.map((vetrinaContent, index) => (
                <Vetrina
                    type={vetrinaContent.type}
                    text={vetrinaContent.title}
                    description={vetrinaContent.content}
                    image={vetrinaContent.img}
                />
            ))*/}

            {data.map((vetrinaContent, index) => (
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

