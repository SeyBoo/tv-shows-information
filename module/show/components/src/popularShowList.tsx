import { FunctionComponent } from "react";
import { ZoomInAnimation } from "../../../../common/animations";
import { Grid } from "../../../../common/components";
import calculateDelay from "../../../../common/utils/calculateAnimationDelay";
import { useGetPopularShows } from "../../api/show.api";
import { ShowCard } from "./showCard";

export const PopularShowList: FunctionComponent = () => {
  const { data } = useGetPopularShows();

  return (
    <Grid>
      {data?.map((show, index) => (
        <ZoomInAnimation delay={calculateDelay(index)} key={index}>
          <ShowCard show={show} type="intro" />
        </ZoomInAnimation>
      ))}
    </Grid>
  );
};
