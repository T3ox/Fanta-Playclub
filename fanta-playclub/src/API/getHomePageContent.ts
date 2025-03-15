import axios from "axios";
import { HomePageVetrinaContent } from "./APIData";
import { API_BASE_URL } from "./apiConfig";

const getHomePageContent = async (): Promise<HomePageVetrinaContent[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/load-home-page`);
        return response.data.APIResponse;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export default getHomePageContent;
