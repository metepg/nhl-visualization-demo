import React, {useEffect, useState} from 'react';
import './styles.css';
import ContentHeader from "./components/content-header/ContentHeader.tsx";
import {Filters} from "./interfaces/CustomData.ts";
import Content from "./components/content/Content.tsx";
import FiltersComponent from "./components/filters-component/FiltersComponent.tsx";
import {getTeamData} from "./services/teamService.ts";
import {Team} from "./interfaces/Teams.ts";
import {getGameDataById} from "./services/gameDataService.ts";
import {FilteredGame} from "./interfaces/GameData.ts";


const App: React.FC = () => {
    const season = ['Regular Season 2022-23', 'Post-Season 2022-23'];
    const goalType = ['All goals', 'Power-play', 'Short-handed', 'Empty-net', 'Game-winning'];
    const [teams, setTeams] = useState<Team[]>();
    const [filters, setFilters] = useState<Filters>({
        team: teams ? teams[5] : null,
        teamId: 12,
        player: 999, // Value for 'All players'
        season: 'Regular Season 2022-23',
        goaltypefor: 'All goals',
        goaltypeagainst: 'All goals'
    });
    const [filteredData, setFilteredData] = useState<FilteredGame[]>([]);
    const chosen: Team | undefined = teams?.find((t: Team): boolean => t.id === filters.teamId);
    const [selectedTeam, setSelectedTeam] = useState<Team | undefined>(chosen);

    useEffect(() => {
        (async () => {
            try {
                const teamDataResponse = await getTeamData();
                setTeams(teamDataResponse.data.teams);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();
    }, []);

    useEffect(() => {
        const team: Team | undefined = teams?.find((t: Team): boolean => t.id === filters.teamId);
        const gamezData: FilteredGame[] = getGameDataById(filters.teamId);
        setSelectedTeam(team);
        setFilteredData(gamezData);
        if (selectedTeam) {
            filters.team = selectedTeam;
        }
    }, [selectedTeam , teams, filters])



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
            {filteredData.map((game: FilteredGame) =>
                <Content filters={filters} key={game.startTime} events={game} />
            )}
        </div>
    );
};

export default App;
