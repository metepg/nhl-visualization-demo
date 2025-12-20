export interface Root {
    copyright: string
    teams: Team[]
}

export interface Team {
    id: number
    franchiseId: number
    fullName: string;
    leagueId: number;
    rawTricode: string;
    triCode: string;
}

export type Player = {
    id: number;
    headshot: string;
    firstName: {
        default: string;
        [key: string]: string;
    };
    lastName: {
        default: string;
        [key: string]: string;
    };
    sweaterNumber: number;
    positionCode: string;
    shootsCatches: string;
    heightInInches: number;
    weightInPounds: number;
    heightInCentimeters: number;
    weightInKilograms: number;
    birthDate: string;
    birthCity: {
        default: string;
        [key: string]: string;
    };
    birthCountry: string;
    birthStateProvince?: {
        default: string;
        [key: string]: string;
    };
};

export type Roster = {
    forwards: Player[];
    defensemen: Player[];
    goalies: Player[];
};


export interface Venue {
    name: string
    link: string
    city: string
    timeZone: TimeZone
    id?: number
}

export interface TimeZone {
    id: string
    offset: number
    tz: string
}

export interface Division {
    id: number
    name: string
    nameShort: string
    link: string
    abbreviation: string
}

export interface Conference {
    id: number
    name: string
    link: string
}

export interface Franchise {
    franchiseId: number
    teamName: string
    link: string
}

export interface RosterObj {
    roster: PlayerInfo[]
    link: string
}

export interface PlayerInfo {
    person: Person
    jerseyNumber: string
    position: Position
}

export interface Person {
    id: number
    fullName: string
    link: string
}

export interface Position {
    code: string
    name: string
    type: string
    abbreviation: string
}
