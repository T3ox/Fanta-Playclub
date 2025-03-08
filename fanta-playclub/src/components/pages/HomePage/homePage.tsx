import React, { useEffect, useState } from "react";
//import { homePageContents } from "../../../utils/LocalDB/homePageContents";
import { HomePageVetrinaContent } from "../../../API/APIData";
import getHomePageContent from "../../../API/getHomePageContent";
import Header from "../../organisms/Header/header";
import Vetrina from "../../organisms/Vetrina/vetrina";
import "./styles.scss";

const Home: React.FC = () => {
    const [data, setData] = useState<HomePageVetrinaContent[]>([]);

    useEffect(() => {
        const getData = async () => {
            const data: HomePageVetrinaContent[] = await getHomePageContent();
            setData(data);
        };

        getData();
    }, []);

    return (
        <>
            <Header height="60svh" heightLg="90svh" image="/images/chillGuy.jpg" />

            <div className="vetrina-container">
                {data.map((vetrinaContent, index) => {
                    const { type, title, content, list, moreContent, image } =
                        vetrinaContent;

                    return (
                        <Vetrina
                            type={type}
                            title={title}
                            content={content}
                            list={list}
                            moreContent={moreContent}
                            image={image}
                            key={index}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Home;
