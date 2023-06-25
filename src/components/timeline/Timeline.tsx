import React from 'react';
import {Filters} from "../../interfaces/CustomData.ts";
import styles from './Timeline.module.css'
import {Goal} from "../../interfaces/GameData.ts";
import {timeInSeconds} from "../../utils.ts";
import {PlayerInfo} from "../../interfaces/Teams.ts";

interface TimelineProps {
    filters: Filters
    goals: Goal[];
    shootout?: boolean;
}

const Timeline: React.FC<TimelineProps> = ({goals, shootout, filters}) => {
    const getCirclePosition = (goalTime: number): string => {
        const minutes = 20;
        const periodDurationInSeconds: number = minutes * 60;
        const circlePosition: number = goalTime / periodDurationInSeconds * 100;
        return circlePosition.toString();
    };

    const goalEvent = goals.map((goal: Goal, index: number) => {
        const isSelectedTeam: boolean = goal.team === filters?.team?.abbreviation;
        return (
            <div key={index} className={styles.circle}
                 // TODO: Remove inline styles to css
                 style={{
                     left: `${getCirclePosition(timeInSeconds(goal.min, goal.sec))}%`,
                     width: isSelectedTeam ? '25px' : '12.5px',
                     height: isSelectedTeam ? '25px' : '12.5px',
                     fontWeight: "normal",
                     backgroundColor: isSelectedTeam ? 'var(--red)' : 'var(--black)'}}
            >
                <span className={styles.eventText}>{isSelectedTeam ? filters?.team?.roster?.roster
                    .find((player: PlayerInfo): boolean => player.person.id === goal.scorer.playerId)?.jerseyNumber : ''}</span>
            </div>
        )
    })

    return (
        <div className={styles.wrapper}>
            {goalEvent}
            <div className={styles.timelineLine} style={{width: shootout ? '53px' : '212px'}}/>
        </div>
    );
};

export default Timeline;
