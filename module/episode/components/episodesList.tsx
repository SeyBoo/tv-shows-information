import { FunctionComponent, useCallback, useEffect } from "react";
import { ZoomInAnimation } from "../../../common/animations";
import { Grid } from "../../../common/components/grid";
import { useAppDispatch, useAppSelector } from "../../../common/hooks/store";
import { useShow } from "../../../common/hooks/useShow";
import calculateDelay from "../../../common/utils/calculateAnimationDelay";
import { fetchEpisodes } from "../state/thunks";
import { EpisodeCard } from "./episodeCard";

export const EpisodeList: FunctionComponent = () => {
  const episodes = useAppSelector((state) => state.episodes.episodes);

  const { selectedSeason, selectedShow } = useShow();
  const dispatch = useAppDispatch();

  const handleFetchEpisodes = useCallback(async () => {
    try {
      await dispatch(
        fetchEpisodes({
          movieId: parseInt(selectedShow),
          seasonNumber: selectedSeason,
        })
      );
    } catch (e) {
      console.log(e);
    }
  }, [dispatch, selectedSeason, selectedShow]);

  useEffect(() => {
    handleFetchEpisodes();
  }, [handleFetchEpisodes]);

  return (
    <Grid>
      {episodes?.map((episode, index) => (
        <ZoomInAnimation delay={calculateDelay(index)} key={index}>
          <EpisodeCard episode={episode} />
        </ZoomInAnimation>
      ))}
    </Grid>
  );
};
