import Image from "next/image";
import { FunctionComponent } from "react";
import { useAppSelector } from "../../../../common/hooks/store";
import { useShow } from "../../../../common/hooks/useShow";

export const EpisodeDataScreen: FunctionComponent = () => {
  const { selectedEpisodeNumber } = useShow();
  const episodes = useAppSelector((state) => state.episodes.episodes);
  const episode = episodes?.filter(
    (episode) => episode.episodeNumber === selectedEpisodeNumber
  );

  if (!episode) return null;

  return (
    <div className="text-white flex flex-col items-center gap-6 mt-4">
      <Image
        src={episode[0].image}
        alt={episode[0].title}
        width={500}
        height={300}
      />
      <div className="flex gap-4 ">
        <div className="bg-slate-500 rounded-md p-4 text-center">
          <p className="text-zinc-400 font-semibold text-xl">Title</p>
          <h1>{episode[0].title}</h1>
        </div>
        <div className="bg-slate-500 rounded-md p-4 text-center">
          <p className="text-zinc-400 font-semibold text-xl">Runtime</p>
          <h1>{episode[0].runtime}</h1>
        </div>
      </div>
      <div>
        {episode[0].overview && (
          <>
            <p className="font-semibold text-2xl">Overview</p>
            <p>{episode[0].overview}</p>
          </>
        )}
      </div>
    </div>
  );
};
