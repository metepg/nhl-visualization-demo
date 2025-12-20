import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import {getTeamData} from "./services/teamService.ts";
import {Team} from "./models/Teams.ts";
import {CircularProgress} from "@mui/material";
import MainContent from "./components/main-content/MainContent.tsx";


const App: React.FC = () => {
    const [teams, setTeams] = useState<Team[] | null>(null);

    useEffect(() => {
        (async (): Promise<void> => {
            const teams: Team[] = await getTeamData();
            setTeams(teams);
        })();
    }, []);

    const isLoading = !teams;

    return (
        isLoading
            ? <div className={styles.loadingIconContainer}><CircularProgress /></div>
            : <MainContent teams={teams} />
    );
};

export default App;
