import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import CustomSelect from "../custom-select/CustomSelect.tsx";
import {Stack} from "@mui/material";
import {Filters, Team} from "../../interfaces.ts";

interface FiltersProps {
    selectedTeam: Team;
    teamData: Team[];
    filters: Filters;
    setFilters: Dispatch<SetStateAction<Filters>>;
    setSelectedTeam: Dispatch<SetStateAction<Team>>;
    season: string[];
    goalType: string[];
}


const FiltersComponent: React.FC<FiltersProps> = ({setSelectedTeam, filters, setFilters, selectedTeam, teamData, season, goalType}) => {
    const teamNames: string[] = teamData.map((t: Team) => t.name);
    const [players, setPlayers] = useState<string[]>(selectedTeam.players);

    useEffect(() => {
        const teamz: Team = teamData.find((t) => t.name === filters.team)!;
        if (filters.team !== selectedTeam.name) {
            setPlayers(teamz.players);
            setSelectedTeam(teamz);
        }
    }, [selectedTeam, teamData, filters, setSelectedTeam])

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

    function filterEvents(key: string, value: string) {
        if (key === 'goaltypefor' || key === 'goaltypeagainst') value = shortenValueName(value);
        if (key === 'player' && value !== 'All players') value = value.split(' ')[0];
        const updatedFilters: Filters = { ...filters, [key.toLowerCase()]: value };
        setFilters(updatedFilters);
    }

    return (
        <Stack
            direction="row"
            justifyContent="space-evenly"
            spacing={1}
            mb={5}
        >
            <CustomSelect filterKey={"team"} filterEvents={filterEvents} content={teamNames} label={"Select"} header={"Team"} width={240}/>
            <CustomSelect filterKey={"player"} filterEvents={filterEvents} content={players} label={"Select player"} header={"Player"} width={240}/>
            <CustomSelect filterKey={"season"} filterEvents={filterEvents} content={season} label={"Select season"} header={"Season"} width={240}/>
            <CustomSelect filterKey={"goaltypefor"} filterEvents={filterEvents} content={goalType} label={"Select"} header={"Goals for"} width={160}/>
            <CustomSelect filterKey={"goaltypeagainst"} filterEvents={filterEvents} content={goalType} label={"Select"} header={"Goals against"} width={160}/>
        </Stack>
    );
};

export default FiltersComponent;
