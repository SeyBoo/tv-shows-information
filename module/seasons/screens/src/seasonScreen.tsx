import { FunctionComponent } from "react";
import { BaseLayout } from "../../../../common/layouts";
import { SeasonList } from "../../components";

export const SeasonScreen: FunctionComponent = () => {
  return (
    <BaseLayout title="Please select a season.">
      <SeasonList />
    </BaseLayout>
  );
};
