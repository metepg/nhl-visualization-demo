import React from 'react';
import {Filters} from "../../interfaces/CustomData.ts";
import styles from './Timeline.module.css'
import {FilteredGame, Goal} from "../../interfaces/GameData.ts";
import {getCirclePosition} from "../../utils/helpers.ts";
import {PlayerInfo} from "../../interfaces/Teams.ts";
import GoalCircle from "../goal-circle/GoalCircle.tsx";

interface Props {
    goals: Goal[];
    filters: Filters;
    game: FilteredGame;
}

const Timeline: React.FC<Props> = ({ goals, filters, game }) => {
    const goalEvents = goals.map((goal: Goal, index: number) => {
        const periodInMinutes = goal.period === 'OT' ? 5 : 20;
        const isSelectedTeam: boolean = goal.team === filters?.team?.abbreviation;
        const showGoal: boolean = goal.showGoal ?? false;
        const scorer: string = isSelectedTeam && filters?.team?.roster
            ? filters.team.roster.roster.find(
                (player: PlayerInfo): boolean => player.person.id === goal.scorer.playerId)?.jerseyNumber ?? '99'
            : '';

        const circleStyle = {
            left: getCirclePosition(periodInMinutes, goal.min, goal.sec),
            width: isSelectedTeam ? '25px' : '12.5px',
            height: isSelectedTeam ? '25px' : '12.5px',
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid var(--white)',
            zIndex: '2',
            fontSize: 'var(--font-size-small)',
            fontWeight: 'normal',
            backgroundColor: isSelectedTeam
                ? showGoal
                    ? 'var(--red)'
                    : 'var(--filtered-selected-team)'
                : showGoal
                    ? 'var(--black)'
                    : 'var(--filtered-other-team)',
        };

        return (
            <GoalCircle
                customCircleStyles={circleStyle}
                filters={filters}
                game={game}
                goalInfo={goal}
                isSelectedTeam={isSelectedTeam}
                key={index}
                jerseyNumber={scorer}
            />
        );
    });

    return (
        <div className={styles.wrapper}>
            {goalEvents}
            <div className={styles.timelineLine} />
        </div>
    );
};

export default Timeline;
