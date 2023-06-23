import React, {useEffect, useState} from 'react';
import './styles.css';
import data from "./data"
import ContentHeader from "./components/content-header/ContentHeader.tsx";
import {Filters, GameData} from "./interfaces/CustomData.ts";
import Content from "./components/content/Content.tsx";
import FiltersComponent from "./components/filters-component/FiltersComponent.tsx";
import {getTeamData} from "./services/teamService.ts";
import {Team} from "./interfaces/Teams.ts";


const App: React.FC = () => {
    const [teams, setTeams] = useState<Team[]>();
    const season = ['Regular Season 2022-23', 'Post-Season 2022-23'];
    const goalType = ['All goals', 'Power-play', 'Short-handed', 'Empty-net', 'Game-winning'];
    const [filters, setFilters] = useState<Filters>({
        team: 'Carolina Hurricanes',
        player: '9999', // This is the value for 'All players'
        season: 'Regular Season 2022-23',
        goaltypefor: 'All goals',
        goaltypeagainst: 'All goals'
    });

    const [filteredData, setFilteredData] = useState<GameData[]>([]);
    const chosen: Team | undefined = teams?.find((t: Team): boolean => t.name === filters.team);
    const [selectedTeam, setSelectedTeam] = useState<Team | undefined>(chosen);

    useEffect(() => {
        (async () => {
            try {
                const response = await getTeamData();
                setTeams(response.data.teams);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();
    }, []);

    useEffect(() => {
        const team: Team | undefined = teams?.find((t: Team): boolean => t.name.toLowerCase() === filters.team?.toLowerCase());
        const filteredData: GameData[] = data.gameData.filter((item: GameData)=> item.team === team?.name);
        setSelectedTeam(team);
        setFilteredData(filteredData);
    }, [teams, filters])

    return (
        !teams ? null :
        <div className="content-wrapper">
            <FiltersComponent
                selectedTeam={selectedTeam}
                setFilters={setFilters}
                setSelectedTeam={setSelectedTeam}
                season={season}
                goalType={goalType}
                filters={filters}
                teams={teams}/>
            <ContentHeader/>
            {filteredData.map((gameData: GameData) => (
                <Content filters={filters} key={gameData.game} events={gameData.events} date={gameData.date}/>
            ))}
        </div>
    );
};

export default App;
