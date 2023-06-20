import {Team} from "./interfaces.ts";

interface GameData {
    game: number;
    date: string;
    team: string;
    events: Event[];
}

interface Event {
    player?: number;
    period: number;
    timeInSeconds: number;
    goalType?: string | null;
}

const teams: Team[] = [
    { name: 'Anaheim Ducks', players: ["All players", '9 Teemu Selänne'] },
    { name: 'Arizona Coyotes', players: ["All players", '22 Keith Tkachuk'] },
    { name: 'Boston Bruins', players: ["All players", '34 Brendan Shanahan'] },
    { name: 'Buffalo Sabres', players: ["All players", '1 Tommy Salo'] },
    { name: 'Calgary Flames', players: ["All players",'13 Eric Lindroos'] },
    { name: 'Carolina Hurricanes', players: ["All players", "18 Jack Drury", "21 Derek Stepan", "24 Seth Jarvis", "71 Jesper Fast", "82 Jesperi Kotkaniemi", "86 Teuvo Teräväinen", "88 Martin Necas",] },
];

const gameData: GameData[] = [
    {
        game: 1,
        date: 'OCT 14',
        team: "Carolina Hurricanes",
        events: [
            {
                player: 88,
                period: 3,
                timeInSeconds: 152,
                goalType: null
            },
            {
                period: 1,
                timeInSeconds: 1109,
                goalType: null
            },
            {
                period: 2,
                timeInSeconds: 464,
                goalType: null
            },
            {
                period: 2,
                timeInSeconds: 744,
                goalType: null
            }
        ]
    },
    {
        game: 2,
        date: 'OCT 17',
        team: "Carolina Hurricanes",
        events: [
            {
                player: 21,
                period: 1,
                timeInSeconds: 125,
                goalType: "PP"
            },
            {
                player: 77,
                period: 1,
                timeInSeconds: 456,
                goalType: null
            },
            {
                player: 72,
                period: 1,
                timeInSeconds: 1120,
                goalType: null
            },
            {
                period: 3,
                timeInSeconds: 18,
                goalType: "PP"
            },
            {
                player: 18,
                period: 3,
                timeInSeconds: 1195,
                goalType: "EN"
            },
            {
                period: 2,
                timeInSeconds: 744,
                goalType: null
            },
            {
                period: 3,
                timeInSeconds: 732,
                goalType: null
            }
        ]
    },
    {
        game: 3,
        date: 'OCT 19',
        team: "Carolina Hurricanes",
        events: [
            {
                player: 82,
                period: 1,
                timeInSeconds: 37,
                goalType: null
            },
            {
                player: 71,
                period: 1,
                timeInSeconds: 96,
                goalType: "PP"
            },
            {
                player: 22,
                period: 2,
                timeInSeconds: 158,
                goalType: null
            },
            {
                player: 86,
                period: 2,
                timeInSeconds: 576,
                goalType: "PP"
            },
            {
                player: 72,
                period: 3,
                timeInSeconds: 869,
                goalType: null
            },
            {
                period: 2,
                timeInSeconds: 744,
                goalType: null
            }
        ]
    },
    {
        game: 4,
        date: 'OCT 23',
        team: "Carolina Hurricanes",
        events: [
            {
                player: 21,
                period: 1,
                timeInSeconds: 646,
                goalType: "PP"
            },
            {
                player: 86,
                period: 1,
                timeInSeconds: 809,
                goalType: "SH"
            },
            {
                player: 86,
                period: 2,
                timeInSeconds: 1021,
                goalType: "PP"
            },
            {
                player: 24,
                period: 3,
                timeInSeconds: 652,
                goalType: "PP"
            }
        ]
    }
];

export default {gameData, teams};