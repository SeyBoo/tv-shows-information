import { useQuery, UseQueryResult } from "react-query";
import {
  Episode,
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

