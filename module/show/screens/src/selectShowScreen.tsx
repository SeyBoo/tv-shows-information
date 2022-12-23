import { FunctionComponent } from "react";
import { FromTheTopAnimation } from "../../../../common/animations";
import { useAppSelector } from "../../../../common/hooks/store";
import { BaseLayout } from "../../../../common/layouts";
import { PopularShowList } from "../../components";

export const SelectShowScreen: FunctionComponent = () => {
  const selectedShows = useAppSelector((state) => state.shows.selectedShows);
  const numberLeft = selectedShows ? 5 - selectedShows?.length : 5;

  return (
    <FromTheTopAnimation>
      <BaseLayout
        title={
          <>
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
          </>
        }
      >
        <PopularShowList />
      </BaseLayout>
    </FromTheTopAnimation>
  );
};
