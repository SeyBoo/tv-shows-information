import Image from "next/image";
import { FunctionComponent } from "react";
import { useAppSelector } from "../../../../common/hooks/store";
import { useShow } from "../../../../common/hooks/useShow";
import { useGetEpisode } from "../../api/episode.api";

export const EpisodeDataScreen: FunctionComponent = () => {
  const { selectedSeasonNumber, selectedShow, selectedEpisodeNumber } =
    useShow();
  const { data } = useGetEpisode({
    seasonNumber: selectedSeasonNumber,
    episodeNumber: selectedEpisodeNumber,
    movieId: selectedShow.id,
  });

  if (!data) return null;

  return (
    <div className="text-white flex flex-col items-center gap-6 mt-4">
      <Image src={data.image} alt={data.title} width={500} height={300} />
      <div className="flex gap-4 ">
        <div className="bg-slate-500 rounded-md p-4 text-center">
          <p className="text-zinc-400 font-semibold text-xl">Title</p>
          <h1>{data.title}</h1>
        </div>
        <div className="bg-slate-500 rounded-md p-4 text-center">
          <p className="text-zinc-400 font-semibold text-xl">Runtime</p>
          <h1>{data.runtime}</h1>
        </div>
      </div>
      <div>
        {data.overview && (
          <>
            <p className="font-semibold text-2xl">Overview</p>
            <p>{data.overview}</p>
          </>
        )}
      </div>
    </div>
  );
};
