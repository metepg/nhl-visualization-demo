import React, {useEffect, useState} from 'react';
import styles from './MatchSpecific.module.css';
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
const MatchSpecific: React.FC<MatchSpecificProps> = ({game, goalsByPeriod, filters}) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (open) document.body.classList.add(styles.noScroll);
        else document.body.classList.remove(styles.noScroll);
    }, [open]);

    if (!game || !goalsByPeriod) return null;
    const {period1, period2, period3, overtime} = goalsByPeriod;
    const home = `${game.teams.home.locationName} ${game.teams.home.teamName}`;
    const away = `${game.teams.away.locationName} ${game.teams.away.teamName}`;
    const {scores} = game;
    const winner: string = Object.keys(scores).reduce((maxKey: string, key: string): string => {
        if (!(scores[key] as number | boolean) && (scores[key] as number | boolean) > (scores[maxKey] as number | boolean)) return key;
        else return maxKey;
    });

    return (
        <>
            <button style={{backgroundColor: 'var(--white)', color: 'var(--black)', border: '1px solid var(--dark-grey)', cursor: 'pointer'}} onClick={handleClickOpen}>V</button>
            {!open ? null : (
                <div className={styles.dialogStyles}>
                    <div className={styles.dialogContentStyles}>
                        <div className={styles.dialogHeaderStyles}>
                            <div className={styles.matchHeader}>
                                <label className={styles.label}>{formatDate(game.startTime)}</label>
                                <h2>
                                    <label style={{color: winner === game.teams.home.abbreviation ? 'var(--red)' : 'var(--black)'}}>{home}</label>
                                    <label style={{textTransform: 'lowercase', fontWeight: 'normal', margin: '0 2px'}}> vs </label>
                                    <label style={{color: winner === game.teams.away.abbreviation ? 'var(--red)' : 'var(--black)'}}>{away}</label>
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
                                    <Timeline game={game} goals={period1} filters={filters} />
                                </div>
                            </div>
                            <div className={styles.periodWrapper}>
                                <p className={styles.periodLabel}>2nd period</p>
                                <div className={styles.timelineWrapper}>
                                    <Timeline game={game} goals={period2} filters={filters} />
                                </div>
                            </div>
                            <div className={styles.periodWrapper}>
                                <p className={styles.periodLabel}>3rd period</p>
                                <div className={styles.timelineWrapper}>
                                    <Timeline game={game} goals={period3} filters={filters} />
                                </div>
                            </div>
                            <div className={`${styles.periodWrapper} ${styles.overtimeWrapper}`}>
                                <p className={styles.periodLabel}>Overtime</p>
                                <div className={styles.timelineWrapper}>
                                    <Timeline game={game} goals={overtime} filters={filters} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MatchSpecific;
