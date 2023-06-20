import React, {useEffect, useState} from "react";
import styles from './Content.module.css'
import Timeline from "../timeline/Timeline.tsx";
import {Filters, GameEvent} from "../../interfaces.ts";
import Circle from "../circle/Circle.tsx";
import Result from "../result/Result.tsx";


interface ContentProps {
    events: GameEvent[];
    date: string;
    filters: Filters
}

const Content: React.FC<ContentProps> = ({events, date, filters}) => {
    const [filteredGameEvents, setFilteredGameEvents] = useState<GameEvent[]>(events);
    const homeGoals = events.filter((e) => !!e.player).length;
    const awayGoals = events.length - homeGoals;
    const winner = homeGoals > awayGoals ? 'home' : 'away';

    const period1 = filteredGameEvents.filter((e) => e.period === 1);
    const period2 = filteredGameEvents.filter((e) => e.period === 2);
    const period3 = filteredGameEvents.filter((e) => e.period === 3);
    const overtime = filteredGameEvents.filter((e) => e.period === 4);


    useEffect(() => {
        const filteredEvents = events.filter((event) => {
            // Filter by player
            if (filters.player !== "All players" && event.player?.toString() !== filters.player) {
                return false;
            }

            // Filter by goal type for
            if (filters.goaltypefor !== "All goals" && filters.goaltypefor !== 'AG'  && event.goalType !== filters.goaltypefor) {
                return false;
            }

            // Filter by goal type against
            if (filters.goaltypeagainst !== "All goals" && filters.goaltypeagainst !== "AG" && event.goalType === filters.goaltypeagainst) {
                return false;
            }

            return true;
        });
        setFilteredGameEvents(filteredEvents);
    }, [events, filters])

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
