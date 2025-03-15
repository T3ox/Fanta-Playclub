import axios from "axios";
import { Player } from "./APIData";
import { API_BASE_URL } from "./apiConfig";

const getHomePageContent = async (): Promise<Player[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/load-players`);
        return response.data.APIResponse;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export default getHomePageContent;
