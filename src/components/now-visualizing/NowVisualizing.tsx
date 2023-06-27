import React from 'react';
import {Filters} from "../../interfaces/CustomData.ts";
import styles from './NowVisualizing.module.css';
import {PlayerInfo} from "../../interfaces/Teams.ts";
import GoalCircle from "../goal-circle/GoalCircle.tsx";
import ToggleSwitch from "../toggle-switch/ToggleSwitch.tsx";

interface NowVisualizingProps {
    filters: Filters
}

const NowVisualizing: React.FC<NowVisualizingProps> = ({filters}) => {
    const team = filters?.team;
    const season = filters.season;
    const goaltypefor = filters.goaltypefor;
    const goaltypeagainst = filters.goaltypeagainst;
    const selectedPlayer = team?.roster?.roster.find((player: PlayerInfo): boolean => player.person.id === filters.player)
    let playerName;
    if (!selectedPlayer) playerName = 'All players';
    else playerName = selectedPlayer?.person.fullName;

    return (
        <div className={styles.wrapper}>
            <div className={styles.visualizeText}><p>NOW VISUALIZING</p></div>
            <div className={styles.firstRow}>
                <p>
                    <span style={{paddingRight: '10px'}}>{`${team?.name.toUpperCase()}`}&nbsp; &gt;</span>
                    <span style={{paddingRight: '10px'}}>{`${playerName?.toUpperCase()}`}&nbsp; &gt;</span>
                    <span style={{paddingRight: '10px'}}>{`${season?.toUpperCase()}`}&nbsp; &gt;</span>
                    <span style={{paddingRight: '10px'}}>{`${goaltypefor?.toUpperCase()} FOR`}&nbsp; &gt;</span>
                    <span style={{paddingRight: '10px'}}>{`${goaltypeagainst?.toUpperCase()} AGAINST`}&nbsp;</span>
                </p>
            </div>
            <div className={styles.secondRow}>
                <div className={styles.circleContainer}>
                    <div className={styles.selectedTeamCircleContainer}>
                        <GoalCircle textInside={'x'} isSelectedTeam={true} customCircleStyles={null}/>
                        <p className={styles.circleText}>Goals for (w/player number)</p>
                    </div>
                    <div className={styles.otherTeamCircleContainer}>
                        <GoalCircle textInside={''} isSelectedTeam={false} customCircleStyles={null} />
                        <p className={styles.circleText}>Goals against</p>
                    </div>
                </div>
            </div>
            <div className={styles.thirdRow}>
                <div>
                    <button className={styles.customButton1}>OVERVIEW</button>
                    <button className={styles.customButton2}>GAME-SPECIFIC VIEW</button>
                </div>
                <div>
                    <span style={{marginRight: '10px', fontSize: '12px'}}>FULL LAYOUT</span>
                    <ToggleSwitch/>
                    <span style={{marginLeft: '10px', fontSize: '12px'}}>MINIMIZED</span>
                </div>
            </div>
        </div>
    );
};

export default NowVisualizing;
