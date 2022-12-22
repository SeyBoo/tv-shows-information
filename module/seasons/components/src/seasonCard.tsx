import { FunctionComponent } from "react";
import { useShow } from "../../../../common/hooks/useShow";
import { Season } from "../../types/season.interface";
import Image from "next/image";

interface SeasonProps {
  season: Season;
}

export const SeasonCard: FunctionComponent<SeasonProps> = ({ season }) => {
  const { setSelectedSeason, setSelectedScreen } = useShow();

  const handleClick = () => {
    setSelectedSeason(season.season_number);
    setSelectedScreen("episodes");
  };

  return (
    <button
      className="relative w-[300px] h-[400px] rounded-2xl flex justify-center items-center hover:border-8 hover:border-green-200"
      onClick={() => handleClick()}
    >
      <Image
        src={season.image}
        alt={`${season.name} illustration`}
        fill
        sizes="1"
        className="rounded-lg"
      />
      <p className="text-7xl font-bold text-white absolute">
        {season.season_number}
      </p>
    </button>
  );
};
