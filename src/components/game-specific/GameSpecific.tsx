import React from 'react';
import styles from './GameSpecific.module.css';
import Timeline from "../timeline/Timeline.tsx";
import {Game, Goal, Periods} from "../../models/GameData.ts";
import {Filters} from "../../models/CustomData.ts";
import {formatDate} from "../../utils/helpers.ts";
import Shootout from "../shootout/Shootout.tsx";

interface Props {
    game: Game;
    goalsByPeriod: Periods;
    filters: Filters;
}

const GameSpecific: React.FC<Props> = ({game, goalsByPeriod, filters}) => {

    if (!game || !goalsByPeriod) return null;
    const {period1, period2, period3, overtime} = goalsByPeriod;
    const {home, away} = game.teams;
    const homeTeamFullName = `${home.locationName} ${game.teams.home.teamName}`;
    const awayTeamFullName = `${away.locationName} ${game.teams.away.teamName}`;
    const homeIsSelectedTeam: boolean = filters?.team?.abbreviation === home.abbreviation;
    const awayIsSelectedTeam: boolean = filters?.team?.abbreviation === away.abbreviation;

    return (
        <>{!open ? null : (
            <div className={styles.dialogStyles}>
                <div className={styles.dialogContentStyles}>
                    <div className={styles.dialogHeaderStyles}>
                        <div className={styles.matchHeader}>
                            <label className={styles.label}>{formatDate(game.startTime)}</label>
                            <h2>
                                <label
                                    style={{color: homeIsSelectedTeam ? 'var(--red)' : 'var(--black)'}}>{homeTeamFullName}</label>
                                <label style={{
                                    textTransform: 'lowercase',
                                    fontWeight: '400',
                                    margin: '0 2px'
                                }}> vs </label>
                                <label
                                    style={{color: awayIsSelectedTeam ? 'var(--red)' : 'var(--black)'}}>{awayTeamFullName}</label>
                            </h2>
                        </div>
                    </div>
                    <div className={styles.dialogBodyStyles}>
                        <div className={styles.periodWrapper}>
                            <p className={styles.periodLabel}>1st period</p>
                            <div className={styles.timelineWrapper}>
                                <Timeline game={game} goals={period1} filters={filters}/>
                            </div>
                        </div>
                        <div className={styles.periodWrapper}>
                            <p className={styles.periodLabel}>2nd period</p>
                            <div className={styles.timelineWrapper}>
                                <Timeline game={game} goals={period2} filters={filters}/>
                            </div>
                        </div>
                        <div className={styles.periodWrapper}>
                            <p className={styles.periodLabel}>3rd period</p>
                            <div className={styles.timelineWrapper}>
                                <Timeline game={game} goals={period3} filters={filters}/>
                            </div>
                        </div>
                        <div className={`${styles.periodWrapper} ${styles.overtimeWrapper}`}>
                            <p className={styles.periodLabel}>Overtime</p>
                            <div className={styles.timelineWrapper}>
                                <Timeline game={game} goals={overtime} filters={filters}/>
                            </div>
                        </div>
                        {game.goals.filter((goal: Goal) => goal.period === 'SO').length > 0
                            ? <div className={`${styles.periodWrapper} ${styles.overtimeWrapper}`}>
                                <p className={styles.periodLabel}>Shootout</p>
                                <div style={{display: 'flex', justifyContent: "start"}}>
                                    <Shootout showAll={true} game={game} filters={filters} />
                                </div>
                            </div>
                            : null}
                    </div>
                </div>
            </div>
        )}
        </>
    );
};

export default GameSpecific;
