import {Goal} from "../../interfaces/GameData.ts";
import {addCurrentScores} from "../helpers.ts";
import {mockedTeams} from "./mocks/teams.mock.ts";

describe('addCurrentScores', () => {
    it('should add current scores to goals based on team abbreviations', () => {
        const goals = [
            { team: 'ANA', period: '1', min: 10, sec: 30, scorer: { player: 'Player 1', playerId: 1 } },
            { team: 'ANA', period: '2', min: 5, sec: 45, scorer: { player: 'Player 2', playerId: 2 } },
            { team: 'LAK', period: '2', min: 15, sec: 20, scorer: { player: 'Player 3', playerId: 3 } },
        ];

        const scoredGoals: Goal[] = addCurrentScores(goals, mockedTeams);

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
        const scoredGoals: Goal[] = addCurrentScores(goals, mockedTeams);

        expect(scoredGoals).toEqual([]);
    });

    it('should handle shootout goals correctly', () => {
        const goals = [
            { team: 'ANA', period: '1', min: 10, sec: 30, scorer: { player: 'Player 1', playerId: 1 } },
            { team: 'ANA', period: '2', min: 5, sec: 45, scorer: { player: 'Player 2', playerId: 2 } },
            { team: 'LAK', period: '2', min: 15, sec: 20, scorer: { player: 'Player 3', playerId: 3 } },
            { team: 'LAK', period: '3', min: 15, sec: 20, scorer: { player: 'Player 3', playerId: 3 } },
            { team: 'ANA', period: 'SO', scorer: { player: 'Player 1', playerId: 1 } },
            { team: 'LAK', period: 'SO', scorer: { player: 'Player 3', playerId: 3 } },
            { team: 'ANA', period: 'SO', scorer: { player: 'Player 2', playerId: 2 } },
        ];

        const scoredGoals = addCurrentScores(goals, mockedTeams);

        expect(scoredGoals).toEqual([
            {
                team: 'ANA',
                period: '1',
                scorer: {player: 'Player 1', playerId: 1},
                homeScore: 1,
                min: 10,
                sec: 30,
                awayScore: 0,
                currentGoal: 1,
            },
            {
                team: 'ANA',
                period: '2',
                scorer: {player: 'Player 2', playerId: 2},
                homeScore: 2,
                awayScore: 0,
                currentGoal: 2,
                min: 5,
                sec: 45
            },
            {
                team: 'LAK',
                period: '2',
                scorer: {player: 'Player 3', playerId: 3},
                homeScore: 2,
                awayScore: 1,
                currentGoal: 3,
                min: 15,
                sec: 20,
            },
            {
                team: 'LAK',
                period: '3',
                scorer: {player: 'Player 3', playerId: 3},
                homeScore: 2,
                awayScore: 2,
                currentGoal: 4,
                min: 15,
                sec: 20,
            },
            {
                team: 'ANA',
                period: 'SO',
                scorer: {player: 'Player 1', playerId: 1},
                homeScore: 3,
                awayScore: 2,
                currentGoal: 5,
            },
            {
                team: 'LAK',
                period: 'SO',
                scorer: {player: 'Player 3', playerId: 3},
                homeScore: 3,
                awayScore: 3,
                currentGoal: 6,
            },
            {
                team: 'ANA',
                period: 'SO',
                scorer: {player: 'Player 2', playerId: 2},
                homeScore: 4,
                awayScore: 3,
                currentGoal: 7,
            },
        ]);
    });
});
