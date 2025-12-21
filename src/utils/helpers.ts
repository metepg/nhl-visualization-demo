import { Player } from "../models/liiga/Player.ts";
import { FilteredGoalEvent, GoalEvent, Periods } from "../models/liiga/GameData.ts";
import { Filters } from "../models/liiga/Filters.ts";

export const formatDate = (dateString: string): string => {
    const date: Date = new Date(dateString);
    const monthAbbreviation: string = date.toLocaleString('en-US', {month: 'short'}).toUpperCase();
    const day: number = date.getDate();
    return `${monthAbbreviation} ${day}`;
}

export const getCirclePosition = (periodInMinutes: number, secondsIntoPeriod: number): string => {
  const periodSeconds = periodInMinutes * 60;
  const pct = Math.max(0, Math.min(secondsIntoPeriod / periodSeconds, 1));
  return `${pct * 100}%`;
};

export const goalTypeShort = (value: string | null | undefined): string => {
    if (!value) return '';
    value = value?.toLowerCase().replace(/[^a-z]/g, '');
    const shortened: { [key: string]: string } = {
        allgoals: 'AG',
        powerplay: 'YV',
        powerplay2: 'YV2',
        shorthanded: 'AV',
        emptynet: 'TM',
        gamewinning: 'VT'
    };
    return shortened[value] || '';
}

export const goalTypeLong = (value: string | null | undefined): string => {
    if (!value) return '';
    const long: { [key: string]: string } = {
        PPG: 'POWER-PLAY -GOAL',
        SHG: 'SHORT-HANDED -GOAL',
        EN: 'EMPTY NET',
        GW: 'GAME-WINNING -GOAL'
    };
    return long[value?.toString().toUpperCase()] || '';
}

export const groupGoalsByPeriod = (goals: FilteredGoalEvent[]): Periods => {
  const periods: Periods = {
    period1: [],
    period2: [],
    period3: [],
    overtime: [],
  };

  if (!goals?.length) return periods;

  for (const goal of goals) {
    switch (goal.period) {
      case 1:
        periods.period1.push(goal);
        break;
      case 2:
        periods.period2.push(goal);
        break;
      case 3:
        periods.period3.push(goal);
        break;
      default:
        periods.overtime.push(goal);
    }
  }

  return periods;
};


export const filterGoals = (
  homeTeamName: string,
  awayTeamName: string,
  homeGoals: GoalEvent[],
  awayGoals: GoalEvent[],
  filters: Filters
): FilteredGoalEvent[] => {

  const selectedTeam = filters.team?.name;
  const goalTypeAgainst = goalTypeShort(filters.goaltypeagainst);
  const goalTypeFor = goalTypeShort(filters.goaltypefor);

  const evaluateGoal = (goal: GoalEvent, teamName: string): FilteredGoalEvent => {
    const strength = goal.goalTypes[0] ?? 'EV';
    const isPlayerSelected = filters.player.id === 999 || filters.player.id === goal.scorerPlayerId;
    const goalTypeSelectedTeam = filters.goaltypefor === 'All goals' || goalTypeFor === strength;
    const goalTypeOtherTeam = filters.goaltypeagainst === 'All goals' || strength === goalTypeAgainst;
    const isSelectedTeamsGoal = teamName === selectedTeam;

    return {
      ...goal,
      teamName,
      strength,
      showGoal:
        (isSelectedTeamsGoal && isPlayerSelected && goalTypeSelectedTeam) ||
        (!isSelectedTeamsGoal && goalTypeOtherTeam),
    };
  };

  return [
    ...homeGoals.map(goalEvent => evaluateGoal(goalEvent, homeTeamName)),
    ...awayGoals.map(goalEvent => evaluateGoal(goalEvent, awayTeamName)),
  ];
};

export const filterPlayersByTeam = (players: Player[], teamId: number | undefined): Player[] => {
  if (teamId === undefined || teamId === null) {
    return [];
  }

  return players.filter((player: Player) => player.teamId.startsWith(`${teamId}:`))
    .slice()
    .sort((a, b) => a.jersey - b.jersey);
};
