import { Season } from "../types/season.interface";

export interface SeasonBackend {
  fetchSeasons: (showId: string) => Promise<Season[]>;
}

let seasonBackendInstance: SeasonBackend | undefined;

export async function getSeasonsBackend(): Promise<SeasonBackend> {
  if (seasonBackendInstance === undefined) {
    const mod = await import(
      "./backends/" + process.env.NEXT_PUBLIC_BACKEND_TYPE
    );
    seasonBackendInstance = new mod.default() as SeasonBackend;
  }
  return seasonBackendInstance;
}
