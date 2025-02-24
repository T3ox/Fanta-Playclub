import React, { useEffect, useState } from "react";
import "./styles.scss";
import getHomePageContent from "../../../API/getHomePageContent";
import { HomePageVetrinaContent } from "../../../API/APIData";

const Home: React.FC = () => {
    const [data, setData] = useState<HomePageVetrinaContent[]>([]);

    useEffect(() => {
        const getData = async () => {
            const data: HomePageVetrinaContent[] = await getHomePageContent();
            setData(data);
        };

        getData();
    }, []);

    // Calcolatore di punti
    

    return <>{console.log(data)}</>;
};

export default Home;
