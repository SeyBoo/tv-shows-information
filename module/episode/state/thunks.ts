import { AppThunk } from "../../../common/store";
import { getEpisodesBackend } from "../api";
import { FetchEpisodesProps } from "../types/episode.interface";
import { setEpisodes } from "./slice";

export const fetchEpisodes =
  ({ movieId, seasonNumber }: FetchEpisodesProps): AppThunk =>
  async (dispatch) => {
    const episodesBackend = await getEpisodesBackend();
    const episodes = await episodesBackend.fetchEpisodes({
      movieId,
      seasonNumber,
    });
    await dispatch(setEpisodes({ episodes }));
  };
