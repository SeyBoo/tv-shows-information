import { FetchEpisodesProps, Episode } from "../../../types/episode.interface";
import { EpisodesBackend } from "..";
import { DummyEpisodesData } from "./dummy-data";

export default class DummyEpisodesBackend implements EpisodesBackend {
  async fetchEpisodes({
    movieId,
    seasonNumber,
  }: FetchEpisodesProps): Promise<Episode[]> {
    return DummyEpisodesData;
  }
}
