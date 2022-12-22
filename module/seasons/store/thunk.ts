import { AppThunk } from "../../../common/store";
import { getSeasonsBackend } from "../api";
import { setSeasons } from "./slice";

export const fetchSeasons =
  (showId: string): AppThunk =>
  async (dispatch) => {
    const seasonsBackend = await getSeasonsBackend();
    const seasons = await seasonsBackend.fetchSeasons(showId);
    await dispatch(setSeasons({ seasons }));
  };
