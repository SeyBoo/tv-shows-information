import { useQuery, UseQueryResult } from "react-query";
import { ShowI } from "../types/show.interface";
import { getShowsBackend } from "./backends";
import { ShowApiRoutes } from "./show.enum";

export const useGetPopularShows = (): UseQueryResult<ShowI[]> => {
  const getPopularShows = async (): Promise<ShowI[]> => {
    const showsBackend = await getShowsBackend();
    const data = await showsBackend.fetchPopularShows();
    return data;
  };

  return useQuery(ShowApiRoutes.GET_POPULAR_SHOWS, getPopularShows);
};
