import React, {useState} from 'react';
import styles from './GoalCircle.module.css'
import {FilteredGame, Goal} from "../../interfaces/GameData.ts";
import GoalInfoDialog from "../goal-info-prompt/GoalInfoDialog.tsx";

interface Props {
    game?: FilteredGame;
    goalInfo?: Goal;
    jerseyNumber: string | number;
    isSelectedTeam: boolean;
    customCircleStyles: any;
}
const GoalCircle: React.FC<Props> = ({jerseyNumber, isSelectedTeam, customCircleStyles, goalInfo, game}) => {
    const [showElement, setShowElement] = useState<boolean>(false);
    const defaultCircleStyle = {
        width: isSelectedTeam ? '25px' : '12.5px',
        height: isSelectedTeam ? '25px' : '12.5px',
        fontSize: 'var(--font-size-normal)',
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

    if (game?.goals.length === 0 || !game?.goals) return null;
    return (
        <div
            className={styles.circle}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
            onClick={(e) => handleHover(e, null)}
            // TODO: Remove inline styles to css
            style={customCircleStyles ?? defaultCircleStyle}
        >
            <span className={styles.eventText}>{jerseyNumber}</span>
            {showElement && <GoalInfoDialog game={game} goalInfo={goalInfo} />}
        </div>
    );
};

export default GoalCircle;
