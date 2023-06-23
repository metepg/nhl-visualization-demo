import React from 'react';
import {GameEvent} from "../../interfaces/CustomData.ts";
import styles from './Timeline.module.css'

interface TimelineProps {
    events: GameEvent[];
    shootout?: boolean
}

const Timeline: React.FC<TimelineProps> = ({events, shootout}) => {
    const getCirclePosition = (goalTime: number): string => {
        const minutes = 20;
        const periodDurationInSeconds: number = minutes * 60;
        const circlePosition: number = goalTime / periodDurationInSeconds * 100;
        return circlePosition.toString();
    };

    return (
        <div className={styles.wrapper}>
            {events.map((event: GameEvent, index: number) => (
                <div key={index} className={styles.circle}
                     style={{
                         left: `${getCirclePosition(event.timeInSeconds)}%`,
                         width: event.player ? '25px' : '12.5px',
                         height: event.player ? '25px' : '12.5px',
                         backgroundColor: event.player ? 'var(--red)' : 'var(--black)'}}
                >
                    <span className={styles.eventText}>{event?.player}</span>
                </div>
            ))}
            <div className={styles.timelineLine} style={{width: shootout ? '53px' : '212px'}}/>
        </div>
    );
};

export default Timeline;
