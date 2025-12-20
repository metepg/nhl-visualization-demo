import {Player} from "../interfaces/Teams.ts";
import {Filters} from "../interfaces/CustomData.ts";

export const GOAL_TYPE: string[] = ['All goals', 'Power-play', 'Short-handed', 'Empty-net', 'Game-winning'];
export const SEASON: string[] = ['Regular Season 2022-23', 'Post-Season 2022-23'];

export const ALL_PLAYERS_OBJECT: Player = {
    id: 999,
    headshot: '',
    firstName: { default: 'All' },
    lastName: { default: 'Players' },
    sweaterNumber: 999,
    positionCode: '',
    shootsCatches: '',
    heightInInches: 0,
    weightInPounds: 0,
    heightInCentimeters: 0,
    weightInKilograms: 0,
    birthDate: '',
    birthCity: { default: '' },
    birthCountry: '',
    // Optional fields like birthStateProvince can be omitted if they're not required
};

export const DEFAULT_FILTERS: Filters = {
    team: null,
    player: 999, // Value for all players
    season: SEASON[0],
    goaltypefor: GOAL_TYPE[0],
    goaltypeagainst: GOAL_TYPE[0]

}
export const TABLE_HEADERS: {text: string, width: string}[] = [
    {text: 'Date', width: '60px'},
    {text: 'Game', width: '75px'},
    {text: '1st period', width: '223px'},
    {text: '2nd period', width: '223px'},
    {text: '3rd period', width: '223px'},
    {text: 'OT', width: '58px'},
    {text: 'SO', width: '25px'},
    {text: 'Result', width: '62px'},
    {text: '+', width: '30px'}
];