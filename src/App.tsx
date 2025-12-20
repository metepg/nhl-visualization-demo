import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import {getPlayers, getTeamData} from "./services/teamService.ts";
import {Player, Roster, Team} from "./interfaces/Teams.ts";
import {CircularProgress} from "@mui/material";
import MainContent from "./components/main-content/MainContent.tsx";


const App: React.FC = () => {
    const [teams, setTeams] = useState<Team[]>([]);
    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {
        (async (): Promise<void> => {
            const teams: Team[] = await getTeamData();
            const roster: Roster = await getPlayers('ANA');
            const allPlayers = [...roster.goalies, ...roster.defensemen, ...roster.forwards].sort((a, b) => a.sweaterNumber - b.sweaterNumber);
            setTeams(teams);
            setPlayers(allPlayers);
        })();
    }, []);

    const fetchPlayers = async (teamName: string): Promise<void> => {
        const roster: Roster = await getPlayers(teamName);
        const allPlayers = [...roster.goalies, ...roster.defensemen, ...roster.forwards].sort((a, b) => a.sweaterNumber - b.sweaterNumber);
        setPlayers(allPlayers);
    };

    const isLoading = teams?.length === 0;

    return (
        isLoading
            ? <div className={styles.loadingIconContainer}><CircularProgress /></div>
            : <MainContent teams={teams} players={players} fetchPlayers={fetchPlayers}/>
    );
};

export default App;
