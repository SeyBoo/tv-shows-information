import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShowI } from "../types/show.interface";
import initialState from "./state";

interface AddNewShowPayload {
  show: ShowI;
}

interface SetPopularShows {
  shows: ShowI[];
}

export const showSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    addNewShow: (state, action: PayloadAction<AddNewShowPayload>) => {
      if (!state.selectedShows) {
        state.selectedShows = [action.payload.show];
      } else {
        state.selectedShows = [...state.selectedShows, action.payload.show];
      }
    },
    setPopularShows: (state, action: PayloadAction<SetPopularShows>) => {
      state.popularShows = action.payload.shows;
    },
  },
});

export const { addNewShow, setPopularShows } = showSlice.actions;
