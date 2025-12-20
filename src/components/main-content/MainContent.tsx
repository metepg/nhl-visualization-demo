import React, {useState} from 'react';
import styles from './MainContent.module.css';
import {Team} from "../../models/Teams.ts";
import {DEFAULT_FILTERS, GOAL_TYPE, SEASON} from "../../constants/defaultValues.ts";
import {Filters} from "../../models/CustomData.ts";
import {FilteredGame} from "../../models/GameData.ts";
import {getGameDataById} from "../../services/gameDataService.ts";
import Navbar from "../navbar/Navbar.tsx";
import ChooseComponent from "../choose-component/ChooseComponent.tsx";
import FiltersComponent from "../filters-component/FiltersComponent.tsx";
import NowVisualizing from "../now-visualizing/NowVisualizing.tsx";
import Content from "../content/Content.tsx";

interface Props {
    teams: Team[];
}
const MainContent: React.FC<Props> = ({teams}) => {
    const defaultTeam: Team = teams[5]; // Carolina Hurricanes
    const [filters, setFilters] = useState<Filters>({...DEFAULT_FILTERS, team: defaultTeam});
    const selectedTeamGames: FilteredGame[] = getGameDataById(filters.team?.id);

    return (
            <>
                <Navbar />
                <main className={styles.contentWrapper}>
                    <ChooseComponent />
                    <FiltersComponent
                        setFilters={setFilters}
                        season={SEASON}
                        goalType={GOAL_TYPE}
                        filters={filters}
                        teams={teams}
                    />
                    <hr style={{borderTop: '1px solid var(--dark-grey)'}}/>
                    <NowVisualizing filters={filters}/>
                    <section style={{marginBottom: '400px'}}>
                        <Content games={selectedTeamGames} filters={filters}/>
                    </section>
                </main>
            </>
    );
};

export default MainContent;
