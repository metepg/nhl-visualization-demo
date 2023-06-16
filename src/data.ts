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


const data: GameData[] = [
    {
        game: 1,
        date: 'OCT 14',
        team: "Carolina",
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
        team: "Carolina",
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
                goalType: null
            },
            {
                player: 16,
                period: 3,
                timeInSeconds: 1195,
                goalType: "EV-EN"
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
        team: "Carolina",
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
        team: "Carolina",
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

export default data;