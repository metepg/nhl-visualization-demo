import React, {useEffect, useState} from "react";
import styles from './Content.module.css'
import Timeline from "../timeline/Timeline.tsx";
import {Filters} from "../../interfaces/CustomData.ts";
import Circle from "../circle/Circle.tsx";
import Result from "../result/Result.tsx";
import {FilteredGame, Goal} from "../../interfaces/GameData.ts";
import {filterGoals, formatDate, groupGoalsByPeriod} from "../../utils/helpers.ts";


interface ContentProps {
    events: FilteredGame;
    filters: Filters;
}

const Content: React.FC<ContentProps> = ({events, filters}) => {
    const [filteredGameEvents, setFilteredGameEvents] = useState<Goal[]>(events.goals);
    const {period1, period2, period3, overtime} = groupGoalsByPeriod(filteredGameEvents);

    useEffect(() => {
        setFilteredGameEvents(filterGoals(events.goals, filters));
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
