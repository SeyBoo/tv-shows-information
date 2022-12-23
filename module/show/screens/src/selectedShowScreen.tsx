import { FunctionComponent } from "react";
import { ZoomInAnimation } from "../../../../common/animations";
import { Grid } from "../../../../common/components/grid";
import { useAppSelector } from "../../../../common/hooks/store";
import calculateDelay from "../../../../common/utils/calculateAnimationDelay";
import { ShowCard } from "../../components";

export const SelectShowScreen: FunctionComponent = () => {
  const selectedShows = useAppSelector((state) => state.shows.selectedShows);

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <h1 className="text-white text-2xl p-8 font-semibold">
        Please select a show you&apos;d like to get information from.
      </h1>
      <Grid>
        {selectedShows?.map((show, index) => (
          <ZoomInAnimation delay={calculateDelay(index)} key={index}>
            <ShowCard
              image={show.image}
              title={show.title}
              id={show.id}
              type="application"
            />
          </ZoomInAnimation>
        ))}
      </Grid>
    </div>
  );
};
