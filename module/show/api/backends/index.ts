import { ShowI } from "../../types/show.interface";

export interface ShowBackend {
  fetchPopularShows: () => Promise<ShowI[]>;
}

let showBackendInstance: ShowBackend | undefined;

export async function getShowsBackend(): Promise<ShowBackend> {
  if (showBackendInstance === undefined) {
    const mod = await import("./" + process.env.NEXT_PUBLIC_BACKEND_TYPE);
    showBackendInstance = new mod.default() as ShowBackend;
  }
  return showBackendInstance;
}
