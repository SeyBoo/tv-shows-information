import { AppThunk } from "../../../common/store";
import { getShowsBackend } from "../api";
import { ShowI } from "../types/show.interface";
import { addNewShow, setPopularShows } from "./slice";

export const selectNewShow =
  ({ show }: { show: ShowI }): AppThunk =>
  async (dispatch) => {
    await dispatch(addNewShow({ show }));
  };

export const fetchPopularShows = (): AppThunk => async (dispatch) => {
  const showsBackend = await getShowsBackend();
  const shows = await showsBackend.fetchPopularShows();
  await dispatch(setPopularShows({ shows }));
};
