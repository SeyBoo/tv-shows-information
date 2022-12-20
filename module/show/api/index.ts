import { ShowI } from "../types/show.interface";

export interface ShowBackend {
  fetchPopularShows: () => Promise<ShowI[]>;

  searchShows: (title: string) => Promise<ShowI[]>;
}

let showBackendInstance: ShowBackend | undefined;

export async function getShowsBackend(): Promise<ShowBackend> {
  if (showBackendInstance === undefined) {
    const mod = await import("./backends/" + "dummy");
    showBackendInstance = new mod.default() as ShowBackend;
  }
  return showBackendInstance;
}
