import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Episode } from "../types/episode.interface";
import initialState from "./state";

interface SetEpisodesPayload {
  episodes: Episode[];
}

export const episodesSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {
    setEpisodes: (state, action: PayloadAction<SetEpisodesPayload>) => {
      state.episodes = action.payload.episodes;
    },
  },
});

export const { setEpisodes: setSeasons } = episodesSlice.actions;
