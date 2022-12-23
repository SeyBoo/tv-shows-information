import { FunctionComponent } from "react";
import { SelectedShowList } from "../../components";

export const SelectedShowScreen: FunctionComponent = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <h1 className="text-white text-2xl p-8 font-semibold">
        Please select a show you&apos;d like to get information from.
      </h1>
      <SelectedShowList />
    </div>
  );
};
