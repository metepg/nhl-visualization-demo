import React from 'react';
import {Filters} from "../../interfaces/CustomData.ts";
import styles from './Timeline.module.css'
import {FilteredGame, Goal} from "../../interfaces/GameData.ts";
import {timeInSeconds} from "../../utils/helpers.ts";
import {PlayerInfo} from "../../interfaces/Teams.ts";
import GoalCircle from "../goal-circle/GoalCircle.tsx";

interface TimelineProps {
    game: FilteredGame;
    filters: Filters
    goals: Goal[];
    shootout?: boolean;
}

const Timeline: React.FC<TimelineProps> = ({goals, shootout, filters, game}) => {
    const getCirclePosition = (goalTime: number): string => {
        const minutes = 20;
        const periodDurationInSeconds: number = minutes * 60;
        const circlePosition: number = goalTime / periodDurationInSeconds * 100;
        return circlePosition.toString();
    };

    const goalEvent = goals.map((goal: Goal, index: number) => {
        const isSelectedTeam: boolean = goal.team === filters?.team?.abbreviation;
        const filterMatched: boolean = goal.showGoal ?? false;
        const scorer: string | number = isSelectedTeam ? filters?.team?.roster?.roster
            .find((player: PlayerInfo): boolean => player.person.id === goal.scorer.playerId)?.jerseyNumber ?? '' : ''
        const circleStyle = {
            left: `${getCirclePosition(timeInSeconds(goal.min, goal.sec))}%`,
            width: isSelectedTeam ? '25px' : '12.5px',
            height: isSelectedTeam ? '25px' : '12.5px',
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid var(--white)',
            zIndex: '2',
            fontSize: '12px',
            fontWeight: "normal",
            backgroundColor: isSelectedTeam
                ? filterMatched
                    ? 'var(--red)'
                    : 'var(--filtered-selected-team)'
                : filterMatched
                    ? 'var(--black)'
                    : 'var(--filtered-other-team)'
        };
        return (
            <GoalCircle
                customCircleStyles={circleStyle}
                filters={filters}
                game={game}
                goalInfo={goal}
                isSelectedTeam={isSelectedTeam}
                key={index}
                textInside={scorer}
            />
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
