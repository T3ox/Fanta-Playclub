import axios from "axios";
import { MatchRow } from "./APIData";
import { API_BASE_URL } from "./apiConfig";

const getMatchData = async (): Promise<MatchRow[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/get-match-data`);
        return response.data.APIResponse;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export default getMatchData;
