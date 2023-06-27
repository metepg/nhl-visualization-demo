import React from 'react';
import styles from './GoalCircle.module.css'

interface GoalCircleProps {
    textInside: string | number;
    isSelectedTeam: boolean;
    customCircleStyles: any;
}
const GoalCircle: React.FC<GoalCircleProps> = ({textInside, isSelectedTeam, customCircleStyles}) => {
    const defaultCircleStyle = {
        width: isSelectedTeam ? '25px' : '12.5px',
        height: isSelectedTeam ? '25px' : '12.5px',
        fontSize: '14px',
        fontWeight: "normal",
        backgroundColor: isSelectedTeam
                ? 'var(--red)'
                : 'var(--black)'
    };

    return (
        <div className={styles.circle}
            // TODO: Remove inline styles to css
             style={customCircleStyles ?? defaultCircleStyle}
        >
                <span className={styles.eventText}>{textInside}</span>
        </div>
    );
};

export default GoalCircle;
