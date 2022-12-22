import { FunctionComponent } from "react";
import { useShow } from "../hooks/useShow";

export const Nav: FunctionComponent = () => {
  const {
    selectedScreen,
    setSelectedScreen,
    setSelectedSeason,
    setSelectedShow,
  } = useShow();

  const handleGoBack = () => {
    switch (selectedScreen) {
      case "episode":
        setSelectedScreen("episodes");
        break;
      case "episodes":
        setSelectedScreen("seasons");
        setSelectedSeason(0);
        break;
      case "seasons":
        setSelectedScreen("shows");
        setSelectedShow("");
        break;
      default:
        break;
    }
  };

  return (
    <nav className="pt-8 px-8">
      <button onClick={() => handleGoBack()} className="text-3xl text-white">
        Go Back
      </button>
    </nav>
  );
};
