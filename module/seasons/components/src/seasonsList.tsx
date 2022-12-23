import { FromTheTopAnimation } from "../../../../common/animations";
import { useShow } from "../../../../common/hooks/useShow";
import { SeasonCard } from "./seasonCard";
import calculateDelay from "../../../../common/utils/calculateAnimationDelay";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks/store";
import { Grid } from "../../../../common/components/grid";
import { useCallback, useEffect } from "react";
import { fetchSeasons } from "../../store/thunk";

export const SeasonList = () => {
  const seasons = useAppSelector((state) => state.seasons.seasons);
  const { selectedShow } = useShow();

  const dispatch = useAppDispatch();

  const handleFetchSeasons = useCallback(async () => {
    try {
      await dispatch(fetchSeasons(selectedShow));
    } catch (e) {
      console.log(e);
    }
  }, [dispatch, selectedShow]);

  useEffect(() => {
    handleFetchSeasons();
  }, [handleFetchSeasons]);

  return (
    <Grid>
      {seasons?.map((season, index) => (
        <FromTheTopAnimation delay={calculateDelay(index)} key={index}>
          <SeasonCard season={season} />
        </FromTheTopAnimation>
      ))}
    </Grid>
  );
};
