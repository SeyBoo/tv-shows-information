import { FunctionComponent } from "react";
import { EpisodeList } from "../../components";

export const EpisodesScreen: FunctionComponent = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <h1 className="text-white text-2xl p-8 font-semibold">
        Please select an episode.
      </h1>
      <EpisodeList />
    </div>
  );
};
