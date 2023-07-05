import {Goal} from "../../interfaces/GameData.ts";
import {groupGoalsByPeriod} from "../helpers.ts";

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
