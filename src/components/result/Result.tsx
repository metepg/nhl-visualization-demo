import React from 'react';
import styles from './Result.module.css'
import {FilteredGame} from "../../interfaces/GameData.ts";
import {Filters} from "../../interfaces/CustomData.ts";

interface ResultProps {
    game: FilteredGame;
    filters: Filters
}
const Circle: React.FC<ResultProps> = ({ game, filters }) => {
    const { home, away } = game.teams;
    const selectedTeamName = filters?.team?.abbreviation;
    const scores = game.scores;
    let opposingTeamGoals;
    let winner;

    const homeGoals: number | undefined | boolean = scores[home.abbreviation];
    const awayGoals: number | undefined | boolean = scores[away.abbreviation];

    if (selectedTeamName) {
        opposingTeamGoals = Object.values(scores).find(
            (value) => value !== scores[selectedTeamName]
        );
    }

    if (opposingTeamGoals) {
        winner = selectedTeamName && scores[selectedTeamName] > opposingTeamGoals;
    }

    return (
        <div
            className={styles.result}
            style={{
                backgroundColor: winner ? 'var(--red)' : 'var(--black)',
                border: winner ? '1px solid var(--red)' : '1px solid var(--black)'
            }}
        >
            {homeGoals}-{awayGoals}
        </div>
    );
};

export default Circle;
