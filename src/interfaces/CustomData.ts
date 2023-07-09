import {Team} from "./Teams.ts";

interface GameEvent {
    player?: number;
    timeInSeconds: number;
    goalType?: string | null;
    period: number;
}

interface GameData {
    date: string;
    game: number;
    team: string;
    events: GameEvent[];
}

interface Filters {
    team: Team;
    player: number;
    season: string;
    goaltypefor: string;
    goaltypeagainst: string;
}

interface Team2 {
    name: string;
    players: string[];
}


export type {
    Filters,
    GameEvent,
    GameData,
    Team2
}