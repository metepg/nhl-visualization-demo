import {sortGoals} from "../helpers.ts";
import {Goal} from "../../models/GameData.ts";


describe('sortGoals', () => {
    const goals: Goal[] = [
        {team: 'Team A', period: '2', min: 30, sec: 0, scorer: {player: 'Player 1', playerId: 1}},
        {team: 'Team B', period: '1', min: 45, sec: 10, scorer: {player: 'Player 2', playerId: 2}},
        {team: 'Team A', period: 'OT', min: 2, sec: 30, scorer: {player: 'Player 3', playerId: 3}},
        {team: 'Team B', period: '3', min: 0, sec: 30, scorer: {player: 'Player 4', playerId: 4}},
    ];

    it('sorts goals based on period, minute, and second, with OT goals after regular period goals', () => {
        const sortedGoals = sortGoals(goals);
        expect(sortedGoals).toEqual([
            {team: 'Team B', period: '1', min: 45, sec: 10, scorer: {player: 'Player 2', playerId: 2}},
            {team: 'Team A', period: '2', min: 30, sec: 0, scorer: {player: 'Player 1', playerId: 1}},
            {team: 'Team B', period: '3', min: 0, sec: 30, scorer: {player: 'Player 4', playerId: 4}},
            {team: 'Team A', period: 'OT', min: 2, sec: 30, scorer: {player: 'Player 3', playerId: 3}},
        ]);
    });

    it('returns an empty array when there are no goals', () => {
        const sortedGoals: Goal[] = sortGoals([]);
        expect(sortedGoals).toEqual([]);
    });

    it('handles goals with the same period but different minutes and seconds', () => {
        const goalsWithSamePeriod: Goal[] = [
            {team: 'Team A', period: '2', min: 20, sec: 10, scorer: {player: 'Player 1', playerId: 1}},
            {team: 'Team B', period: '2', min: 30, sec: 5, scorer: {player: 'Player 2', playerId: 2}},
            {team: 'Team A', period: '2', min: 30, sec: 0, scorer: {player: 'Player 3', playerId: 3}},
        ];
        const sortedGoals: Goal[] = sortGoals(goalsWithSamePeriod);
        expect(sortedGoals).toEqual([
            {team: 'Team A', period: '2', min: 20, sec: 10, scorer: {player: 'Player 1', playerId: 1}},
            {team: 'Team A', period: '2', min: 30, sec: 0, scorer: {player: 'Player 3', playerId: 3}},
            {team: 'Team B', period: '2', min: 30, sec: 5, scorer: {player: 'Player 2', playerId: 2}},
        ]);
    });

    it('handles goals with missing or undefined minutes and seconds', () => {
        const goalsWithMissingTime: Goal[] = [
            {team: 'Team A', period: '2', scorer: {player: 'Player 1', playerId: 1}},
            {team: 'Team B', period: '1', min: 45, scorer: {player: 'Player 2', playerId: 2}},
            {team: 'Team A', period: 'OT', min: 2, sec: 30, scorer: {player: 'Player 3', playerId: 3}},
        ];
        const sortedGoals: Goal[] = sortGoals(goalsWithMissingTime);
        expect(sortedGoals).toEqual([
            {team: 'Team B', period: '1', min: 45, scorer: {player: 'Player 2', playerId: 2}},
            {team: 'Team A', period: '2', scorer: {player: 'Player 1', playerId: 1}},
            {team: 'Team A', period: 'OT', min: 2, sec: 30, scorer: {player: 'Player 3', playerId: 3}},
        ]);
    });
});