import Image from "next/image";
import { FunctionComponent } from "react";
import { TextSkeleton } from "../../../../common/components";
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
      {data.image ? (
        <Image src={data.image} alt={data.title} width={500} height={300} />
      ) : (
        <div className="flex justify-center"></div>
      )}
      <div className="flex gap-4 ">
        <div className="bg-slate-500 rounded-md p-4 text-center">
          <p className="text-zinc-400 font-semibold text-xl">Title</p>
          <h1>{data.title}</h1>
        </div>
        <div className="bg-slate-500 rounded-md p-4 text-center">
          <p className="text-zinc-400 font-semibold text-xl">Runtime</p>
          <h1>{data.runtime ? data.runtime : <TextSkeleton />}</h1>
        </div>
      </div>
      <div className="self-start w-[90%] ml-8">
        <p className="font-semibold text-2xl">Overview</p>
        {data.overview === "" ? (
          <TextSkeleton />
        ) : (
          <>
            <p>{data.overview}</p>
          </>
        )}
      </div>
    </div>
  );
};
