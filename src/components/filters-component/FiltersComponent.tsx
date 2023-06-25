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


const FiltersComponent: React.FC<FiltersProps> = ({setSelectedTeam, filters, setFilters, selectedTeam, teams, season, goalType}) => {
    const [players, setPlayers] = useState<PlayerInfo[] | undefined>();
    teams?.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()));
    const playerOptions: PlayerInfo[] = players
        ? [ALL_PLAYERS_OBJECT].concat(players.map((player: PlayerInfo) => player))
        : [ALL_PLAYERS_OBJECT];

    useEffect(() => {
        const team = teams?.find(t => t.id === filters.teamId);

        // TODO: Should reset player names selection but doesnt
        if (filters.teamId !== selectedTeam?.id) {
            const sortedPlayers = team?.roster.roster.sort((a, b) => Number(a.jerseyNumber) - Number(b.jerseyNumber));
            setPlayers(sortedPlayers);
        }
    }, [selectedTeam, teams, filters, setSelectedTeam]);

    function filterEvents(key: string, value: string | number | undefined): void {
        if (!value) return;
        const updatedFilters: Filters = { ...filters, [key]: value };
        setFilters(updatedFilters);
    }

    const getPlayerLabel = (value: string): string => {
        return value.includes('999') ? value.replace(/[0-9]/g, '').trim() : value;
    }

    return (
        <Stack
            direction="row"
            justifyContent="space-evenly"
            spacing={1}
            mb={20}
        >
            <Stack sx={{width: 1060}} direction="column">
                <p style={{textAlign: 'center', fontWeight: 'bold'}}>Team</p>
                <Autocomplete
                    disablePortal
                    disableClearable
                    getOptionLabel={(option: Team) => option.name}
                    defaultValue={teams ? teams[5] : undefined}
                    options={teams ? teams : []}
                    onChange={(_, team: Team) => filterEvents("teamId", team.id)}
                    sx={{width: 240}}
                    renderInput={(params) => <TextField {...params} label={"Select"} />}
                />
            </Stack>
            <Stack sx={{width: 1060}} direction="column">
                <p style={{textAlign: 'center', fontWeight: 'bold'}}>Player</p>
                <Autocomplete
                    disablePortal
                    disableClearable
                    defaultValue={ALL_PLAYERS_OBJECT}
                    getOptionLabel={(option: PlayerInfo) => getPlayerLabel(`${option.jerseyNumber} ${option.person.fullName}`)}
                    options={playerOptions}
                    onChange={(_, player) => filterEvents("player", player.person.id)}
                    sx={{width: 240}}
                    renderInput={(params) => <TextField {...params} label={"Select player"} />}
                />
            </Stack>
            <Stack sx={{width: 1060}} direction="column">
                <p style={{textAlign: 'center', fontWeight: 'bold'}}>Season</p>
                <Autocomplete
                    disablePortal
                    disableClearable
                    defaultValue={season[0]}
                    options={season}
                    onChange={(_, value) => filterEvents("season", value)}
                    sx={{width: 240}}
                    renderInput={(params) => <TextField {...params} label={"Select"} />}
                />
            </Stack>
            <Stack sx={{width: 1060}} direction="column">
                <p style={{textAlign: 'center', fontWeight: 'bold'}}>Goals for</p>
                <Autocomplete
                    disablePortal
                    defaultValue={goalType[0]}
                    disableClearable
                    options={goalType}
                    onChange={(_, value) => filterEvents("goaltypefor", value)}
                    sx={{width: 160}}
                    renderInput={(params) => <TextField {...params} label={"Select"} />}
                />
            </Stack>
            <Stack sx={{width: 1060}} direction="column">
                <p style={{textAlign: 'center', fontWeight: 'bold'}}>Goals against</p>
                <Autocomplete
                    disablePortal
                    disableClearable
                    defaultValue={goalType[0]}
                    options={goalType}
                    onChange={(_, value) => filterEvents("goaltypeagainst", value)}
                    sx={{width: 160}}
                    renderInput={(params) => <TextField {...params} label={"Select"} />}
                />
            </Stack>
        </Stack>
    );
};

export default FiltersComponent;
