import { FunctionComponent } from "react";
import { useShow } from "../../../../common/hooks/useShow";

interface SeasonProps {
  seasonNumber: string;
}

export const SeasonCard: FunctionComponent<SeasonProps> = ({
  seasonNumber,
}) => {
  const { selectedSeason, setSelectedSeason } = useShow();
  const defaultStyle =
    "bg-black w-[200px] h-[200px] text-white flex items-center justify-center";
  return (
    <button
      className={
        selectedSeason === seasonNumber
          ? defaultStyle + " scale-110"
          : defaultStyle
      }
      onClick={() => setSelectedSeason(seasonNumber)}
    >
      {seasonNumber}
    </button>
  );
};
