import {Goal} from "../../interfaces/GameData.ts";
import {Filters} from "../../interfaces/CustomData.ts";
import {filterGoals} from "../helpers.ts";
import {DEFAULT_SEASON} from "../../constants/defaultValues.ts";

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
            season: DEFAULT_SEASON
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
            season: DEFAULT_SEASON
        };

        const filteredGoals: Goal[] = filterGoals(goals, filters);

        expect(filteredGoals[0].showGoal).toBe(false);
        expect(filteredGoals[1].showGoal).toBe(true);
        expect(filteredGoals[2].showGoal).toBe(true); // Player 2 matches the filter
        expect(filteredGoals[3].showGoal).toBe(true);
        expect(filteredGoals[4].showGoal).toBe(true);  // Player 2 matches the filter
    });
});
