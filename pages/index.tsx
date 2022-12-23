import Head from "next/head";
import { FromTheTopAnimation, ZoomInAnimation } from "../common/animations";
import { PopularShowList, ShowCard } from "../module/show/components";
import calculateDelay from "../common/utils/calculateAnimationDelay";
import { FunctionComponent } from "react";
import { useAppSelector } from "../common/hooks/store";
import ShowProvider, { useShow } from "../common/hooks/useShow";
import { Grid } from "../common/components/grid";
import { SeasonList } from "../module/seasons/components";
import { Nav } from "../common/components/nav";
import { EpisodeList } from "../module/episode/components/episodesList";
import Image from "next/image";

const Intro: FunctionComponent = () => {
  const selectedShows = useAppSelector((state) => state.shows.selectedShows);
  const numberLeft = selectedShows ? 5 - selectedShows?.length : 5;

  return (
    <FromTheTopAnimation>
      <div className="flex flex-col gap-6 p-5">
        <h3 className="text-white text-3xl">
          Hey, select{" "}
          <strong
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #CB5EEE 0%, #4BE1EC 100%)",
            }}
          >
            {numberLeft}
          </strong>{" "}
          of your favorite TV shows.
        </h3>
        <PopularShowList />
      </div>
    </FromTheTopAnimation>
  );
};

const ShowScreen: FunctionComponent = () => {
  const selectedShows = useAppSelector((state) => state.shows.selectedShows);

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <h1 className="text-white text-2xl p-8 font-semibold">
        Please select a show you&apos;d like to get information from.
      </h1>
      <Grid>
        {selectedShows?.map((show, index) => (
          <ZoomInAnimation delay={calculateDelay(index)} key={index}>
            <ShowCard
              image={show.image}
              title={show.title}
              id={show.id}
              type="application"
            />
          </ZoomInAnimation>
        ))}
      </Grid>
    </div>
  );
};

const SeasonScreen: FunctionComponent = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <h1 className="text-white text-2xl p-8 font-semibold">
        Please select a season.
      </h1>
      <SeasonList />
    </div>
  );
};

const EpisodesScreen: FunctionComponent = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <h1 className="text-white text-2xl p-8 font-semibold">
        Please select an episode.
      </h1>
      <EpisodeList />
    </div>
  );
};

const EpisodeScreen: FunctionComponent = () => {
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

const Application: FunctionComponent = () => {
  const { selectedScreen } = useShow();

  return (
    <div>
      <Nav />
      {selectedScreen === "shows" && <ShowScreen />}
      {selectedScreen === "seasons" && <SeasonScreen />}
      {selectedScreen === "episodes" && <EpisodesScreen />}
      {selectedScreen === "episode" && <EpisodeScreen />}
    </div>
  );
};

export default function Home() {
  const selectedShows = useAppSelector((state) => state.shows.selectedShows);
  return (
    <>
      <Head>
        <title>Tv Shows Informations</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ShowProvider>
        <main className="bg-black min-h-screen">
          <div className="max-w-[1660px] m-auto">
            {selectedShows?.length === 5 ? <Application /> : <Intro />}
          </div>
        </main>
      </ShowProvider>
    </>
  );
}
