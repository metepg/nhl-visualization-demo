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
import NowVisualizing from "./components/now-visualizing/NowVisualizing.tsx";
import {
    DEFAULT_GOAL_TYPE_AGAINST,
    DEFAULT_GOAL_TYPE_FOR,
    DEFAULT_PLAYER,
    DEFAULT_SEASON,
    DEFAULT_TEAM_ID, GOAL_TYPE, SEASON
} from "./constants/defaultValues.ts";
import {CircularProgress} from "@mui/material";


const App: React.FC = () => {
    const [teams, setTeams] = useState<Team[]>();
    const [filters, setFilters] = useState<Filters>({
        team: teams ? teams[5] : null,
        teamId: DEFAULT_TEAM_ID,
        player: DEFAULT_PLAYER,
        season: DEFAULT_SEASON,
        goaltypefor: DEFAULT_GOAL_TYPE_FOR,
        goaltypeagainst: DEFAULT_GOAL_TYPE_AGAINST
    });
    const [filteredData, setFilteredData] = useState<FilteredGame[]>([]);
    const [selectedTeam, setSelectedTeam] = useState<Team | undefined>();

    useEffect(() => {
        (async () => {
            try {
                const teamDataResponse = await getTeamData();
                const teamsSortedAlphabetically = teamDataResponse.data.teams
                    .sort((a: Team, b: Team) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()));

                setTeams(teamsSortedAlphabetically);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();
    }, []);

    useEffect(() => {
        const team: Team | undefined = teams?.find((t: Team): boolean => t.id === filters.teamId);
        const gameData: FilteredGame[] = getGameDataById(filters.teamId);

        if (selectedTeam) filters.team = selectedTeam;

        setSelectedTeam(team);
        setFilteredData(gameData);
    }, [selectedTeam, teams, filters])


    return (
        !teams ?
            <div className='container'>
                <CircularProgress/>
            </div>
            : <div className="content-wrapper">
                {/*Filters*/}
                <FiltersComponent
                    selectedTeam={selectedTeam}
                    setFilters={setFilters}
                    setSelectedTeam={setSelectedTeam}
                    season={SEASON}
                    goalType={GOAL_TYPE}
                    filters={filters}
                    teams={teams}/>
                <hr/>

                {/*Selected Filters text*/}
                <NowVisualizing filters={filters}/>

                {/*Game data with headers*/}
                <ContentHeader/>
                {filteredData.map((game: FilteredGame) =>
                    <Content filters={filters} key={game.startTime} events={game}/>
                )}
            </div>
    );
};

export default App;
