import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {Autocomplete, Stack, TextField} from "@mui/material";
import {Filters} from "../../interfaces/CustomData.ts";
import {Roster, Team} from "../../interfaces/Teams.ts";

interface FiltersProps {
    selectedTeam?: Team;
    teams: Team[] | undefined;
    filters: Filters;
    setFilters: Dispatch<SetStateAction<Filters>>;
    setSelectedTeam: Dispatch<SetStateAction<Team | undefined>>;
    season: string[];
    goalType: string[];
}


const FiltersComponent: React.FC<FiltersProps> = ({setSelectedTeam, filters, setFilters, selectedTeam, teams, season, goalType}) => {
    const [players, setPlayers] = useState<Roster[] | undefined>();
    teams?.sort(function (a: Team, b: Team): number {
        const nameA = a.name.toUpperCase(); // Convert the name to uppercase for case-insensitive sorting
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    const allPlayersObject: Roster = {
        person: {id: 999, fullName: 'All players',  link: ''},
        position: {code: '', type: '', abbreviation: '', name: ''},
        jerseyNumber: '999'
    };
    const playerOptions: Roster[] = players ? [allPlayersObject].concat(players.map((player: Roster) => player)) : [allPlayersObject];

    useEffect(() => {
        const team: Team | undefined = teams?.find((t: Team) => t.id === filters.teamId);

        // TODO: Should reset player names selection but doesnt
        if (filters.teamId !== selectedTeam?.id) {
            const sortedPlayers = team?.roster.roster.sort((a: Roster,b: Roster) => {
                return Number(a.jerseyNumber) - Number(b.jerseyNumber);
            })
            setPlayers(sortedPlayers);
        }
    }, [selectedTeam, teams, filters, setSelectedTeam])

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
                    defaultValue={allPlayersObject}
                    getOptionLabel={(option: Roster) => getPlayerLabel(`${option.jerseyNumber} ${option.person.fullName}`)}
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
