import {
    filterGoals,
    formatDate,
    groupGoalsByPeriod,
    goalTypeShort,
    timeInSeconds,
    goalTypeLong,
    sortGoals, addCurrentScores
} from "./helpers.ts";
import {Goal, Teams} from "../interfaces/GameData.ts";
import {Filters} from "../interfaces/CustomData.ts";

describe('formatDate', () => {
    it('formats the date correctly', () => {
        const dateString = '2023-06-26';
        const formattedDate = formatDate(dateString);
        expect(formattedDate).toEqual('JUN 26');
    });

    it('handles different date inputs', () => {
        const dateString = '2023-12-31';
        const formattedDate = formatDate(dateString);
        expect(formattedDate).toEqual('DEC 31');
    });
});

describe('timeInSeconds', () => {
    it('returns 0 when minutes and seconds are not provided', () => {
        expect(timeInSeconds(undefined, undefined)).toBe(0);
    });

    it('returns 0 when minutes is 0 and seconds are not provided', () => {
        expect(timeInSeconds(0, undefined)).toBe(0);
    });

    it('returns the correct number of seconds when only minutes are provided', () => {
        expect(timeInSeconds(5, undefined)).toBe(300); // 5 minutes = 300 seconds
    });

    it('returns the correct number of seconds when only seconds are provided', () => {
        expect(timeInSeconds(undefined, 30)).toBe(30); // 30 seconds
    });

    it('returns the correct number of seconds when both minutes and seconds are provided', () => {
        expect(timeInSeconds(3, 45)).toBe(225); // 3 minutes + 45 seconds = 225 seconds
    });
});
describe('shortenGoalTypeName', () => {
    it('returns an empty string when value is null', () => {
        expect(goalTypeShort(null)).toBe('');
    });

    it('returns an empty string when value is undefined', () => {
        expect(goalTypeShort(undefined)).toBe('');
    });

    it('returns the correct shortened goal type name when value is valid', () => {
        expect(goalTypeShort('AllGoals')).toBe('AG');
        expect(goalTypeShort('powerplay')).toBe('PPG');
        expect(goalTypeShort('ShorThanded')).toBe('SHG');
        expect(goalTypeShort('EMPTYNET')).toBe('EN');
        expect(goalTypeShort('gamewinning')).toBe('GW');
    });

    it('returns an empty string when the value does not match any known goal type', () => {
        expect(goalTypeShort('InvalidGoalType')).toBe('');
        expect(goalTypeShort('')).toBe('');
    });
});

describe('groupGoalsByPeriod', () => {
    it('returns an object with empty arrays for all periods when goals array is empty', () => {
        const emptyGoals: Goal[] = [];
        const expectedPeriods = {
            period1: [],
            period2: [],
            period3: [],
            overtime: [],
        };

        expect(groupGoalsByPeriod(emptyGoals)).toEqual(expectedPeriods);
    });

    it('correctly groups goals by period', () => {
        const goals: Goal[] = [
            { period: '1', scorer: { player: 'Player 1', playerId: 1 }, team: 'Team A', showGoal: false },
            { period: '2', scorer: { player: 'Player 2', playerId: 2 }, team: 'Team B', showGoal: false },
            { period: '1', scorer: { player: 'Player 3', playerId: 3 }, team: 'Team A', showGoal: true },
            { period: '3', scorer: { player: 'Player 4', playerId: 4 }, team: 'Team B', showGoal: true },
            { period: 'OT', scorer: { player: 'Player 5', playerId: 5 }, team: 'Team A', showGoal: false },
        ];
        const expectedPeriods = {
            period1: [
                { period: '1', scorer: { player: 'Player 1', playerId: 1 }, team: 'Team A', showGoal: false },
                { period: '1', scorer: { player: 'Player 3', playerId: 3 }, team: 'Team A', showGoal: true },
            ],
            period2: [
                { period: '2', scorer: { player: 'Player 2', playerId: 2 }, team: 'Team B', showGoal: false },
            ],
            period3: [
                { period: '3', scorer: { player: 'Player 4', playerId: 4 }, team: 'Team B', showGoal: true },
            ],
            overtime: [
                { period: 'OT', scorer: { player: 'Player 5', playerId: 5 }, team: 'Team A', showGoal: false },
            ],
        };

        expect(groupGoalsByPeriod(goals)).toEqual(expectedPeriods);
    });
});

