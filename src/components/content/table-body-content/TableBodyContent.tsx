import React, {ReactElement, useState} from "react";
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
    teams: ReactElement;
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
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [hoveredRow, setHoveredRow] = useState<string>();

    const handleRowClick = (date: string) => {
        setSelectedRows((prevSelectedRows: string[]): string[] => {
            const isSelected: boolean = prevSelectedRows.includes(date);
            return isSelected
                ? prevSelectedRows.filter((selectedDate) => selectedDate !== date)
                : [...prevSelectedRows, date];
        });
    };

    const handleRowHover = (date: string, isHovered: boolean) => {
        setHoveredRow(isHovered ? date : '');
    };

    const tableBodyContent: TableRowValues[] = games.map((filteredGame: FilteredGame): TableRowValues => {
        const game = { ...filteredGame, goals: addCurrentScores(filteredGame.goals, filteredGame.teams) };
        const filteredGoals: Goal[] = filterGoals(game.goals, filters);
        const goalsByPeriod: Periods = groupGoalsByPeriod(filteredGoals);
        const date: string = formatDate(game.startTime);
        const isSelectedGame: boolean = selectedRows.includes(date);
        const isHovered: boolean = date === hoveredRow;
        const isSelectedTeam = filters.team?.abbreviation === game.teams.home.abbreviation;
        const teams =
            <>
                <span style={{ color: isSelectedTeam ? 'var(--red)' : 'var(--black)' }}>{game.teams.home.abbreviation}</span>
                {' - '}
                <span style={{ color: isSelectedTeam ? 'var(--black)' : 'var(--red)' }}>{game.teams.away.abbreviation}</span>
            </>
        return {
            date,
            teams,
            period1: <Timeline goals={goalsByPeriod.period1} filters={filters} game={game} selectedRowDate={isSelectedGame} isHoveredRow={isHovered} />,
            period2: <Timeline goals={goalsByPeriod.period2} filters={filters} game={game} selectedRowDate={isSelectedGame} isHoveredRow={isHovered} />,
            period3: <Timeline goals={goalsByPeriod.period3} filters={filters} game={game} selectedRowDate={isSelectedGame} isHoveredRow={isHovered} />,
            OT: <Timeline goals={goalsByPeriod.overtime} filters={filters} game={game} selectedRowDate={isSelectedGame} isHoveredRow={isHovered} />,
            SO: <Shootout game={game} filters={filters} />,
            result: <Result game={game} filters={filters} />,
            expandedContent: <GameSpecific game={game} goalsByPeriod={goalsByPeriod} filters={filters} />,
        };
    });


    const TABLE_ROWS = tableBodyContent.map((game: TableRowValues) => (
        <Row
            key={game.date}
            game={game}
            selected={selectedRows.includes(game.date)}
            onClick={() => handleRowClick(game.date)}
            setHoveredRow={handleRowHover}
        />
    ));

    return (TABLE_ROWS);
}

export default TableBodyContent;
