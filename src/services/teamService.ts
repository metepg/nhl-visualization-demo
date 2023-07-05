import axios, {AxiosResponse} from "axios";
import {Team} from "../interfaces/Teams.ts";

const url = "https://statsapi.web.nhl.com/api/v1";
export const getTeamData = async (): Promise<Team[]> => {
    try {
        const response: AxiosResponse = await axios.get(`${url}/teams?expand=team.roster`);
        return response.data.teams.sort((a: Team, b: Team) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()));
    } catch (error) {
        throw new Error('Error fetching team data: ' + error);
    }
};
