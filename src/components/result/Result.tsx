import React from 'react';
import styles from './Result.module.css'
import {GameEvent} from "../../interfaces/CustomData.ts";

interface ResultProps {
    events: GameEvent[];
}
const Circle: React.FC<ResultProps> = ({events}) => {
    const homeGoals = events.filter((e) => !!e.player).length;
    const awayGoals = events.length - homeGoals;
    const winner = homeGoals > awayGoals ? 'home' : 'away';

    return (
        <div className={styles.result} style={{
            backgroundColor: winner === 'home' ? 'var(--red)' : 'var(--black)',
            border: winner === 'home' ? '1px solid var(--red)' : '1px solid var(--black)'}}>{homeGoals}-{awayGoals}
        </div>
    );
};

export default Circle;
