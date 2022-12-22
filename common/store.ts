import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { episodesSlice } from "../module/episode/state/slice";
import { seasonsSlice } from "../module/seasons/store/slice";
import { showSlice } from "../module/show/store/slice";

const store = configureStore({
  reducer: {
    [showSlice.name]: showSlice.reducer,
    [seasonsSlice.name]: seasonsSlice.reducer,
    [episodesSlice.name]: episodesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppSelector = typeof store.getState;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
