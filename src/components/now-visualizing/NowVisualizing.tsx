import React from 'react';
import styles from './NowVisualizing.module.css';
import GoalCircle from "../goal-circle/GoalCircle.tsx";
import ToggleSwitch from "../toggle-switch/ToggleSwitch.tsx";
import { Player } from "../../models/Player.ts";
import { Team } from "../../models/Team.ts";
import { Filters } from "../../models/Filters.ts";

interface Props {
  filters: Filters
  players: Player[]
}

const NowVisualizing: React.FC<Props> = ({filters, players}) => {
    const team: Team | null = filters?.team;
    const season: string = filters.season;
    const goaltypefor: string = filters.goaltypefor;
    const goaltypeagainst: string = filters.goaltypeagainst;
    const selectedPlayer: Player | undefined = players.find((player: Player): boolean => player.id === filters.player.id)
    const playerName: string = !selectedPlayer ? 'All players' : `${selectedPlayer.firstName} ${selectedPlayer.lastName}`;
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
                        <GoalCircle jerseyNumber={'X'} isSelectedTeam={true} customCircleStyles={undefined}/>
                        <p className={styles.circleText}>Goals for (w/player number)</p>
                    </div>
                    <div className={styles.otherTeamCircleContainer}>
                        <GoalCircle jerseyNumber={''} isSelectedTeam={false} customCircleStyles={undefined} />
                        <p className={styles.circleText}>Goals against</p>
                    </div>
                </div>
            </div>
            <div className={styles.selectedView}>
                <div className={styles.view}>
                    <p className={styles.overview}>OVERVIEW</p>
                    <p className={styles.gameSpecificView}>GAME-SPECIFIC VIEW</p>
                </div>
                <div className={styles.switch}>
                    <span style={{marginRight: '10px', fontSize: 'var(--font-size-small)'}}>FULL LAYOUT</span>
                    <ToggleSwitch/>
                    <span style={{marginLeft: '10px', fontSize: 'var(--font-size-small)'}}>MINIMIZED</span>
                </div>
            </div>
        </section>
    );
};

export default NowVisualizing;
