import React from 'react';
import styles from './GoalInfoDialog.module.css';
import { goalTypeLong } from "../../utils/helpers.ts";
import { FilteredGoalEvent, PlayedGame } from "../../models/GameData.ts";

interface Props {
  game?: PlayedGame;
  goalInfo?: FilteredGoalEvent;
  isSelectedTeam: boolean;
}

const GoalInfoDialog: React.FC<Props> = ({goalInfo, game, isSelectedTeam}) => {
  if (!goalInfo || !game) {
    return null;
  }
  const {homeTeam, awayTeam} = game;

  const goalType =
    goalInfo.strength
      ? goalTypeLong(goalInfo.strength)
      : 'GOAL';

  const periodLabels: Record<number, string> = {
    1: '1st period',
    2: '2nd period',
    3: '3rd period',
  };

  const periodText = periodLabels[goalInfo.period] ?? 'Overtime';

  const assists = goalInfo.assistantPlayers
    ?.map(a => a.lastName)
    .join(', ') ?? '—';

  const scorerName = goalInfo.scorerPlayer
    ? `${goalInfo.scorerPlayer.firstName} ${goalInfo.scorerPlayer.lastName}`
    : 'Unknown';

  const seconds = goalInfo.gameTime;
  const goalTime = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;

  return (
    <div className={styles.overlay}>
      <div className={styles.goalTypeWrapper}>
        <div
          className={styles.scoreInfo}
          style={{
            backgroundColor: isSelectedTeam ? 'var(--red)' : 'var(--black)',
            color: 'var(--white)',
            borderRight: '1px solid var(--black)',
          }}
        >
          <p>
            <label
              style={{
                fontWeight:
                  goalInfo.teamName === homeTeam.teamName
                    ? 'bold'
                    : 'normal',
              }}
            >
              {homeTeam.teamName.slice(0,3).toUpperCase()} {goalInfo.homeTeamScore}</label>
            &nbsp;-&nbsp;
            <label
              style={{
                fontWeight:
                  goalInfo.teamName === awayTeam.teamName
                    ? 'bold'
                    : 'normal',
              }}
            >
              {awayTeam.teamName.slice(0,3).toUpperCase()} {goalInfo.awayTeamScore}
            </label>
          </p>
        </div>

        <div
          className={styles.goalTypeInfo}
          style={{ backgroundColor: 'var(--light-grey)' }}
        >
          <p style={{ color: 'var(--black)', fontWeight: 'bold' }}>
            {goalType}
          </p>
        </div>
      </div>

      <div className={styles.goalInfoWrapper}>
        <div className={styles.goalInfoTextWrapper}>
          <p>{`GOAL: ${scorerName}`}</p>
          <p>{`Assists: ${assists}`}</p>
        </div>
      </div>

      <div className={styles.timeLineWrapper}>
        <p>
          {goalTime} &nbsp; | &nbsp; {periodText}
        </p>
        {goalInfo.videoClipUrl && (
          <a href={goalInfo.videoClipUrl} target="_blank" rel="noreferrer">
            <div className={styles.playButton}></div>
          </a>
        )}
      </div>

      <div className={styles.arrow}></div>
    </div>
  );
};

export default GoalInfoDialog;
