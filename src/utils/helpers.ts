import {Goal, Periods, Scores} from "../interfaces/GameData.ts";
import {Filters} from "../interfaces/CustomData.ts";

export const formatDate = (dateString: string): string => {
    const date: Date = new Date(dateString);
    const monthAbbreviation: string = date.toLocaleString('en-US', {month: 'short'}).toUpperCase();
    const day: number = date.getDate();
    return `${monthAbbreviation} ${day}`;
}
export const timeInSeconds = (minutes: number | undefined, seconds: number | undefined): number => {
    if ((minutes === 0 && !seconds) || (!minutes && !seconds)) return 0;
    return (minutes || 0) * 60 + (seconds || 0);
};

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
    const selectedTeam: string | undefined = filters.team?.abbreviation;
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

export const extractWinnerData = (data: Scores): string | null => {
    let highestGoals = 0;
    let winner = null;

    for (const team in data) {
        if (team !== "overtime" && team !== "shootout") {
            const goals = data[team] as number | undefined;

            if (typeof goals === 'number' && goals > highestGoals) {
                highestGoals = goals;
                winner = team;
            }
        }
    }
    return winner;
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