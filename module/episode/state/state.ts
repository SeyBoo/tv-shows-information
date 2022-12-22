import { Episode } from "../types/episode.interface";

interface EpisodesState {
  episodes: Episode[] | null;
}

const initialState: EpisodesState = {
  episodes: null,
};

export default initialState;
