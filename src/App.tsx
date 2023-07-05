import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
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
    DEFAULT_TEAM_ID,
    GOAL_TYPE,
    SEASON
} from "./constants/defaultValues.ts";
import {CircularProgress} from "@mui/material";
import ChooseComponent from "./components/choose-component/ChooseComponent.tsx";
import Navbar from "./components/navbar/Navbar.tsx";


const App: React.FC = () => {
    const [teams, setTeams] = useState<Team[]>();
    const [filters, setFilters] = useState<Filters>({
        team: null,
        teamId: DEFAULT_TEAM_ID,
        player: DEFAULT_PLAYER,
        season: DEFAULT_SEASON,
        goaltypefor: DEFAULT_GOAL_TYPE_FOR,
        goaltypeagainst: DEFAULT_GOAL_TYPE_AGAINST
    });
    const [selectedTeamGames, setSelectedTeamGames] = useState<FilteredGame[]>([]);
    const [selectedTeam, setSelectedTeam] = useState<Team | undefined>();
    const isLoading = !teams;

    useEffect(() => {
        (async () => {
            const teams: Team[] = await getTeamData();
            const teamsSortedAlphabetically: Team[] = teams
                .sort((a: Team, b: Team) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()));

            setTeams(teamsSortedAlphabetically);
            setFilters({
                team: teamsSortedAlphabetically[5],
                teamId: DEFAULT_TEAM_ID,
                player: DEFAULT_PLAYER,
                season: DEFAULT_SEASON,
                goaltypefor: DEFAULT_GOAL_TYPE_FOR,
                goaltypeagainst: DEFAULT_GOAL_TYPE_AGAINST
            })
        })();
    }, []);

    useEffect(() => {
        const team: Team | undefined = teams?.find((t: Team): boolean => t.id === filters.teamId);
        const gamesByTeam: FilteredGame[] = getGameDataById(filters.teamId);

        setSelectedTeam(team);
        setSelectedTeamGames(gamesByTeam);

        setFilters(prevFilters => ({
            ...prevFilters,
            team: selectedTeam ?? prevFilters.team
        }));
    }, [selectedTeam, teams, filters.teamId]);

    return (
        isLoading ?
            <div className={styles.container}>
                <CircularProgress/>
            </div>
            :
            <div>
                <Navbar/>
                <div className={styles.contentWrapper}>

                    {/*Choose to get started component*/}
                    <ChooseComponent/>

                    {/*Filters*/}
                    <FiltersComponent
                        selectedTeam={selectedTeam}
                        setFilters={setFilters}
                        setSelectedTeam={setSelectedTeam}
                        season={SEASON}
                        goalType={GOAL_TYPE}
                        filters={filters}
                        teams={teams}/>
                    <hr style={{border: '1px solid var(--dark-grey)'}}/>

                    {/*Selected Filters text*/}
                    <NowVisualizing filters={filters}/>

                    {/*Game data with headers*/}
                    <div style={{marginBottom: '400px'}}>
                        <Content games={selectedTeamGames} filters={filters}/>
                    </div>
                </div>
            </div>
    );
};

export default App;
