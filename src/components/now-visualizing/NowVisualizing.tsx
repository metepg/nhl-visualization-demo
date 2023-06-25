import React from 'react';
import {Filters} from "../../interfaces/CustomData.ts";
import styles from './NowVisualizing.module.css';

interface NowVisualizingProps {
    filters: Filters
}

const NowVisualizing: React.FC<NowVisualizingProps> = ({filters}) => {
    const team = filters?.team;
    const season = filters.season;
    const goaltypefor = filters.goaltypefor;
    const goaltypeagainst = filters.goaltypeagainst;
    const selectedPlayer = team?.roster.roster.find((player): boolean => player.person.id === filters.player)
    console.log(selectedPlayer)
    let playerName;
    if (!selectedPlayer) playerName = 'All players';
    else playerName = selectedPlayer?.person.fullName;

    return (
        <div className={styles.wrapper}>
            <div className={styles.visualizeText}><p>NOW VISUALIZING</p></div>
            <div className={styles.visualizingInfo}>
                <p>
                    {`${team?.name.toUpperCase()} >
                    ${playerName.toUpperCase()} >
                    ${season?.toUpperCase()} >
                    ${goaltypefor?.toUpperCase()} FOR >
                    ${goaltypeagainst?.toUpperCase()} AGAINST`}
                </p>
            </div>
        </div>
    );
};

export default NowVisualizing;
