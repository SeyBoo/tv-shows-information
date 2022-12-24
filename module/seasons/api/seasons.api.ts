import { useQuery, UseQueryResult } from "react-query";
import { getSeasonsBackend } from "./backends";
import { Season } from "../types/season.interface";
import { SeasonsApiRoutes } from "./seasons.enum";

export const useGetSeasons = (showId: string): UseQueryResult<Season[]> => {
  const getSeasons = async (): Promise<Season[]> => {
    const seasonsBackend = await getSeasonsBackend();
    const data = await seasonsBackend.fetchSeasons(showId);
    return data;
  };

  return useQuery(SeasonsApiRoutes.GET_SEASONS, getSeasons);
};
