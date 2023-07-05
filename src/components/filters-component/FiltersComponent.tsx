import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {Autocomplete, Stack, TextField} from "@mui/material";
import {Filters} from "../../interfaces/CustomData.ts";
import {PlayerInfo, Team} from "../../interfaces/Teams.ts";
import {ALL_PLAYERS_OBJECT} from "../../constants/defaultValues.ts";

interface FiltersProps {
    filters: Filters;
    goalType: string[];
    season: string[];
    selectedTeam?: Team;
    setFilters: Dispatch<SetStateAction<Filters>>;
    setSelectedTeam: Dispatch<SetStateAction<Team | undefined>>;
    teams: Team[] | undefined;
}

const FiltersComponent: React.FC<FiltersProps> = ({
                                                      setSelectedTeam,
                                                      filters,
                                                      setFilters,
                                                      selectedTeam,
                                                      teams,
                                                      season,
                                                      goalType
                                                  }) => {
    const [players, setPlayers] = useState<PlayerInfo[] | undefined>();
    const playerOptions: PlayerInfo[] = players
        ? [ALL_PLAYERS_OBJECT].concat(players.map((player: PlayerInfo) => player))
        : [ALL_PLAYERS_OBJECT];

    const selectOptions = [
        {label: 'Team', key: 'teamId', options: teams, width: 240},
        {label: 'Player', key: 'player', options: playerOptions, width: 240},
        {label: 'Season', key: 'season', options: season, width: 240},
        {label: 'Goals for', key: 'goaltypefor', options: goalType, width: 160},
        {label: 'Goals against', key: 'goaltypeagainst', options: goalType, width: 160},
    ]

    useEffect(() => {
        const team = teams?.find((t: Team): boolean => t.id === filters.teamId);

        // TODO: Should reset player names selection but doesnt
        if (filters.teamId !== selectedTeam?.id) {
            const sortedPlayers = team?.roster?.roster.sort((a: PlayerInfo, b: PlayerInfo) => Number(a.jerseyNumber) - Number(b.jerseyNumber));
            setPlayers(sortedPlayers);
        }
    }, [selectedTeam, teams, filters, setSelectedTeam]);

    function filterEvents(key: string, value: string | number | Team | PlayerInfo | undefined): void {
        if (!value) return;
        const updatedFilters: Filters = {...filters, [key]: value};
        setFilters(updatedFilters);
    }

    // For setting Carolina as default selected team
    // Could be removed and also the defaultValue from select options
    function isTeam(value: string | number | Team | PlayerInfo | undefined) {
        if (typeof value === 'object' && 'name' in value) return value;
    }


    const getPlayerLabel = (value: string): string => {
        return value.includes('999') ? value.replace(/[0-9]/g, '').trim() : value;
    }

    return (
        <Stack direction="row" justifyContent="space-evenly" spacing={1} mb={20}>
            {selectOptions.map((filter) => (
                <Stack key={filter.key} sx={{width: 1060}} direction="column">
                    <p style={{textAlign: 'center', fontWeight: 'bold'}}>{filter.label}</p>
                    <Autocomplete
                        disablePortal
                        disableClearable
                        getOptionLabel={(option: Team | PlayerInfo | string): string => {
                            if (typeof option === 'string') return option;
                            if ('name' in option) return option.name;
                            return getPlayerLabel(`${option.jerseyNumber || ''} ${option.person.fullName}`);
                        }}
                        defaultValue={filter.options?.[5] && isTeam(filter.options[5]) ? filter.options[5] : filter.options?.[0]}
                        options={filter.options ?? []}
                        onChange={(_, value: Team | PlayerInfo | string) => {
                            if (typeof value === 'object' && 'name' in value) return filterEvents(filter.key, value.id);
                            if (typeof value === 'object' && 'jerseyNumber' in value && 'person' in value) return filterEvents(filter.key, value.person.id);
                            return filterEvents(filter.key, value);
                        }}
                        sx={{width: filter.width}}
                        renderInput={(params) => <TextField {...params} label="Select"/>}
                    />
                </Stack>
            ))}
        </Stack>
    );
};

export default FiltersComponent;

