import React from 'react';
import {FilteredGame, Goal} from "../../interfaces/GameData.ts";
import styles from './GoalInfoDialog.module.css';
import {extractWinnerData, getAssistLastNames, goalTypeLong} from "../../utils/helpers.ts";
import {Filters} from "../../interfaces/CustomData.ts";

interface GoalInfoProps {
    filters?: Filters;
    game?: FilteredGame;
    goalInfo?: Goal;
}

const GoalInfoDialog: React.FC<GoalInfoProps> = ({goalInfo, game}) => {
    if (!goalInfo || !game) return null;
    const {teams, scores} = game;
    const {home, away} = teams;
    const winner = extractWinnerData(scores);
    const goalType: string = goalInfo.strength
        ? goalTypeLong(goalInfo.strength)
        : 'GOAL';


    // TODO: Change these
    type period = {
        [key: string]: string;
    };
    const {period} = goalInfo;
    const p: period = {
        1: '1st',
        2: '2nd',
        3: '3rd'
    }

    const assists: string = getAssistLastNames(goalInfo).join(', ');
    const goalTime = `${goalInfo.min}:${goalInfo.sec}`

        return (
            <div className={styles.overlay}>
                <div className={styles.goalTypeWrapper}>
                    <div style={{backgroundColor: 'var(--red)', color: 'var(--white)', borderRight: '1px solid var(--black)'}}>
                        <p>
                           <label style={{fontWeight: winner === home.abbreviation ? 'bold' : 'normal'}}>{home.abbreviation} {scores[home.abbreviation]}</label>
                            &nbsp;-&nbsp;
                            <label style={{fontWeight: winner === away.abbreviation ? 'bold' : 'normal'}}>{away.abbreviation} {scores[away.abbreviation]}</label>
                        </p>
                    </div>
                    <div style={{backgroundColor: 'var(--light-grey)'}}>
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
                    <p>{goalTime} &nbsp; | &nbsp; {p[period]} period</p>
                    <a href="https://www.youtube.com" target="_blank">
                        <div className={styles.playButton}></div>
                    </a>
                </div>
                <div className={styles.arrow}></div>
            </div>
        );
};

export default GoalInfoDialog;
