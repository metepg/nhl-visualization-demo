import data from '../gameData_MONTH.ts'
import { FilteredGame, Game, GamesData } from "../models/GameData.ts";

export const getGameDataById=(teamID: number | undefined | null): FilteredGame[] =>
  data.demoGamesData
    .flatMap((data: GamesData) =>
      data.games.filter((game: Game) =>
        game.teams.home.id === teamID || game.teams.away.id === teamID));