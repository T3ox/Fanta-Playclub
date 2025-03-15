import axios from "axios";
import { MatchRow } from "./APIData";
const usingMock = false;
const BASE_PATH_MOCK = "http://localhost:3000/get-match-data";
const TRUE_PATH = "https://fantaplayclub-server-mock.vercel.app/get-match-data";

const URL = usingMock ? BASE_PATH_MOCK : TRUE_PATH;

const getHomePageContent = async (): Promise<MatchRow[]> => {
    try {
        const response = await axios.get(URL);
        return response.data.APIResponse;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export default getHomePageContent;
