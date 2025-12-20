import React, { useState } from 'react';
import styles from './MainContent.module.css';
import { DEFAULT_FILTERS, GOAL_TYPE, SEASON } from "../../constants/defaultValues.ts";
import { Filters } from "../../models/CustomData.ts";
import { FilteredGame } from "../../models/GameData.ts";
import { getGameDataById } from "../../services/gameDataService.ts";
import Navbar from "../navbar/Navbar.tsx";
import ChooseComponent from "../choose-component/ChooseComponent.tsx";
import FiltersComponent from "../filters-component/FiltersComponent.tsx";
import NowVisualizing from "../now-visualizing/NowVisualizing.tsx";
import Content from "../content/Content.tsx";
import { Team } from "../../models/liiga/Team.ts";
import playersJSON from '../../../demo-data/playerData.json';
import { Player } from "../../models/liiga/Player.ts";

interface Props {
  teams: Team[];
}

const MainContent: React.FC<Props> = ({teams}) => {
  const defaultTeam: Team = teams[0];
  const [filters, setFilters] = useState<Filters>({...DEFAULT_FILTERS, team: defaultTeam});
  const selectedTeamGames: FilteredGame[] = getGameDataById(filters.team?.data.id);
  const players = playersJSON as Player[];

  return (
    <>
      <Navbar/>
      <main className={styles.contentWrapper}>
        <ChooseComponent/>
        <FiltersComponent
          setFilters={setFilters}
          season={SEASON}
          goalType={GOAL_TYPE}
          filters={filters}
          teams={teams}
          players={players}
        />
        <hr style={{borderTop: '1px solid var(--dark-grey)'}}/>
        <NowVisualizing filters={filters} players={players}/>
        <section style={{marginBottom: '400px'}}>
          <Content games={selectedTeamGames} filters={filters}/>
        </section>
      </main>
    </>
  );
};

export default MainContent;
