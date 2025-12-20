import React from 'react';
import styles from './Result.module.css'
import { Filters } from "../../models/CustomData.ts";
import { PlayedGame } from "../../models/liiga/GameData.ts";

interface Props {
  game: PlayedGame;
  filters: Filters;
}

const Result: React.FC<Props> = ({game, filters}) => {
  const {homeTeam, awayTeam} = game

  const selectedTeamName = filters.team?.name;

  const homeGoals = homeTeam.goals;
  const awayGoals = awayTeam.goals;

  const selectedTeamIsWinner =
    selectedTeamName ===
    (homeGoals > awayGoals
      ? homeTeam.teamName
      : awayGoals > homeGoals
        ? awayTeam.teamName
        : undefined);

  return (
    <div
      className={styles.result}
      style={{
        backgroundColor: selectedTeamIsWinner ? 'var(--red)' : 'var(--black)',
        border: selectedTeamIsWinner
          ? '1px solid var(--red)'
          : '1px solid var(--black)',
      }}
    >
      {homeGoals}-{awayGoals}
    </div>
  );
};

export default Result;
