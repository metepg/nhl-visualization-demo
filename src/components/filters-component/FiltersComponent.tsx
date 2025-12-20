import React, { Dispatch, SetStateAction } from 'react';
import styles from './FiltersComponent.module.css';
import { Autocomplete, Stack, TextField } from "@mui/material";
import { Filters } from "../../models/CustomData.ts";
import { ALL_PLAYERS_OBJECT } from "../../constants/defaultValues.ts";
import { Team } from "../../models/liiga/Team.ts";
import playersJSON from '../../../demo-data/playerData.json';
import { filterPlayersByTeam } from "../../utils/helpers.ts";
import { Player } from "../../models/liiga/Player.ts";

interface Props {
  filters: Filters;
  goalType: string[];
  season: string[];
  selectedTeam?: Team;
  setFilters: Dispatch<SetStateAction<Filters>>;
  teams: Team[] | undefined;
}

type OptionValue = Team | Player | string | number;

const FiltersComponent: React.FC<Props> = ({filters, setFilters, teams, season, goalType}) => {
  const teamId = filters.team?.data.id;
  const players = playersJSON as Player[];

  // Sort players by jersey number and set option 'All players' as first
  const sortedPlayers: Player[] = teamId ? filterPlayersByTeam(players, teamId) : [];
  console.log(sortedPlayers);

  const playerOptions: Player[] = sortedPlayers
    ? [ALL_PLAYERS_OBJECT].concat(sortedPlayers)
    : [ALL_PLAYERS_OBJECT];

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
    console.log("updatedFilters", updatedFilters);
    setFilters(updatedFilters);
  }

  // Option 'All players' has jersey number 999. This removes it
  function getPlayerLabel(player: Player): string {
    const value = `${player.jersey || ''} ${player.firstName} ${player.lastName}`;
    return value.replace(/999/g, '').trim();
  }

  function getOptionLabel(filterKey: string, value: OptionValue): string {
    if (filterKey === 'team') return (value as Team).name;
    if (filterKey === 'player') return getPlayerLabel(value as Player);
    return String(value);
  }

  function handleChange(filterKey: string, value: OptionValue,) {
    if (filterKey === 'team') return filterEvents(filterKey, value as Team);
    if (filterKey === 'player') return filterEvents(filterKey, (value as Player).id);
    return filterEvents(filterKey, value);
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
              defaultValue={filterOption.options?.[0]}
              options={filterOption.options ?? []}
              onChange={(_, value: OptionValue) => handleChange(filterOption.key, value)}
              sx={{width: filterOption.width}}
              renderInput={(params) => <TextField {...params}  label="" inputProps={{...params.inputProps, readOnly: true}} />}
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