describe('filterGoals', () => {
    it('sets filtered property to true for all goals when filters dont apply', () => {
        const goals: Goal[] = [
            { period: '1', scorer: { player: 'Player 1', playerId: 1 }, team: 'TMA'},
            { period: '2', scorer: { player: 'Player 2', playerId: 2 }, team: 'TMB'},
            { period: '1', scorer: { player: 'Player 3', playerId: 3 }, team: 'TMA'},
            { period: '3', scorer: { player: 'Player 4', playerId: 4 }, team: 'TMB'},
            { period: 'OT', scorer: { player: 'Player 5', playerId: 5 }, team: 'TMA'},
        ];
        const filters: Filters = {
            team: {
                id: 1,
                name: 'Team A',
                teamName: 'Team A',
                abbreviation: 'TMA',
            },
            goaltypefor: 'All goals',
            goaltypeagainst: 'All goals',
            player: 999,
        };

        const filteredGoals: Goal[] = filterGoals(goals, filters);

        filteredGoals.forEach((goal: Goal) => {
            expect(goal.showGoal).toBe(true);
        });
    });

    it('correctly filters goals based on the provided filters', () => {
        const goals: Goal[] = [
            { period: '1', scorer: { player: 'Player 1', playerId: 1 }, team: 'TMA'},
            { period: '2', scorer: { player: 'Player 2', playerId: 8 }, team: 'TMB'},
            { period: '1', scorer: { player: 'Player 2', playerId: 2 }, team: 'TMA'},
            { period: '3', scorer: { player: 'Player 4', playerId: 4 }, team: 'TMB'},
            { period: 'OT', scorer: { player: 'Player 2', playerId: 2 }, team: 'TMA'},
        ];
        const filters: Filters = {
            team: {
                id: 1,
                name: 'Team A',
                teamName: 'Team A',
                abbreviation: 'TMA',
            },
            goaltypefor: 'All goals',
            goaltypeagainst: 'All goals',
            player: 2,
        };

        const filteredGoals: Goal[] = filterGoals(goals, filters);

        expect(filteredGoals[0].showGoal).toBe(false);
        expect(filteredGoals[1].showGoal).toBe(true);
        expect(filteredGoals[2].showGoal).toBe(true); // Player 2 matches the filter
        expect(filteredGoals[3].showGoal).toBe(true);
        expect(filteredGoals[4].showGoal).toBe(true);  // Player 2 matches the filter
    });
});

describe('goalTypeLong', () => {
    it('should return an empty string if the value is falsy', () => {
        expect(goalTypeLong(null)).toBe('');
        expect(goalTypeLong(undefined)).toBe('');
        expect(goalTypeLong('')).toBe('');
    });

    it('should return the corresponding long goal type for valid input', () => {
        const testData: [string, string][] = [
            ['PPG', 'POWER-PLAY -GOAL'],
            ['SHG', 'SHORT-HANDED -GOAL'],
            ['EN', 'EMPTY NET'],
            ['GW', 'GAME-WINNING -GOAL'],
        ];

        testData.forEach(([input, expected]) => {
            expect(goalTypeLong(input)).toBe(expected);
        });
    });

    it('should handle uppercase and lowercase goal types', () => {
        expect(goalTypeLong('ppg')).toBe('POWER-PLAY -GOAL');
        expect(goalTypeLong('shg')).toBe('SHORT-HANDED -GOAL');
        expect(goalTypeLong('en')).toBe('EMPTY NET');
        expect(goalTypeLong('gw')).toBe('GAME-WINNING -GOAL');
    });

    it('should return an empty string for an unknown goal type', () => {
        expect(goalTypeLong('XYZ')).toBe('');
        expect(goalTypeLong('ABC')).toBe('');
    });
});

