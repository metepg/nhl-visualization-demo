import {Goal, Teams} from "../../interfaces/GameData.ts";
import {addCurrentScores} from "../helpers.ts";

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
