import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Season } from "../types/season.interface";
import initialState from "./state";

interface SetSeasonsPayload {
  seasons: Season[];
}

export const seasonsSlice = createSlice({
  name: "seasons",
  initialState,
  reducers: {
    setSeasons: (state, action: PayloadAction<SetSeasonsPayload>) => {
      state.seasons = action.payload.seasons;
    },
  },
});

export const { setSeasons } = seasonsSlice.actions;
