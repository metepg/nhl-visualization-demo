import axios from "axios";
import {Team} from "../interfaces/Teams.ts";

const url = "https://statsapi.web.nhl.com/api/v1";
export const getTeamData = async (): Promise<Team[]> => {
    try {
        const response = await axios.get(`${url}/teams?expand=team.roster`);
        return response.data?.teams || [];
    } catch (error) {
        console.error('Error fetching team data:', error);
        return [];
    }
};
