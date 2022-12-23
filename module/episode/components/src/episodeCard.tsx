import { FunctionComponent } from "react";
import { Episode } from "../../types/episode.interface";
import Image from "next/image";
import { useShow } from "../../../../common/hooks/useShow";

interface EpisodeCardProps {
  episode: Episode;
}

export const EpisodeCard: FunctionComponent<EpisodeCardProps> = ({
  episode,
}) => {
  const { setSelectedScreen, setSelectedEpisodeNumber } = useShow();

  const handleSelectEpisode = () => {
    setSelectedScreen("episode");
    setSelectedEpisodeNumber(episode.episodeNumber);
  };

  return (
    <button
      className="relative w-[300px] h-[400px] rounded-2xl hover:border-8 hover:border-green-200"
      onClick={() => handleSelectEpisode()}
    >
      <Image
        src={episode.image}
        alt={`${episode.title} illustration`}
        fill
        sizes="1"
        className="rounded-lg"
      />
      <div className="text-white absolute p-2 w-full bottom-0">
        <div className="text-xl font-bold flex justify-between">
          <p>{episode.title}</p>
          <p>{episode.episodeNumber}</p>
        </div>
      </div>
    </button>
  );
};
