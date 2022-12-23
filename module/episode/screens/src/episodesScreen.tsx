import { FunctionComponent } from "react";
import { BaseLayout } from "../../../../common/layouts";
import { EpisodeList } from "../../components";

export const EpisodesScreen: FunctionComponent = () => {
  return (
    <BaseLayout title="Please select an episode.">
      <EpisodeList />
    </BaseLayout>
  );
};
