import { ShowI } from "../types/show.interface";

interface ShowState {
  selectedShows: ShowI[] | null;
  popularShows: ShowI[] | null;
}

const initialState: ShowState = {
  selectedShows: null,
  popularShows: null,
};

export default initialState;
