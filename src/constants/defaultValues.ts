import {PlayerInfo} from "../interfaces/Teams.ts";

export const GOAL_TYPE: string[] = ['All goals', 'Power-play', 'Short-handed', 'Empty-net', 'Game-winning'];
export const SEASON: string[] = ['Regular Season 2022-23', 'Post-Season 2022-23'];
export const DEFAULT_GOAL_TYPE_AGAINST = GOAL_TYPE[0];
export const DEFAULT_GOAL_TYPE_FOR = GOAL_TYPE[0];
export const DEFAULT_PLAYER = 999; // Value for 'All players'
export const DEFAULT_SEASON: string = SEASON[0];
export const DEFAULT_TEAM_ID = 12;
export const ALL_PLAYERS_OBJECT: PlayerInfo = {
    person: {id: 999, fullName: 'All players',  link: ''},
    position: {code: '', type: '', abbreviation: '', name: ''},
    jerseyNumber: '999'
};