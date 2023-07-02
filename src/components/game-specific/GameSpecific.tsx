import React, {useEffect, useState} from 'react';
import styles from './GameSpecific.module.css';
import {IconButton, Theme} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Timeline from "../timeline/Timeline.tsx";
import {Game, Periods} from "../../interfaces/GameData.ts";
import {Filters} from "../../interfaces/CustomData.ts";
import {formatDate} from "../../utils/helpers.ts";

interface MatchSpecificProps {
    game: Game;
    goalsByPeriod: Periods;
    filters: Filters;
}

const GameSpecific: React.FC<MatchSpecificProps> = ({game, goalsByPeriod, filters}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (open) document.body.classList.add(styles.noScroll);
        else document.body.classList.remove(styles.noScroll);
    }, [open]);

    if (!game || !goalsByPeriod) return null;
    const {period1, period2, period3, overtime} = goalsByPeriod;
    const {home, away} = game.teams;
    const homeTeamFullName = `${home.locationName} ${game.teams.home.teamName}`;
    const awayTeamFullName = `${away.locationName} ${game.teams.away.teamName}`;
    const homeIsSelectedTeam: boolean = filters?.team?.abbreviation === home.abbreviation;
    const awayIsSelectedTeam: boolean = filters?.team?.abbreviation === away.abbreviation;

    return (
        <>
            <button style={{
                backgroundColor: 'var(--white)',
                color: 'var(--black)',
                border: '1px solid var(--dark-grey)',
                cursor: 'pointer'
            }} onClick={handleOpen}>V
            </button>
            {!open ? null : (
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
                                        fontWeight: 'normal',
                                        margin: '0 2px'
                                    }}>vs</label>
                                    <label
                                        style={{color: awayIsSelectedTeam ? 'var(--red)' : 'var(--black)'}}>{awayTeamFullName}</label>
                                </h2>
                            </div>
                            <div className={styles.closeBtnWrapper}>
                                <label>CLOSE</label>
                                <div className={styles.closeButton}>
                                    <IconButton
                                        aria-label="close"
                                        onClick={handleClose}
                                        sx={{
                                            color: (theme: Theme) => theme.palette.grey[500],
                                        }}
                                    >
                                        <CloseIcon/>
                                    </IconButton>
                                </div>
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
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GameSpecific;
