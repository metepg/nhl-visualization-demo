import {formatDate, groupGoalsByPeriod, shortenGoalTypeName, timeInSeconds} from "./helpers.ts";
import {Goal} from "../interfaces/GameData.ts";

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
        expect(shortenGoalTypeName(null)).toBe('');
    });

    it('returns an empty string when value is undefined', () => {
        expect(shortenGoalTypeName(undefined)).toBe('');
    });

    it('returns the correct shortened goal type name when value is valid', () => {
        expect(shortenGoalTypeName('AllGoals')).toBe('AG');
        expect(shortenGoalTypeName('powerplay')).toBe('PPG');
        expect(shortenGoalTypeName('ShorThanded')).toBe('SHG');
        expect(shortenGoalTypeName('EMPTYNET')).toBe('EN');
        expect(shortenGoalTypeName('gamewinning')).toBe('GW');
    });

    it('returns an empty string when the value does not match any known goal type', () => {
        expect(shortenGoalTypeName('InvalidGoalType')).toBe('');
        expect(shortenGoalTypeName('')).toBe('');
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
            { period: '1', scorer: { player: 'Player 1', playerId: 1 }, team: 'Team A' },
            { period: '2', scorer: { player: 'Player 2', playerId: 2 }, team: 'Team B' },
            { period: '1', scorer: { player: 'Player 3', playerId: 3 }, team: 'Team A' },
            { period: '3', scorer: { player: 'Player 4', playerId: 4 }, team: 'Team B' },
            { period: 'OT', scorer: { player: 'Player 5', playerId: 5 }, team: 'Team A' },
        ];
        const expectedPeriods = {
            period1: [
                { period: '1', scorer: { player: 'Player 1', playerId: 1 }, team: 'Team A' },
                { period: '1', scorer: { player: 'Player 3', playerId: 3 }, team: 'Team A' },
            ],
            period2: [
                { period: '2', scorer: { player: 'Player 2', playerId: 2 }, team: 'Team B' },
            ],
            period3: [
                { period: '3', scorer: { player: 'Player 4', playerId: 4 }, team: 'Team B' },
            ],
            overtime: [
                { period: 'OT', scorer: { player: 'Player 5', playerId: 5 }, team: 'Team A' },
            ],
        };

        expect(groupGoalsByPeriod(goals)).toEqual(expectedPeriods);
    });
});