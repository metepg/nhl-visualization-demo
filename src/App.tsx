import React, {useEffect, useState} from 'react';
import './styles.css';
import data from "./data"
import ContentHeader from "./components/content-header/ContentHeader.tsx";
import {Filters, GameData, Team} from "./interfaces.ts";
import Content from "./components/content/Content.tsx";
import FiltersComponent from "./components/filters-component/FiltersComponent.tsx";


const App: React.FC = () => {
    const teamData: Team[] = data.teams;
    const season = ['Regular Season 2022-23', 'Post-Season 2022-23'];
    const goalType = ['All goals', 'Power-play', 'Short-handed', 'Empty-net', 'Game-winning'];

    const [filteredData, setFilteredData] = useState<GameData[]>([]);
    const [selectedTeam, setSelectedTeam] = useState<Team>(teamData[0]);
    const [filters, setFilters] = useState<Filters>({
        team: teamData[0].name,
        player: teamData[0].players[0],
        season: season[0],
        goaltypefor: goalType[0],
        goaltypeagainst: goalType[0]
    });

    useEffect(() => {
        const he: Team = teamData.find((t) => t.name === filters.team)!;
        const filteredData: GameData[] = data.gameData.filter((item) => item.team === he.name);
        setSelectedTeam(he);
        setFilteredData(filteredData);
    }, [teamData, filters])

    return (
        <div className="content-wrapper">
            <FiltersComponent setSelectedTeam={setSelectedTeam} season={season} goalType={goalType} filters={filters}
                              setFilters={setFilters} selectedTeam={selectedTeam} teamData={teamData}/>
            <ContentHeader/>
            {filteredData.map((gameData: GameData) => (
                <Content filters={filters} key={gameData.game} events={gameData.events} date={gameData.date}/>
            ))}
        </div>
    );
};

export default App;
