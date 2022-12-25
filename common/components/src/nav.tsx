import { FunctionComponent } from "react";
import { useShow } from "../../hooks/useShow";

export const Nav: FunctionComponent = () => {
  const {
    selectedShow,
    selectedSeasonNumber,
    selectedEpisodeNumber,
    selectedScreen,
    setSelectedScreen,
    setSelectedSeasonNumber,
    setSelectedShow,
    setSelectedEpisodeNumber,
  } = useShow();

  const handleGoToEpisodes = () => {
    setSelectedScreen("episodes");
    setSelectedEpisodeNumber(0);
  };

  const handleGoToSeasons = () => {
    setSelectedScreen("seasons");
    setSelectedSeasonNumber(0);
    setSelectedEpisodeNumber(0);
  };

  const handleGoToShows = () => {
    setSelectedScreen("shows");
    setSelectedSeasonNumber(0);
    setSelectedShow({
      id: 0,
      title: "",
    });
  };

  return (
    <nav className="pt-8 px-4 sm:px-8">
      {selectedScreen !== "shows" && (
        <div className="flex flex-col sm:flex-row items-start text-white gap-2 text-xl">
          {selectedShow.id !== 0 && (
            <button onClick={() => handleGoToShows()}>
              {selectedShow.title}
            </button>
          )}
          {selectedSeasonNumber !== 0 && (
            <button onClick={() => handleGoToSeasons()}>
              - Season {selectedSeasonNumber}
            </button>
          )}
          {selectedEpisodeNumber !== 0 && (
            <button onClick={() => handleGoToEpisodes()}>
              - Episode {selectedEpisodeNumber}
            </button>
          )}
        </div>
      )}
    </nav>
  );
};
