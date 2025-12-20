import React, {Dispatch, SetStateAction} from 'react';
import styles from './FiltersComponent.module.css';
import {Autocomplete, Stack, TextField} from "@mui/material";
import {Filters} from "../../interfaces/CustomData.ts";
import {Player, Team} from "../../interfaces/Teams.ts";
import {ALL_PLAYERS_OBJECT} from "../../constants/defaultValues.ts";

interface Props {
    filters: Filters;
    goalType: string[];
    season: string[];
    selectedTeam?: Team;
    setFilters: Dispatch<SetStateAction<Filters>>;
    teams: Team[];
    players: Player[];
    fetchPlayers: (teamName: string) => Promise<void>
}

type OptionValue = Team | Player | string | number;

const FiltersComponent: React.FC<Props> = ({filters, setFilters, teams, season, goalType, players, fetchPlayers}) => {
    // Sort players by jersey number and set option 'All players' as first
    const playerOptions: Player[] = [ALL_PLAYERS_OBJECT].concat(players);
    console.log(players)

    const selectOptions = [
        {label: 'Team', key: 'team', options: teams, width: 240},
        {label: 'Player', key: 'player', options: playerOptions, width: 240},
        {label: 'Season', key: 'season', options: season, width: 240},
        {label: 'Goals for', key: 'goaltypefor', options: goalType, width: 160},
        {label: 'Goals against', key: 'goaltypeagainst', options: goalType, width: 160}
    ];

    const disabledOptions: string[] = ['Post-Season 2022-23', 'Game-winning', 'Empty-net'];

    // Event handler for filter changes
    function filterEvents(key: string, value: OptionValue | undefined): void {
        const updatedFilters: Filters = {...filters, [key]: value};
        setFilters(updatedFilters);
    }

    // Option 'All players' has jersey number 999. This removes it
    function getPlayerLabel(player: Player): string {
        const value = `${player.sweaterNumber || ''} ${player?.firstName.default} ${player?.lastName.default}`;
        return value.replace(/999/g, '').trim();
    }

    function getOptionLabel(filterKey: string, value: OptionValue): string {
        if (filterKey === 'team') return (value as Team).fullName;
        if (filterKey === 'player') return getPlayerLabel(value as Player);
        return String(value);
    }

    function handleChange(filterKey: string, value: OptionValue) {
        let eventValue = value;

        if (typeof value === 'object' && 'franchiseId' in value) {
            void fetchPlayers(value.rawTricode);
        } else if (typeof value === 'object' && 'sweaterNumber' in value) {
            eventValue = (value as Player).id;
        }

        return filterEvents(filterKey, eventValue);
    }

    if (!filters.team) return null;

    return (
        <section>
                <Stack className={styles.filterContentStyles} direction="row" justifyContent="space-evenly" spacing={1} mb={20}>
                    {selectOptions.map((filterOption) => (
                        <Stack className={styles.filterTeamStyles} key={filterOption.key} sx={{width: 1060}} direction="column">
                            <p style={{textAlign: 'center', fontWeight: 'normal', textTransform: 'uppercase'}}>{filterOption.label}</p>
                            <Autocomplete
                                disablePortal
                                disableClearable
                                getOptionLabel={(value: OptionValue) => getOptionLabel(filterOption.key, value)}
                                // Set Carolina as default team
                                // defaultValue={filterOption.key === 'team' ? filterOption.options?.[0] : filterOption.options?.[0]}
                                defaultValue={filterOption.options?.[0]}
                                options={filterOption.options ?? []}
                                onChange={(_, value: OptionValue) => handleChange(filterOption.key, value)}
                                sx={{width: filterOption.width}}
                                renderInput={(params) => <TextField {...params} label=""/>}
                                getOptionDisabled={(option: OptionValue): boolean => {
                                    return typeof option === 'string' && disabledOptions.includes(option);
                                }}
                            />
                        </Stack>
                    ))}
                </Stack>
              
        </section>
    );
};

export default FiltersComponent;

