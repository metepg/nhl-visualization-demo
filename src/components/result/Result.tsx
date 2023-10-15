import React from 'react';
import styles from './Result.module.css'
import {FilteredGame} from "../../interfaces/GameData.ts";
import {Filters} from "../../interfaces/CustomData.ts";
import {getWinnerFromGameStats} from "../../utils/helpers.ts";

interface Props {
    game: FilteredGame;
    filters: Filters
}
const Result: React.FC<Props> = ({ game, filters }) => {
    const { home, away } = game.teams;
    const selectedTeamName = filters?.team?.abbreviation;
    const scores = game.scores;

    const homeGoals: number | undefined | boolean = scores[home.abbreviation];
    const awayGoals: number | undefined | boolean = scores[away.abbreviation];

    const selectedTeamIsWinner: boolean = selectedTeamName === getWinnerFromGameStats(game, selectedTeamName);

    return (
        <div
            className={styles.result}
            style={{
                backgroundColor: selectedTeamIsWinner ? 'var(--red)' : 'var(--black)',
                border: selectedTeamIsWinner ? '1px solid var(--red)' : '1px solid var(--black)'
            }}
        >
            {homeGoals}-{awayGoals}
        </div>
    );
};

export default Result;