describe('sortGoals', () => {
    it('should sort goals in ascending order based on period, min, and sec', () => {
        const goals = [
            { team: 'Team A', period: '2', min: 30, sec: 0, scorer: { player: 'Player 1', playerId: 1 } },
            { team: 'Team B', period: '1', min: 45, sec: 10, scorer: { player: 'Player 2', playerId: 2 } },
            { team: 'Team C', period: '3', min: 0, sec: 30, scorer: { player: 'Player 3', playerId: 3 } },
        ];

        const sortedGoals = sortGoals(goals);

        expect(sortedGoals).toEqual([
            { team: 'Team B', period: '1', min: 45, sec: 10, scorer: { player: 'Player 2', playerId: 2 } },
            { team: 'Team A', period: '2', min: 30, sec: 0, scorer: { player: 'Player 1', playerId: 1 } },
            { team: 'Team C', period: '3', min: 0, sec: 30, scorer: { player: 'Player 3', playerId: 3 } },
        ]);
    });

    it('should handle goals with missing min and sec values', () => {
        const goals = [
            { team: 'Team A', period: '2', min: 30, scorer: { player: 'Player 1', playerId: 1 } },
            { team: 'Team B', period: '1', sec: 10, scorer: { player: 'Player 2', playerId: 2 } },
            { team: 'Team C', period: '3', scorer: { player: 'Player 3', playerId: 3 } },
        ];

        const sortedGoals = sortGoals(goals);

        expect(sortedGoals).toEqual([
            { team: 'Team B', period: '1', sec: 10, scorer: { player: 'Player 2', playerId: 2 } },
            { team: 'Team A', period: '2', min: 30, scorer: { player: 'Player 1', playerId: 1 } },
            { team: 'Team C', period: '3', scorer: { player: 'Player 3', playerId: 3 } },
        ]);
    });
});

describe('addCurrentScores', () => {
    it('should add current scores to goals based on team abbreviations', () => {
        const goals = [
            { team: 'ANA', period: '1', min: 10, sec: 30, scorer: { player: 'Player 1', playerId: 1 } },
            { team: 'ANA', period: '2', min: 5, sec: 45, scorer: { player: 'Player 2', playerId: 2 } },
            { team: 'LAK', period: '2', min: 15, sec: 20, scorer: { player: 'Player 3', playerId: 3 } },
        ];

        const teams: Teams = {
            home: {
                abbreviation: 'ANA',
                id: 1,
                locationName: 'Anaheim',
                shortName: 'Ducks',
                teamName: 'Anaheim Ducks',
            },
            away: {
                abbreviation: 'LAK',
                id: 2,
                locationName: 'Los Angeles',
                shortName: 'Kings',
                teamName: 'Los Angeles Kings',
            },
        };

        const scoredGoals: Goal[] = addCurrentScores(goals, teams);

        expect(scoredGoals).toEqual([
            {
                team: 'ANA',
                period: '1',
                min: 10,
                sec: 30,
                scorer: { player: 'Player 1', playerId: 1 },
                homeScore: 1,
                awayScore: 0,
                currentGoal: 1,
            },
            {
                team: 'ANA',
                period: '2',
                min: 5,
                sec: 45,
                scorer: { player: 'Player 2', playerId: 2 },
                homeScore: 2,
                awayScore: 0,
                currentGoal: 2,
            },
            {
                team: 'LAK',
                period: '2',
                min: 15,
                sec: 20,
                scorer: { player: 'Player 3', playerId: 3 },
                homeScore: 2,
                awayScore: 1,
                currentGoal: 3,
            },
        ]);
    });

    it('should handle empty goals or teams arrays', () => {
        const goals: Goal[] = [];
        const teams: Teams = {
            home: {
                abbreviation: 'ANA',
                id: 1,
                locationName: 'Anaheim',
                shortName: 'Ducks',
                teamName: 'Anaheim Ducks',
            },
            away: {
                abbreviation: 'LAK',
                id: 2,
                locationName: 'Los Angeles',
                shortName: 'Kings',
                teamName: 'Los Angeles Kings',
            },
        };

        const scoredGoals: Goal[] = addCurrentScores(goals, teams);

        expect(scoredGoals).toEqual([]);
    });
});
