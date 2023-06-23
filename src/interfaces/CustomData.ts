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
    team?: string | null;
    player?: string | null;
    season?: string | null;
    goaltypefor?: string | null;
    goaltypeagainst?: string | null;
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