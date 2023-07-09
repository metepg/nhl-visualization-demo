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
    DEFAULT_FILTERS,
    GOAL_TYPE,
    SEASON
} from "./constants/defaultValues.ts";
import {CircularProgress} from "@mui/material";
import ChooseComponent from "./components/choose-component/ChooseComponent.tsx";
import Navbar from "./components/navbar/Navbar.tsx";


const App: React.FC = () => {
    const [teams, setTeams] = useState<Team[]>([]);
    const defaultTeam: Team = teams?.[5];
    const [filters, setFilters] = useState<Filters>({...DEFAULT_FILTERS, team: defaultTeam});
    const selectedTeamGames: FilteredGame[] = getGameDataById(filters.team?.id);

    useEffect(() => {
        (async (): Promise<void> => {
            const teams: Team[] = await getTeamData();
            setTeams(teams);
        })();
    }, []);

    useEffect(() => {
        setFilters((prevFilters: Filters): Filters => ({...prevFilters, team: filters.team || defaultTeam}));
    }, [defaultTeam, teams, filters.team]);

    return (
        !filters.team
            ? <div className={styles.container}><CircularProgress/></div>
            : <div>
                <Navbar/>
                <div className={styles.contentWrapper}>

                    {/*Choose to get started component*/}
                    <ChooseComponent/>

                    {/*Filters*/}
                    <FiltersComponent
                        setFilters={setFilters}
                        season={SEASON}
                        goalType={GOAL_TYPE}
                        filters={filters}
                        teams={teams}
                    />
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
