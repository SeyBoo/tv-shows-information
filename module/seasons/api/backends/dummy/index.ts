import { SeasonBackend } from "../..";
import { Season } from "../../../types/season.interface";
import { DummySeasonData } from "./dummy-data";

export default class DummySeason implements SeasonBackend {
  async fetchSeasons(showId: string): Promise<Season[]> {
    return DummySeasonData;
  }
}
