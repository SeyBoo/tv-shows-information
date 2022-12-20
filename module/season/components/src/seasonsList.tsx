import { FromTheTopAnimation } from "../../../../common/animations";
import { useShow } from "../../../../common/hooks/useShow";
import { SeasonCard } from "./seasonCard";
import calculateDelay from "../../../../common/utils/calculateAnimationDelay";

export const SeasonList = () => {
  const { selectedShow } = useShow();

  if (!selectedShow) return null;

  return (
    <div className="flex justify-between gap-4">
      <FromTheTopAnimation delay={calculateDelay(1)}>
        <SeasonCard seasonNumber="1" />
      </FromTheTopAnimation>
      <FromTheTopAnimation delay={calculateDelay(2)}>
        <SeasonCard seasonNumber="2" />
      </FromTheTopAnimation>
      <FromTheTopAnimation delay={calculateDelay(3)}>
        <SeasonCard seasonNumber="3" />
      </FromTheTopAnimation>
      <FromTheTopAnimation delay={calculateDelay(4)}>
        <SeasonCard seasonNumber="4" />
      </FromTheTopAnimation>
      <FromTheTopAnimation delay={calculateDelay(5)}>
        <SeasonCard seasonNumber="5" />
      </FromTheTopAnimation>
    </div>
  );
};
