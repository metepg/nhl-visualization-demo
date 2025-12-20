import {Game, Goal, Periods, Teams} from "../models/GameData.ts";
import {Filters} from "../models/CustomData.ts";
import { Player } from "../models/liiga/Player.ts";

export const formatDate = (dateString: string): string => {
    const date: Date = new Date(dateString);
    const monthAbbreviation: string = date.toLocaleString('en-US', {month: 'short'}).toUpperCase();
    const day: number = date.getDate();
    return `${monthAbbreviation} ${day}`;
}

export const getCirclePosition = (periodInMinutes = 20, goalMinutes = 0, goalSeconds = 0): string => {
    const goalTime: number = goalTimeInSeconds(goalMinutes, goalSeconds);
    const periodDurationInSeconds: number = periodInMinutes * 60;
    const circlePosition: number = Math.floor((goalTime / periodDurationInSeconds) * 100);
    return `${circlePosition}%`;
};

export const goalTimeInSeconds = (minutes = 0, seconds = 0) => {
    return minutes * 60 + seconds;
}

export const goalTypeShort = (value: string | null | undefined): string => {
    if (!value) return '';
    value = value?.toLowerCase().replace(/[^a-z]/g, '');
    const shortened: { [key: string]: string } = {
        allgoals: 'AG',
        powerplay: 'PPG',
        shorthanded: 'SHG',
        emptynet: 'EN',
        gamewinning: 'GW'
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

export const groupGoalsByPeriod = (goals: Goal[]): Periods => {
    const periods: Periods = {
        period1: [],
        period2: [],
        period3: [],
        overtime: []
    };

    if (!goals || goals.length === 0) return periods;

    for (const goal of goals) {
        const period: string = goal.period;
        if (period === "SO") continue;
        if (period === "OT") periods.overtime.push(goal)
        else periods[`period${period}`].push(goal);
    }
    return periods;
}


export const filterGoals = (goals: Goal[], filters: Filters) => {
    const selectedTeam: string | undefined = filters.team?.name;
    const goalTypeAgainst: string = goalTypeShort(filters.goaltypeagainst);
    const goalTypeFor: string = goalTypeShort(filters.goaltypefor);
    return goals.map((goal: Goal): Goal => {
        const isPlayerSelected: boolean = filters.player === 999 || filters.player === goal.scorer.playerId;
        const goalTypeSelectedTeam: boolean = filters.goaltypefor === 'All goals' || goalTypeFor === goal.strength;
        const goalTypeOtherTeam: boolean = filters.goaltypeagainst === 'All goals' || goal.strength === goalTypeAgainst;
        const isSelectedTeamsGoal: boolean = goal.team === selectedTeam;

        return {
            ...goal,
            showGoal:
                (isSelectedTeamsGoal && isPlayerSelected && goalTypeSelectedTeam) ||
                (!isSelectedTeamsGoal && goalTypeOtherTeam)
        };
    });
};

export const getAssistLastNames = (goal: Goal): string[] => {
    const assistNames: string[] = [];

    if (goal.assists) {
        for (const assist of goal.assists) {
            const playerLastName = assist.player.split(' ')[1];
            const assistName = `${playerLastName} (${assist.seasonTotal})`;
            assistNames.push(assistName);
        }
    }

    return assistNames;
};

export const sortGoals = (goals: Goal[]): Goal[] => {
    return goals.sort((a: Goal, b: Goal): number => {
        const periodMap: { [key: string]: number } = {
            '1': 1,
            '2': 2,
            '3': 3,
            'OT': 4,
            'SO': 5,
        };
        const periodA: number = periodMap[a.period];
        const periodB: number = periodMap[b.period];
        const goalTimeA: number = goalTimeInSeconds(a.min, a.sec);
        const goalTimeB: number = goalTimeInSeconds(b.min, b.sec);

        // Sort by period and time, with shootout goals last
        return periodA - periodB || goalTimeA - goalTimeB || (a.period === 'SO' ? 1 : -1);
    });
}
export const addCurrentScores = (goals?: Goal[], teams?: Teams): Goal[] => {
    if (!goals || !teams) return [];
    const sortedGoals = sortGoals(goals);
    let homeScore = 0;
    let awayScore = 0;

    return sortedGoals.map((goal: Goal, index: number) => {
        const { team } = goal;
        const isHomeTeam: boolean = team === teams.home.abbreviation;
        const isAwayTeam: boolean = team === teams.away.abbreviation;

        goal.homeScore = isHomeTeam ? ++homeScore : homeScore;
        goal.awayScore = isAwayTeam ? ++awayScore : awayScore;
        goal.currentGoal = index + 1;
        return goal;
    });
};

export const getWinnerFromGameStats = (game: Game, selectedTeamName: string | undefined): string | null => {
    const scores = game.scores;
    if (!selectedTeamName) return null;

    const opposingTeamName = Object.keys(scores).find(name => name !== selectedTeamName);
    if (!opposingTeamName) return null;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return scores[selectedTeamName] > scores[opposingTeamName]
        ? selectedTeamName
        : opposingTeamName;
}

export const filterPlayersByTeam = (players: Player[], teamId: number | undefined): Player[] => {
  if (teamId === undefined || teamId === null) {
    return [];
  }

  return players.filter((player: Player) => player.teamId.startsWith(`${teamId}:`))
    .slice()
    .sort((a, b) => a.jersey - b.jersey);
};
