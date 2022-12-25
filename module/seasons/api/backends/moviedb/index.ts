import { SeasonBackend } from "..";
import { getFromApi } from "../../../../../common/api/config";
import { Season } from "../../../types/season.interface";
import { SeasonsApiRoutes } from "../../seasons.enum";
import { MovieDetailsResponse, SeasonReponse } from "./schema";

export default class MovieDBSeason implements SeasonBackend {
  async formatSeason(season: SeasonReponse): Promise<Season> {
    const imagePathUrl = "http://image.tmdb.org/t/p/w500";

    return {
      id: season.id,
      image: season.poster_path ? imagePathUrl + season.poster_path : null,
      name: season.name,
      season_number: season.season_number,
    };
  }

  async fetchSeasons(showId: number): Promise<Season[]> {
    const data: MovieDetailsResponse = await getFromApi(
      `${SeasonsApiRoutes.GET_SEASONS}${showId}`
    );

    const formatedSeasons: Season[] = await Promise.all(
      data.seasons.map((season) => this.formatSeason(season))
    );

    return formatedSeasons;
  }
}
