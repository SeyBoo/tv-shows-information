import { EpisodesBackend } from "..";
import { getFromApi } from "../../../../../common/api/config";
import {
  Episode,
  FetchEpisodeProps,
  FetchEpisodesProps,
} from "../../../types/episode.interface";
import { EpisodeApiResponse, EpisodesApiResponse } from "./schema";

export default class MovieDBEpisodesBackend implements EpisodesBackend {
  async formatSeason(episode: EpisodeApiResponse): Promise<Episode> {
    const imagePathUrl = "http://image.tmdb.org/t/p/w500";

    return {
      id: episode.id,
      image: episode.still_path ? imagePathUrl + episode.still_path : null,
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

  async fetchEpisode({
    episodeNumber,
    movieId,
    seasonNumber,
  }: FetchEpisodeProps): Promise<Episode> {
    const data: EpisodeApiResponse = await getFromApi(
      `tv/${movieId}/season/${seasonNumber}/episode/${episodeNumber}`
    );

    const formatedEpisode: Episode = await this.formatSeason(data);

    return formatedEpisode;
  }
}
