import React, {Dispatch, SetStateAction} from 'react';
import {Autocomplete, Stack, TextField} from "@mui/material";
import {Filters} from "../../interfaces/CustomData.ts";
import {PlayerInfo, Team} from "../../interfaces/Teams.ts";
import {ALL_PLAYERS_OBJECT} from "../../constants/defaultValues.ts";

interface Props {
    filters: Filters;
    goalType: string[];
    season: string[];
    selectedTeam?: Team;
    setFilters: Dispatch<SetStateAction<Filters>>;
    teams: Team[] | undefined;
}

type OptionValue = Team | PlayerInfo | string | number;

const FiltersComponent: React.FC<Props> = ({filters, setFilters, teams, season, goalType}) => {
    // Sort players by jersey number and set option 'All players' as first
    const sortedPlayers: PlayerInfo[] | undefined = filters.team?.roster?.roster.sort((a: PlayerInfo, b: PlayerInfo) => Number(a.jerseyNumber) - Number(b.jerseyNumber));
    const playerOptions: PlayerInfo[] = sortedPlayers
        ? [ALL_PLAYERS_OBJECT].concat(sortedPlayers)
        : [ALL_PLAYERS_OBJECT];

    const selectOptions = [
        {label: 'Team', key: 'team', options: teams, width: 240},
        {label: 'Player', key: 'player', options: playerOptions, width: 240},
        {label: 'Season', key: 'season', options: season, width: 240},
        {label: 'Goals for', key: 'goaltypefor', options: goalType, width: 160},
        {label: 'Goals against', key: 'goaltypeagainst', options: goalType, width: 160}
    ];

    // Event handler for filter changes
    function filterEvents(key: string, value: OptionValue | undefined): void {
        const updatedFilters: Filters = {...filters, [key]: value};
        setFilters(updatedFilters);
    }

    // Option 'All players' has jersey number 999. This removes it
    function getPlayerLabel(player: PlayerInfo): string {
        const value = `${player.jerseyNumber || ''} ${player.person.fullName}`;
        return value.replace(/999/g, '').trim();
    }

    function getOptionLabel(filterKey: string, value: OptionValue): string {
        if (filterKey === 'team') return (value as Team).name;
        if (filterKey === 'player') return getPlayerLabel(value as PlayerInfo);
        return String(value);
    }

    function handleChange(filterKey: string, value: OptionValue,) {
        if (filterKey === 'team') return filterEvents(filterKey, value as Team);
        if (filterKey === 'player') return filterEvents(filterKey, (value as PlayerInfo).person.id);
        return filterEvents(filterKey, value);
    }

    if (!filters.team) return null;

    return (
        <section>
            <Stack direction="row" justifyContent="space-evenly" spacing={1} mb={20}>
                {selectOptions.map((filterOption) => (
                    <Stack key={filterOption.key} sx={{width: 1060}} direction="column">
                        <p style={{textAlign: 'center', fontWeight: 'bold'}}>{filterOption.label}</p>
                        <Autocomplete
                            disablePortal
                            disableClearable
                            getOptionLabel={(value: OptionValue) => getOptionLabel(filterOption.key, value)}
                            // Set Carolina as default team
                            defaultValue={filterOption.key === 'team' ? filterOption.options?.[5] : filterOption.options?.[0]}
                            options={filterOption.options ?? []}
                            onChange={(_, value: OptionValue) => handleChange(filterOption.key, value)}
                            sx={{width: filterOption.width}}
                            renderInput={(params) => <TextField {...params} label="Select"/>}
                        />
                    </Stack>
                ))}
            </Stack>
        </section>
    );
};

export default FiltersComponent;

