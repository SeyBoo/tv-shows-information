import { useQuery, UseQueryResult } from "react-query";
import {
  Episode,
  FetchEpisodeProps,
  FetchEpisodesProps,
} from "../types/episode.interface";
import { getEpisodesBackend } from "./backends";
import { EpisodeApiRoutes } from "./episode.enum";

export const useGetEpisodes = ({
  movieId,
  seasonNumber,
}: FetchEpisodesProps): UseQueryResult<Episode[]> => {
  const getEpisodes = async (): Promise<Episode[]> => {
    const episodesBackend = await getEpisodesBackend();
    const data = await episodesBackend.fetchEpisodes({ movieId, seasonNumber });
    return data;
  };

  return useQuery(EpisodeApiRoutes.GET_EPISODES, getEpisodes);
};

export const useGetEpisode = ({
  movieId,
  seasonNumber,
  episodeNumber,
}: FetchEpisodeProps): UseQueryResult<Episode> => {
  const getEpisode = async (): Promise<Episode> => {
    const episodesBackend = await getEpisodesBackend();
    const data = await episodesBackend.fetchEpisode({
      movieId,
      seasonNumber,
      episodeNumber,
    });
    return data;
  };

  return useQuery(EpisodeApiRoutes.GET_EPISODE, getEpisode);
};
