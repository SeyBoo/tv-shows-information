import { ShowBackend } from "..";
import { ShowI } from "../../types/show.interface";
import DummyShowsData from "./dummy-data";

export default class DummyShows implements ShowBackend {
  async fetchPopularShows(): Promise<ShowI[]> {
    return DummyShowsData;
  }

  async searchShows(title: string): Promise<ShowI[]> {
    const filteredData = DummyShowsData.filter((product) =>
      product.title.includes(title)
    );
    return filteredData;
  }
}
