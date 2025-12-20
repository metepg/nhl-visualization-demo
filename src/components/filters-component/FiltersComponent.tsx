import React, { Dispatch, SetStateAction } from 'react';
import styles from './FiltersComponent.module.css';
import { FormControl, MenuItem, Select, Stack } from "@mui/material";
import { Filters } from "../../models/CustomData.ts";
import { ALL_PLAYERS_OBJECT, GOAL_TYPE, SEASON } from "../../constants/defaultValues.ts";
import { Team } from "../../models/liiga/Team.ts";
import { filterPlayersByTeam } from "../../utils/helpers.ts";
import { Player } from "../../models/liiga/Player.ts";

interface Props {
  filters: Filters;
  goalType: string[];
  players: Player[];
  season: string[];
  setFilters: Dispatch<SetStateAction<Filters>>;
  teams: Team[] | undefined;
}

type SelectOption<K extends FilterKey> = {
  label: string;
  key: K;
  options: Filters[K][];
  width: number;
};
type OptionValue = Team | Player | string | number;
type FilterKey = keyof Filters;

const FiltersComponent: React.FC<Props> = ({filters, setFilters, teams, season, goalType, players}) => {
  const teamId = filters.team?.data.id;

  // Sort players by jersey number and set option 'All players' as first
  const sortedPlayers: Player[] = teamId ? filterPlayersByTeam(players, teamId) : [];

  const playerOptions: Player[] = sortedPlayers
    ? [ALL_PLAYERS_OBJECT].concat(sortedPlayers)
    : [ALL_PLAYERS_OBJECT];

  const selectOptions: SelectOption<FilterKey>[] = [
    {label: 'Team', key: 'team', options: teams ?? [], width: 240},
    {label: 'Player', key: 'player', options: playerOptions, width: 240},
    {label: 'Season', key: 'season', options: season, width: 240},
    {label: 'Goals for', key: 'goaltypefor', options: goalType, width: 160},
    {label: 'Goals against', key: 'goaltypeagainst', options: goalType, width: 160},
  ];

  const disabledOptions: string[] = ['Post-Season 2022-23', 'Game-winning', 'Empty-net'];

  // Option 'All players' has jersey number 999. This removes it
  function getPlayerLabel(player: Player | number | undefined): string {
    if (!player || typeof player === 'number') return 'All players';

    const value = `${player.jersey || ''} ${player.firstName} ${player.lastName}`;
    return value.replace(/999/g, '').trim();
  }

  function getOptionLabel(filterKey: string, value: OptionValue): string {
    if (filterKey === 'team') {
      return (value as Team).name;
    }
    if (filterKey === 'player') {
      return getPlayerLabel(value as Player);
    }
    return String(value);
  }

  function isPlayer(option: unknown): option is Player {
    return typeof option === 'object' && option !== null && 'id' in option;
  }

  function isTeam(option: unknown): option is Team {
    return typeof option === 'object' && option !== null && 'data' in option;
  }

  function handleChange<K extends FilterKey>(filterKey: K, value: Filters[K]) {
    switch (filterKey) {
      case 'team':
        setFilters(prev => ({
          ...prev,
          team: value as Team,
          player: ALL_PLAYERS_OBJECT,
          season: SEASON[0],
          goaltypefor: GOAL_TYPE[0],
          goaltypeagainst: GOAL_TYPE[0]
        }));
        break;

      case 'player':
        setFilters(prev => ({
          ...prev,
          player: value as Player,
        }));
        break;

      default:
        setFilters(prev => ({
          ...prev,
          [filterKey]: value,
        }));
    }
  }

  function getOptionKey(option: string | Team | Player): string | number {
    if (typeof option === 'string') {
      return option;
    }

    if (isPlayer(option)) {
      return option.id;
    }

    return option.name;
  }

  if (!filters.team) return null;

  return (
    <Stack
      className={styles.filterContentStyles}
      direction="row"
      justifyContent="space-evenly"
      spacing={1}
      mb={20}
    >
      {selectOptions.map((filterOption) => {
        const options = filterOption.options ?? [];

        const selectedIndex = options.findIndex(option => {
          const filterValue = filters[filterOption.key];

          if (isPlayer(option) && isPlayer(filterValue)) {
            return option.id === filterValue.id;
          }

          if (isTeam(option) && isTeam(filterValue)) {
            return option.data.id === filterValue.data.id;
          }

          if (typeof option === 'string') {
            return option === filterValue;
          }

          return false;
        });

        return (
          <Stack
            className={styles.filterTeamStyles}
            key={filterOption.key}
            sx={{width: 1060}}
            direction="column"
          >
            <p style={{textAlign: 'center', fontWeight: 'normal', textTransform: 'uppercase'}}>
              {filterOption.label}
            </p>

            <FormControl sx={{width: filterOption.width}}>
              <Select
                value={selectedIndex === -1 ? 0 : selectedIndex}
                renderValue={(idx) => getOptionLabel(filterOption.key, options[idx])}
                onChange={(e) =>
                  handleChange(filterOption.key, options[e.target.value as number])
                }
              >
                {options.map((option, index) => (
                  <MenuItem
                    key={getOptionKey(option)}
                    value={index}
                    disabled={typeof option === 'string' && disabledOptions.includes(option)}
                  >
                    {getOptionLabel(filterOption.key, option)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        );
      })}
    </Stack>

  );
};

export default FiltersComponent;
