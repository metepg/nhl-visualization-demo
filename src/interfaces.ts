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

export type {
    GameEvent,
    GameData
}