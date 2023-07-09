import React from 'react';
import {Filters} from "../../interfaces/CustomData.ts";
import styles from './NowVisualizing.module.css';
import {PlayerInfo, Team} from "../../interfaces/Teams.ts";
import GoalCircle from "../goal-circle/GoalCircle.tsx";
import ToggleSwitch from "../toggle-switch/ToggleSwitch.tsx";

interface Props {
    filters: Filters
}

const NowVisualizing: React.FC<Props> = ({filters}) => {
    const team: Team | null = filters?.team;
    const season: string = filters.season;
    const goaltypefor: string = filters.goaltypefor;
    const goaltypeagainst: string = filters.goaltypeagainst;
    const selectedPlayer: PlayerInfo | undefined = team?.roster?.roster.find((player: PlayerInfo): boolean => player.person.id === filters.player)
    const playerName: string = !selectedPlayer ? 'All players' : selectedPlayer.person.fullName;
    const selectedFilters = [team?.name, playerName, season, `${goaltypefor} FOR`, `${goaltypeagainst} AGAINST`];

    return (
        <section className={styles.wrapper}>
            <div className={styles.visualizeText}><p>NOW VISUALIZING</p></div>
            <div className={styles.selectedFilters}>
                <p>
                    {selectedFilters.map((label: string | undefined, index: number) => {
                        const isLastElement: boolean = index === selectedFilters.length - 1;
                        const separator: string = isLastElement ? '' : ' >';
                        return (<span key={index} className={styles.selectedOptions}>{label}&nbsp;{separator}</span>);
                    })}
                </p>
            </div>
            <div className={styles.infoText}>
                <div className={styles.circleContainer}>
                    <div className={styles.selectedTeamCircleContainer}>
                        <GoalCircle jerseyNumber={'x'} isSelectedTeam={true} customCircleStyles={null}/>
                        <p className={styles.circleText}>Goals for (w/player number)</p>
                    </div>
                    <div className={styles.otherTeamCircleContainer}>
                        <GoalCircle jerseyNumber={''} isSelectedTeam={false} customCircleStyles={null} />
                        <p className={styles.circleText}>Goals against</p>
                    </div>
                </div>
            </div>
            <div className={styles.selectedView}>
                <div>
                    <p className={styles.overview}>OVERVIEW</p>
                    <p className={styles.gameSpecificView}>GAME-SPECIFIC VIEW</p>
                </div>
                <div>
                    <span style={{marginRight: '10px', fontSize: 'var(--font-size-small)'}}>FULL LAYOUT</span>
                    <ToggleSwitch/>
                    <span style={{marginLeft: '10px', fontSize: 'var(--font-size-small)'}}>MINIMIZED</span>
                </div>
            </div>
        </section>
    );
};

export default NowVisualizing;
