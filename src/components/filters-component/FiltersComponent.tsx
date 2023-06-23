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
    const teamNames: string[] | undefined = teams?.map((t: Team) => t.name).sort();
    const allPlayersObject: Roster = {
        person: {id: 999, fullName: 'All players',  link: ''},
        position: {code: '', type: '', abbreviation: '', name: ''},
        jerseyNumber: '9999'
    };
    const playerOptions: Roster[] = players ? [allPlayersObject].concat(players.map((player: Roster) => player)) : [allPlayersObject];

    useEffect(() => {
        const team: Team | undefined = teams?.find((t: Team) => t.name === filters.team);

        // TODO: Should reset player names selection but doesnt
        if (filters.team !== selectedTeam?.name) {
            const sortedPlayers = team?.roster.roster.sort((a: Roster,b: Roster) => {
                return a.person.fullName.toLowerCase() > b.person.fullName.toLowerCase() ? 1 : -1;
            })
            setPlayers(sortedPlayers);
        }
    }, [selectedTeam, teams, filters, setSelectedTeam])

    function shortenValueName(value: string): string {
        value = value.toLowerCase().replace(/[^a-z]/g, '');
        const shortened: { [key: string]: string } = {
            allgoals: 'AG',
            powerplay: 'PP',
            shorthanded: 'SH',
            emptynet: 'EN',
            gamewinning: 'GW'
        };
        return shortened[value];
    }

    function filterEvents(key: string, value: any): void {
        if (key === 'goaltypefor' || key === 'goaltypeagainst') value = shortenValueName(value);
        const updatedFilters: Filters = { ...filters, [key]: value };
        setFilters(updatedFilters);
    }

    const getPlayerLabel = (value: string): string => {
        return value.includes('9999') ? value.replace(/[0-9]/g, '').trim() : value;
    }

    return (
        <Stack
            direction="row"
            justifyContent="space-evenly"
            spacing={1}
            mb={5}
        >
            <Stack sx={{width: 1060}} direction="column">
                <p style={{textAlign: 'center', fontWeight: 'bold'}}>Team</p>
                <Autocomplete
                    disablePortal
                    disableClearable
                    getOptionLabel={(option: string) => option}
                    defaultValue={teamNames ? teamNames[0] : ''}
                    options={teamNames ? teamNames : []}
                    onChange={(_, value) => filterEvents("team", value)}
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
                    getOptionLabel={(option: Roster) => getPlayerLabel(`${option.person.fullName} ${option.jerseyNumber} `)}
                    options={playerOptions}
                    onChange={(_, value) => filterEvents("player", value.jerseyNumber)}
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
