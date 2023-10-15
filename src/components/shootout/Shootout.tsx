import React from 'react';
import styles from './Shootout.module.css'
import {Game} from "../../interfaces/GameData.ts";
import {Filters} from "../../interfaces/CustomData.ts";
import {getWinnerFromGameStats} from "../../utils/helpers.ts";

interface Props {
    game: Game;
    filters: Filters;
}
const Shootout: React.FC<Props> = ({game, filters}) => {
    const isShootout = game.scores.shootout;
    const selectedTeamName = filters.team?.abbreviation;
    const gameWinner= getWinnerFromGameStats(game, selectedTeamName);
    const selectedTeamIsWinner = selectedTeamName === gameWinner;

    return (
        <div className={styles.container}>
            <div className={styles.circle} style={{backgroundColor: isShootout
                    ? selectedTeamIsWinner
                        ? 'var(--red)'
                        : 'var(--black)'
                    : 'var(--light-grey)'}}>
            </div>
        </div>
    );
};

export default Shootout;
