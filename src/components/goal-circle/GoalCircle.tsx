import React, {useState} from 'react';
import styles from './GoalCircle.module.css'
import {FilteredGame, Goal} from "../../interfaces/GameData.ts";
import GoalInfoDialog from "../goal-info-prompt/GoalInfoDialog.tsx";
import {Filters} from "../../interfaces/CustomData.ts";

interface GoalCircleProps {
    filters?: Filters;
    game?: FilteredGame;
    goalInfo?: Goal;
    textInside: string | number;
    isSelectedTeam: boolean;
    customCircleStyles: any;
}
const GoalCircle: React.FC<GoalCircleProps> = ({textInside, isSelectedTeam, customCircleStyles, goalInfo, game, filters}) => {
    const [showElement, setShowElement] = useState<boolean>(false);
    const defaultCircleStyle = {
        width: isSelectedTeam ? '25px' : '12.5px',
        height: isSelectedTeam ? '25px' : '12.5px',
        fontSize: '14px',
        fontWeight: "normal",
        backgroundColor: isSelectedTeam
                ? 'var(--red)'
                : 'var(--black)'
    };

    function handleHover(event: React.MouseEvent<HTMLDivElement>, value: boolean | null): void {
        event.stopPropagation();
        if (value === null) return;
        setShowElement(value);
    }

    return (
        <div
            className={styles.circle}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
            onClick={(e) => handleHover(e, null)}
            // TODO: Remove inline styles to css
            style={customCircleStyles ?? defaultCircleStyle}
        >
            <span className={styles.eventText}>{textInside}</span>
            {showElement && <GoalInfoDialog goalInfo={goalInfo} game={game} filters={filters} teams={game?.teams} />}
        </div>
    );
};

export default GoalCircle;
