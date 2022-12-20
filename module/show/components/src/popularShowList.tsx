import { FunctionComponent, useCallback, useEffect } from "react";
import { ZoomInAnimation } from "../../../../common/animations";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks/store";
import calculateDelay from "../../../../common/utils/calculateAnimationDelay";
import { fetchPopularShows } from "../../store/thunks";
import { ShowCard } from "./showCard";

export const PopularShowList: FunctionComponent = () => {
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
    <div className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center">
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
  );
};
