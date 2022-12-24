import { FunctionComponent } from "react";
import { ZoomInAnimation } from "../../../../common/animations";
import { Grid } from "../../../../common/components/grid";
import { useShow } from "../../../../common/hooks/useShow";
import calculateDelay from "../../../../common/utils/calculateAnimationDelay";
import { useGetEpisodes } from "../../api/episode.api";
import { EpisodeCard } from "./episodeCard";

export const EpisodeList: FunctionComponent = () => {
  const { selectedSeasonNumber, selectedShow } = useShow();
  const { data } = useGetEpisodes({
    movieId: selectedShow.id,
    seasonNumber: selectedSeasonNumber,
  });

  return (
    <Grid>
      {data?.map((episode, index) => (
        <ZoomInAnimation delay={calculateDelay(index)} key={index}>
          <EpisodeCard episode={episode} />
        </ZoomInAnimation>
      ))}
    </Grid>
  );
};
