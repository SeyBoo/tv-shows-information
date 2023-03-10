import { Season } from "../../types/season.interface";

export interface SeasonBackend {
  fetchSeasons: (showId: number) => Promise<Season[]>;
}

let seasonBackendInstance: SeasonBackend | undefined;

export async function getSeasonsBackend(): Promise<SeasonBackend> {
  if (seasonBackendInstance === undefined) {
    const mod = await import("./" + process.env.NEXT_PUBLIC_BACKEND_TYPE);
    seasonBackendInstance = new mod.default() as SeasonBackend;
  }
  return seasonBackendInstance;
}
