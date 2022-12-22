import { Season } from "../types/season.interface";

interface SeasonState {
  seasons: Season[] | null;
}

const initialState: SeasonState = {
  seasons: null,
};

export default initialState;
