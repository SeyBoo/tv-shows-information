import { EpisodesBackend } from "..";
import { getFromApi } from "../../../../../common/api/config";
import { Episode, FetchEpisodesProps } from "../../../types/episode.interface";
import { EpisodeApiResponse, EpisodesApiResponse } from "./schema";

export default class MovieDBEpisodesBackend implements EpisodesBackend {
  async formatSeason(episode: EpisodeApiResponse): Promise<Episode> {
    const imagePathUrl = "http://image.tmdb.org/t/p/w500";

    return {
      id: episode.id,
      image: imagePathUrl + episode.still_path,
      title: episode.name,
      episodeNumber: episode.episode_number,
      overview: episode.overview,
      runtime: episode.runtime,
    };
  }

  async fetchEpisodes({
    movieId,
    seasonNumber,
  }: FetchEpisodesProps): Promise<Episode[]> {
    const data: EpisodesApiResponse = await getFromApi(
      `tv/${movieId}/season/${seasonNumber}`
    );

    const formatedSeasons: Episode[] = await Promise.all(
      data.episodes.map((episode) => this.formatSeason(episode))
    );

    return formatedSeasons;
  }
}
