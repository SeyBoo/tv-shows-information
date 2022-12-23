import { FunctionComponent } from "react";
import { FromTheTopAnimation } from "../../../../common/animations";
import { useAppSelector } from "../../../../common/hooks/store";
import { PopularShowList } from "../../components";

export const SelectedShowScreen: FunctionComponent = () => {
  const selectedShows = useAppSelector((state) => state.shows.selectedShows);
  const numberLeft = selectedShows ? 5 - selectedShows?.length : 5;

  return (
    <FromTheTopAnimation>
      <div className="flex flex-col gap-6 p-5">
        <h3 className="text-white text-3xl">
          Hey, select{" "}
          <strong
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #CB5EEE 0%, #4BE1EC 100%)",
            }}
          >
            {numberLeft}
          </strong>{" "}
          of your favorite TV shows.
        </h3>
        <PopularShowList />
      </div>
    </FromTheTopAnimation>
  );
};
