import { FunctionComponent } from "react";
import { ZoomInAnimation } from "../../../../common/animations";
import { Grid } from "../../../../common/components/grid";
import { useAppSelector } from "../../../../common/hooks/store";
import calculateDelay from "../../../../common/utils/calculateAnimationDelay";
import { ShowCard } from "./showCard";

export const SelectedShowList: FunctionComponent = () => {
  const selectedShows = useAppSelector((state) => state.shows.selectedShows);
  return (
    <Grid>
      {selectedShows?.map((show, index) => (
        <ZoomInAnimation delay={calculateDelay(index)} key={index}>
          <ShowCard show={show} type="application" />
        </ZoomInAnimation>
      ))}
    </Grid>
  );
};
