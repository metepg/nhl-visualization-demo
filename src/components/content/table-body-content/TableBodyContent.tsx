import React, {ReactElement} from "react";
import {FilteredGame, Game, Goal, Periods} from "../../../interfaces/GameData.ts";
import GameSpecific from "../../game-specific/GameSpecific.tsx";
import {addCurrentScores, filterGoals, formatDate, groupGoalsByPeriod} from "../../../utils/helpers.ts";
import Timeline from "../../timeline/Timeline.tsx";
import Shootout from "../../shootout/Shootout.tsx";
import Result from "../../result/Result.tsx";
import {Filters} from "../../../interfaces/CustomData.ts";
import Row from "./Row.tsx";

interface TableRowValues {
    date: string;
    game: string;
    period1: ReactElement,
    period2: ReactElement,
    period3: ReactElement,
    OT: ReactElement,
    SO: ReactElement,
    result: ReactElement,
    expandedContent: ReactElement
}

interface Props {
    filters: Filters;
    games: Game[];
}

const TableBodyContent: React.FC<Props> = ({games, filters}) => {
    const tableBodyContent: TableRowValues[] = games.map((filteredGame: FilteredGame): TableRowValues => {
        const game = {...filteredGame, goals: addCurrentScores(filteredGame.goals, filteredGame.teams)}
        const {scores} = game;
        const filteredGoals: Goal[] = filterGoals(game.goals, filters);
        const goalsByPeriod: Periods = groupGoalsByPeriod(filteredGoals);
        const {period1, period2, period3, overtime} = goalsByPeriod;

        return {
            date: formatDate(game.startTime),
            game: `${game.teams.home.abbreviation}-${game.teams.away.abbreviation}`,
            period1: <Timeline goals={period1} filters={filters} game={game}/>,
            period2: <Timeline goals={period2} filters={filters} game={game}/>,
            period3: <Timeline goals={period3} filters={filters} game={game}/>,
            OT: <Timeline goals={overtime} filters={filters} game={game}/>,
            SO: <Shootout shootout={scores.shootout}/>,
            result: <Result game={game} filters={filters}/>,
            expandedContent: <GameSpecific game={game} goalsByPeriod={goalsByPeriod} filters={filters}/>
        }
    });


    const TABLE_ROWS = tableBodyContent.map((game: TableRowValues) => (
        <Row key={game.date} game={game}/>
    ));

    return (TABLE_ROWS);
}

export default TableBodyContent;
