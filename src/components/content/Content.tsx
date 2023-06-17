import React from "react";
import styles from './Content.module.css'
import Timeline from "../timeline/Timeline.tsx";
import {GameEvent} from "../../interfaces.ts";
import Circle from "../circle/Circle.tsx";
import Result from "../result/Result.tsx";


interface ContentProps {
    events: GameEvent[];
    date: string;
}

const Content: React.FC<ContentProps> = ({events, date}) => {
    const homeGoals = events.filter((e) => !!e.player).length;
    const awayGoals = events.length - homeGoals;
    const winner = homeGoals > awayGoals ? 'home' : 'away';

    const period1 = events.filter((e) => e.period === 1);
    const period2 = events.filter((e) => e.period === 2);
    const period3 = events.filter((e) => e.period === 3);
    const overtime = events.filter((e) => e.period === 4);

    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <div className={styles.content}>{date}</div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>CAR-FLO</div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <Timeline events={period1}/>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <Timeline events={period2}/>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <Timeline events={period3}/>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <Timeline events={overtime} shootout={true}/>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <Circle winner={winner}></Circle>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <Result events={events} />
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>V</div>
            </div>
        </div>
    )
}

export default Content
