import {
  Episode,
  FetchEpisodeProps,
  FetchEpisodesProps,
} from "../../types/episode.interface";

export interface EpisodesBackend {
  fetchEpisodes: ({
    movieId,
    seasonNumber,
  }: FetchEpisodesProps) => Promise<Episode[]>;

  fetchEpisode: ({
    movieId,
    seasonNumber,
    episodeNumber,
  }: FetchEpisodeProps) => Promise<Episode>;
}
let episodesBackendInstace: EpisodesBackend | undefined;

export async function getEpisodesBackend(): Promise<EpisodesBackend> {
  if (episodesBackendInstace === undefined) {
    const mod = await import("./" + process.env.NEXT_PUBLIC_BACKEND_TYPE);
    episodesBackendInstace = new mod.default() as EpisodesBackend;
  }
  return episodesBackendInstace;
}
