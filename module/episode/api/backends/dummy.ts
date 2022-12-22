import { EpisodesBackend } from "..";
import { FetchEpisodesProps, Episode } from "../../types/episode.interface";
import { DummyEpisodesData } from "./dummy-data";

export default class DummyEpisodesBackend implements EpisodesBackend {
  async fetchEpisodes({
    movieId,
    seasonNumber,
  }: FetchEpisodesProps): Promise<Episode[]> {
    return DummyEpisodesData;
  }
}
