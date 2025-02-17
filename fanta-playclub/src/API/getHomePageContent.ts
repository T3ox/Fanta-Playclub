import axios from 'axios';
import { HomePageVetrinaContent } from './APIData';
const BASE_PATH_MOCK = "http://localhost:3000/load-home-page";


const getHomePageContent = async (): Promise<HomePageVetrinaContent[]>=> {
    try {
        const response = await axios.get(BASE_PATH_MOCK)
        return response.data.APIResponse;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export default getHomePageContent;