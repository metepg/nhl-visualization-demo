import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import { getTeamData } from "./services/teamService.ts";
import { CircularProgress } from "@mui/material";
import MainContent from "./components/main-content/MainContent.tsx";
import { Team } from "./models/Team.ts";

const App: React.FC = () => {
  const [teams, setTeams] = useState<Team[] | null>(null);

  useEffect(() => {
    (async (): Promise<void> => {
      const response = await getTeamData();
      const teams = Object.values(response.data)[0]
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name, 'fi'));
      setTeams(teams);
    })();
  }, []);

  const isLoading = !teams;

  return (
    isLoading
      ? <div className={styles.loadingIconContainer}><CircularProgress/></div>
      : <MainContent teams={teams}/>
  );
};

export default App;
