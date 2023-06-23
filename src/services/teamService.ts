import axios from "axios";

const url = "https://statsapi.web.nhl.com/api/v1";

export const getTeamData = () => axios.get(`${url}/teams?expand=team.roster`);