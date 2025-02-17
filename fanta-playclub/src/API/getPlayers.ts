import axios from 'axios';
import { Player } from './APIData';
const BASE_PATH_MOCK = "http://localhost:3000/load-players";


const getHomePageContent = async (): Promise<Player[]>=> {
    try {
        const response = await axios.get(BASE_PATH_MOCK)
        return response.data.APIResponse;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export default getHomePageContent;