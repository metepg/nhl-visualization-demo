import {Goal, Periods} from "../interfaces/GameData.ts";
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

export const shortenGoalTypeName = (value: string | null | undefined): string => {
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
    const selectedTeam = filters.team?.abbreviation;
    const goalTypeAgainst = shortenGoalTypeName(filters.goaltypeagainst);
    return goals.filter((goal: Goal): boolean => {
        const isPlayerSelected = filters.player !== 999 && filters.player !== goal.scorer.playerId;

        // Filter by player
        if (isPlayerSelected) return false;

        // Filter selected team's goals based on goaltypefor
        if (selectedTeam && filters.goaltypefor !== 'All goals' && goal.team === selectedTeam && goal.strength !== shortenGoalTypeName(filters.goaltypefor))
            return false;

        if (filters.goaltypeagainst !== 'All goals') {
            // If selected team's goal, ignore the goaltypeagainst filter
            if (selectedTeam && goal.team === selectedTeam) return true;

            // Filter other teams' goals based on goaltypeagainst
            return goal.strength === goalTypeAgainst && goal.team !== selectedTeam;
        }

        return true;
    });
}