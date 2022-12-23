import { FunctionComponent } from "react";
import { BaseLayout } from "../../../../common/layouts";
import { SelectedShowList } from "../../components";

export const SelectedShowScreen: FunctionComponent = () => {
  return (
    <BaseLayout title="Please select a show you'd like to get information from.">
      <SelectedShowList />
    </BaseLayout>
  );
};
