import React, {useEffect, useState} from "react";
import styles from './Content.module.css'
import Timeline from "../timeline/Timeline.tsx";
import {Filters} from "../../interfaces/CustomData.ts";
import Shootout from "../shootout/Shootout.tsx";
import Result from "../result/Result.tsx";
import {FilteredGame, Goal} from "../../interfaces/GameData.ts";
import {addCurrentScores, filterGoals, formatDate, groupGoalsByPeriod} from "../../utils/helpers.ts";


interface ContentProps {
    game: FilteredGame;
    filters: Filters;
}

const Content: React.FC<ContentProps> = ({game, filters}) => {
    const [filteredGameEvents, setFilteredGameEvents] = useState<Goal[]>(game.goals);
    const {period1, period2, period3, overtime} = groupGoalsByPeriod(filteredGameEvents);

    useEffect(() => {
        setFilteredGameEvents(filterGoals(game.goals, filters));
    }, [game, filters])

    const gameWithAddedGoalData = {...game, goals: addCurrentScores(game.goals, game.teams)}
    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <div className={styles.content}>{formatDate(game.startTime)}</div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>{`${game.teams.home.abbreviation}-${game.teams.away.abbreviation}`}</div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <Timeline goals={period1} filters={filters} game={gameWithAddedGoalData} />
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <Timeline goals={period2} filters={filters} game={gameWithAddedGoalData} />
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <Timeline goals={period3} filters={filters} game={gameWithAddedGoalData} />
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <Timeline goals={overtime} filters={filters} shootout={true} game={gameWithAddedGoalData} />
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <Shootout shootout={game.scores.shootout}></Shootout>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <Result game={game} filters={filters}/>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>V</div>
            </div>
        </div>
    )
}

export default Content
