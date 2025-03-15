import axios from "axios";
import { Player } from "./APIData";
const usingMock = false;
const BASE_PATH_MOCK = "http://localhost:3000/load-players";
const TRUE_PATH =
    "https://fantaplayclub-server-mock-kr01sffba-t3oxs-projects.vercel.app/load-home-page";

const URL = usingMock ? BASE_PATH_MOCK : TRUE_PATH;

const getHomePageContent = async (): Promise<Player[]> => {
    try {
        const response = await axios.get(URL);
        return response.data.APIResponse;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export default getHomePageContent;
