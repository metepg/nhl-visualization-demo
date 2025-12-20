import React from 'react';
import styles from './Shootout.module.css'
import {Game} from "../../models/GameData.ts";
import {Filters} from "../../models/CustomData.ts";
import {getWinnerFromGameStats} from "../../utils/helpers.ts";

interface Props {
    game: Game;
    filters: Filters;
    showAll: boolean;
}
const Shootout: React.FC<Props> = ({ game, filters, showAll }) => {
    const isShootout = game.scores.shootout;
    const selectedTeamName = filters.team?.abbreviation;
    const gameWinner= getWinnerFromGameStats(game, selectedTeamName);
    const selectedTeamIsWinner = selectedTeamName === gameWinner;
    const shootoutStyles = {
        backgroundColor: isShootout
            ? selectedTeamIsWinner
                ? 'var(--red)'
                : 'var(--black)'
            : 'var(--white)',
        border: '1px solid var(--light-grey)'
    }
    const shootOutGoals = game.goals.filter((goal) => goal.period === 'SO');
    const selectedTeamSOGoals = shootOutGoals.filter((goal) => goal.team === selectedTeamName);
    const otherTeamSOGoals = shootOutGoals.filter((goal) => goal.team !== selectedTeamName);

    const { home, away } = game.teams;
    const homeTeamFullName = `${home.locationName} ${game.teams.home.teamName}`;
    const awayTeamFullName = `${away.locationName} ${game.teams.away.teamName}`;
    const homeIsSelectedTeam: boolean = filters?.team?.abbreviation === home.abbreviation;

    // Get the full names of the game winners
    const homeTeamWinnerFullName = homeIsSelectedTeam ? homeTeamFullName : awayTeamFullName;
    const awayTeamWinnerFullName = homeIsSelectedTeam ? awayTeamFullName : homeTeamFullName;

    return (
        showAll ? (
            <div>
                <span>{selectedTeamIsWinner ? homeTeamWinnerFullName : awayTeamWinnerFullName} win </span>
                    <span>{Math.max(selectedTeamSOGoals.length, otherTeamSOGoals.length)}</span>
                    -
                    <span>{Math.min(selectedTeamSOGoals.length, otherTeamSOGoals.length)}</span>
            </div>
        ) : (
            <div className={styles.container}>
                <div className={styles.circle} style={shootoutStyles}></div>
            </div>
        )
    );
};

export default Shootout;