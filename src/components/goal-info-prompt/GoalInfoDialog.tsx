import React from 'react';
import {FilteredGame, Goal} from "../../interfaces/GameData.ts";
import styles from './GoalInfoDialog.module.css';
import {getAssistLastNames, goalTypeLong} from "../../utils/helpers.ts";

interface Props {
    game?: FilteredGame;
    goalInfo?: Goal;
    isSelectedTeam: boolean;
}

const GoalInfoDialog: React.FC<Props> = ({goalInfo, game, isSelectedTeam}) => {
    if (!goalInfo || !game) return null;
    const {home, away} = game.teams;
    const goalType: string = goalInfo.strength
        ? goalTypeLong(goalInfo.strength)
        : 'GOAL';

    // TODO: Change these
    type period = {
        [key: string]: string;
    };
    const {period} = goalInfo;
    const p: period = {
        1: '1st period',
        2: '2nd period',
        3: '3rd period',
        OT: 'Overtime'
    }

    const assists: string = getAssistLastNames(goalInfo).join(', ');
    const goalTime = `${goalInfo.min}:${goalInfo.sec}`;

        return (
            <div className={styles.overlay}>
                <div className={styles.goalTypeWrapper}>
                    <div className={styles.scoreInfo} style={{backgroundColor: isSelectedTeam ? 'var(--red)' : 'var(--black)', color: 'var(--white)', borderRight: '1px solid var(--black)'}}>
                        <p>
                           <label style={{fontWeight: goalInfo.team === home.abbreviation ? 'bold' : 'normal'}}>{home.abbreviation} {goalInfo.homeScore}</label>
                            &nbsp;-&nbsp;
                            <label style={{fontWeight: goalInfo.team === away.abbreviation ? 'bold' : 'normal'}}>{away.abbreviation} {goalInfo.awayScore}</label>
                        </p>
                    </div>
                    <div className={styles.goalTypeInfo} style={{backgroundColor: 'var(--light-grey)'}}>
                        <p style={{color: 'var(--black)', fontWeight: "bold"}}>{goalType}</p>
                    </div>
                </div>
                <div className={styles.goalInfoWrapper}>
                    <div className={styles.goalInfoTextWrapper}>
                    <p>{`GOAL: ${goalInfo.scorer.player} (${goalInfo.scorer.seasonTotal})`}</p>
                    <p>{`Assists: ${assists}`}</p>
                    </div>
                </div>
                <div className={styles.timeLineWrapper}>
                    <p>{goalTime} &nbsp; | &nbsp; {p[period]}</p>
                    <a href="https://www.youtube.com" target="_blank">
                        <div className={styles.playButton}></div>
                    </a>
                </div>
                <div className={styles.arrow}></div>
            </div>
        );
};

export default GoalInfoDialog;
