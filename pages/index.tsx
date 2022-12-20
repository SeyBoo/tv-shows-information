import Head from "next/head";
import { TextAnimation, ZoomInAnimation } from "../common/animations";
import { ShowCard } from "../module/show/components";
import { SeasonList } from "../module/season/components/";
import calculateDelay from "../common/utils/calculateAnimationDelay";
import { FunctionComponent, useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../common/hooks/store";
import { fetchPopularShows } from "../module/show/store/thunks";
import ShowProvider from "../common/hooks/useShow";

const Intro: FunctionComponent = () => {
  const popularShows = useAppSelector((state) => state.shows.popularShows);
  const dispatch = useAppDispatch();

  const handleFetchPopularShows = useCallback(async () => {
    try {
      await dispatch(fetchPopularShows());
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  useEffect(() => {
    handleFetchPopularShows();
  }, [handleFetchPopularShows]);

  return (
    <div className="z-50 absolute w-screen h-screen bg-black text-white">
      <div className="flex flex-col md:flex-row gap-4 flex-wrap justify-between">
        {popularShows?.map((show, index) => (
          <ZoomInAnimation delay={calculateDelay(index)} key={index}>
            <ShowCard
              image={show.image}
              title={show.title}
              id={show.id}
              type="intro"
            />
          </ZoomInAnimation>
        ))}
      </div>
    </div>
  );
};

const Application: FunctionComponent = () => {
  const selectedShows = useAppSelector((state) => state.shows.selectedShows);

  return (
    <main className="max-w-[1660px] m-auto">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
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
      </div>
      <SeasonList />
    </main>
  );
};

export default function Home() {
  const selectedShows = useAppSelector((state) => state.shows.selectedShows);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ShowProvider>
        {selectedShows?.length === 5 ? <Application /> : <Intro />}
      </ShowProvider>
    </>
  );
}
