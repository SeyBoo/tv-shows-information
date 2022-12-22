import { Episode, FetchEpisodesProps } from "../types/episode.interface";

export interface EpisodesBackend {
  fetchEpisodes: ({
    movieId,
    seasonNumber,
  }: FetchEpisodesProps) => Promise<Episode[]>;
}
let episodesBackendInstace: EpisodesBackend | undefined;

export async function getEpisodesBackend(): Promise<EpisodesBackend> {
  if (episodesBackendInstace === undefined) {
    const mod = await import(
      "./backends/" + process.env.NEXT_PUBLIC_BACKEND_TYPE
    );
    episodesBackendInstace = new mod.default() as EpisodesBackend;
  }
  return episodesBackendInstace;
}
