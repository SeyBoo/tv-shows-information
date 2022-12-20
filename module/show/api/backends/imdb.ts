import { ShowBackend } from "..";
import { getFromApi } from "../../../../common/api/config";
import { ShowI } from "../../types/show.interface";
import DummyShowsData from "./dummy-data";

export default class DummyShows implements ShowBackend {
  async fetchPopularShows(): Promise<ShowI[]> {
    const data: Promise<ShowI[]> = await getFromApi(
      "title/get-most-popular-tv-shows?homeCountry=US&purchaseCountry=US&currentCountry=US"
    );
    return data;
  }

  async searchShows(title: string): Promise<ShowI[]> {
    const filteredData = DummyShowsData.filter((product) =>
      product.title.includes(title)
    );
    return filteredData;
  }
}
