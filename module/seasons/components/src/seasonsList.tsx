import { FromTheTopAnimation } from "../../../../common/animations";
import { useShow } from "../../../../common/hooks/useShow";
import { SeasonCard } from "./seasonCard";
import calculateDelay from "../../../../common/utils/calculateAnimationDelay";
import { Grid } from "../../../../common/components/grid";
import { useGetSeasons } from "../../api/seasons.api";

export const SeasonList = () => {
  const { selectedShow } = useShow();
  const { data } = useGetSeasons(selectedShow.id);

  return (
    <Grid>
      {data?.map((season, index) => (
        <FromTheTopAnimation delay={calculateDelay(index)} key={index}>
          <SeasonCard season={season} />
        </FromTheTopAnimation>
      ))}
    </Grid>
  );
};
