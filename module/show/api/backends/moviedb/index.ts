import { ShowBackend } from "..";
import { getFromApi } from "../../../../../common/api/config";
import { ShowI } from "../../../types/show.interface";
import { ShowDetailsReponse, ShowResponse } from "./schema";
import { ShowApiRoutes } from "../../show.enum";

export default class MovieDBBackend implements ShowBackend {
  formatShow(show: ShowResponse): ShowI {
    const imagePathUrl = "http://image.tmdb.org/t/p/w500";

    return {
      id: show.id,
      image: imagePathUrl + show.poster_path,
      title: show.name,
    };
  }

  async fetchPopularShows(): Promise<ShowI[]> {
    const data: ShowDetailsReponse = await getFromApi(
      ShowApiRoutes.GET_POPULAR_SHOWS
    );

    const formatedShows: ShowI[] = await Promise.all(
      data.results.map((show) => this.formatShow(show))
    );

    return formatedShows;
  }
}
