import { games } from "../../demo-data/gameData_2_WEEK.ts"
import { Game } from "../models/GameData.ts";

const extractTeamId = (teamId: string): number =>
  Number(teamId.split(":")[0]);

export const getGameDataById = (teamId?: number | null): Game[] =>
  games.filter((game: Game) =>
    extractTeamId(game.homeTeam.teamId) === teamId ||
    extractTeamId(game.awayTeam.teamId) === teamId
  );
