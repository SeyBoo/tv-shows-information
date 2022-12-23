import { FunctionComponent } from "react";
import { SeasonList } from "../../components";

export const SeasonScreen: FunctionComponent = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <h1 className="text-white text-2xl p-8 font-semibold">
        Please select a season.
      </h1>
      <SeasonList />
    </div>
  );
};
