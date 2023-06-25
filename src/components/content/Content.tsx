import React, {useEffect, useState} from "react";
import styles from './Content.module.css'
import Timeline from "../timeline/Timeline.tsx";
import {Filters} from "../../interfaces/CustomData.ts";
import Circle from "../circle/Circle.tsx";
import Result from "../result/Result.tsx";
import {FilteredGame, Goal} from "../../interfaces/GameData.ts";
import {formatDate, shortenGoalTypeName} from "../../utils.ts";


interface ContentProps {
    events: FilteredGame;
    filters: Filters;
}

const Content: React.FC<ContentProps> = ({events, filters}) => {
    const [filteredGameEvents, setFilteredGameEvents] = useState<Goal[]>(events.goals);

    // TODO: Make this better
    const period1: Goal[] = filteredGameEvents.filter((goal: Goal): boolean => goal.period === '1');
    const period2: Goal[] = filteredGameEvents.filter((goal: Goal): boolean => goal.period === '2');
    const period3: Goal[] = filteredGameEvents.filter((goal: Goal): boolean => goal.period === '3');
    const overtime: Goal[] = filteredGameEvents.filter((goal: Goal): boolean => goal.period === 'OT');

    useEffect(() => {
        const filteredEvents: Goal[] = events.goals.filter((goal: Goal): boolean => {
            // By player
            if (filters.player !== 999 && filters.player !== goal.scorer.playerId) {
                return false;
            }

            // Filter by goal type for
            if (filters?.goaltypefor !== 'All goals' && goal.strength !== shortenGoalTypeName(filters.goaltypefor)) {
                return false;
            }

            // Filter by goal type against
            if (filters.goaltypeagainst !== 'All goals' && shortenGoalTypeName(filters.goaltypeagainst) === goal.strength) {
                return false;
            }

            return true;
        })
        setFilteredGameEvents(filteredEvents);
    }, [events, filters])

    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <div className={styles.content}>{formatDate(events.startTime)}</div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>{`${events.teams.home.abbreviation}-${events.teams.away.abbreviation}`}</div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <Timeline goals={period1} filters={filters}/>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <Timeline goals={period2} filters={filters}/>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <Timeline goals={period3} filters={filters}/>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <Timeline goals={overtime} filters={filters} shootout={true}/>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <Circle shootout={events.scores.shootout}></Circle>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <Result game={events} filters={filters}/>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>V</div>
            </div>
        </div>
    )
}

export default Content
