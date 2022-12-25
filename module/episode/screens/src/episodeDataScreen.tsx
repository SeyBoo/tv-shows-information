import Image from "next/image";
import { FunctionComponent, PropsWithChildren } from "react";
import {
  Grid,
  ImageSkeleton,
  TextSkeleton,
} from "../../../../common/components";
import { useShow } from "../../../../common/hooks/useShow";
import { useGetEpisode } from "../../api/episode.api";
import { MemberCard } from "./memberCard";

export const EpisodeDataScreen: FunctionComponent = () => {
  const { selectedSeasonNumber, selectedShow, selectedEpisodeNumber } =
    useShow();
  const { data } = useGetEpisode({
    seasonNumber: selectedSeasonNumber,
    episodeNumber: selectedEpisodeNumber,
    movieId: selectedShow.id,
  });

  const renderImage = (
    image: string | null | undefined,
    title: string | undefined
  ) => {
    if (image && title)
      return (
        <div className="relative w-[100%] h-[400px]">
          <Image src={image} alt={title} fill sizes="1" />
        </div>
      );
    else
      return (
        <div className="flex justify-center">
          <ImageSkeleton />
        </div>
      );
  };

  type RenderTextType = "heading" | "minutes";
  interface RenderCorrectTagProps {
    textType: RenderTextType | undefined;
  }

  const RenderCorrectTag: FunctionComponent<
    PropsWithChildren<RenderCorrectTagProps>
  > = ({ children, textType }) => {
    if (textType === "heading") {
      return <h1 className="text-2xl font-semibold">{children}</h1>;
    }

    if (textType === "minutes") {
      return <p>{children} minutes</p>;
    }

    return <p>{children}</p>;
  };

  const renderText = (
    text: string | number | null | undefined,
    data?: RenderTextType
  ) => {
    if (text && text !== "") {
      return <RenderCorrectTag textType={data}>{text}</RenderCorrectTag>;
    } else {
      <TextSkeleton />;
    }
  };

  return (
    <div className="text-white flex flex-col items-center gap-6 mt-4 w-[90%] max-w-[800px] m-auto pb-10">
      <div className="flex flex-col sm:flex-row justify-between w-full">
        {renderText(data?.title, "heading")}
        {renderText(data?.runtime, "minutes")}
      </div>
      {renderImage(data?.image, data?.title)}
      <div className="self-start w-[90%]">
        <p className="font-semibold text-2xl text-center sm:text-start">
          Overview
        </p>
        <div className="text-center sm:text-start">
          {renderText(data?.overview)}
        </div>
      </div>

      {data?.crew && data?.crew.length > 1 && (
        <div className="w-full text-center sm:text-start">
          {renderText("Crew", "heading")}
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 items-center mt-2">
            {data.crew.map((crew, index) => (
              <MemberCard member={crew} key={index} />
            ))}
          </div>
        </div>
      )}

      {data?.guest_stars && data?.guest_stars.length > 1 && (
        <div className="w-full text-center sm:text-start">
          {renderText("Cast", "heading")}
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 items-center mt-2">
            {data.guest_stars.map((crew, index) => (
              <MemberCard member={crew} key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
