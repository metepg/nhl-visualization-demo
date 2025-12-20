import teams from '../../demo-data/teamData.json';
import { AxiosResponse, HttpStatusCode, InternalAxiosRequestConfig } from 'axios';
import { TeamResponse } from "../models/liiga/Team.ts";

export const getTeamData = async (): Promise<AxiosResponse<TeamResponse>> => {
  return {
    data: teams,
    status: HttpStatusCode.Ok.valueOf(),
    statusText: 'OK',
    headers: {},
    config: {} as InternalAxiosRequestConfig,
  };
};
