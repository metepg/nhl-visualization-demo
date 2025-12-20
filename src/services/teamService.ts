import axios, {AxiosResponse} from "axios";
import {Roster, Team} from "../interfaces/Teams.ts";

export const getTeamData = async (): Promise<Team[]> => {
    try {
        // const response: AxiosResponse = await axios.get(`${url}/teams?expand=team.roster`);
        const response: AxiosResponse = await axios.get(`http://localhost:3001/nhl-data`);
        const a = response.data.data.sort((a: Team, b: Team) => a.fullName.toUpperCase().localeCompare(b.fullName.toUpperCase()));
        console.log(a)
        return a;
    } catch (error) {
        throw new Error('Error fetching team data: ' + error);
    }
};

export const getPlayers = async (teamName: string): Promise<Roster> => {
    try {
        const response: AxiosResponse = await axios.get(`http://localhost:3001/players/${teamName}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching team data: ' + error);
    }
};
