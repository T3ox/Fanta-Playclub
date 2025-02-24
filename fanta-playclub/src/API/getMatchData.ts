import axios from "axios";
import { MatchRow } from "./APIData";
const BASE_PATH_MOCK = "http://localhost:3000/get-match-data";

const getHomePageContent = async (): Promise<MatchRow[]> => {
    try {
        const response = await axios.get(BASE_PATH_MOCK);
        return response.data.APIResponse;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export default getHomePageContent;
