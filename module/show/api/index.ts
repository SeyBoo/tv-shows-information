import { ShowI } from "../types/show.interface";

export interface ShowBackend {
  fetchPopularShows: () => Promise<ShowI[]>;
}

let showBackendInstance: ShowBackend | undefined;

export async function getShowsBackend(): Promise<ShowBackend> {
  if (showBackendInstance === undefined) {
    const mod = await import("./backends/" + process.env.NEXT_PUBLIC_SHOWS_BACKEND);
    showBackendInstance = new mod.default() as ShowBackend;
  }
  return showBackendInstance;
}
