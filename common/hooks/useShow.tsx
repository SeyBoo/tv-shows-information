import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

type ScreenI = "shows" | "seasons" | "episodes" | "episode";
interface ShowActions {
  setSelectedShow: (value: string) => void;
  selectedShow: string;
  setSelectedSeason: (value: number) => void;
  selectedSeason: number;
  setSelectedScreen: (value: ScreenI) => void;
  selectedScreen: ScreenI;
  setSelectedEpisode: (value: number) => void;
  selectedEpisode: number;
}

const ShowContext = createContext({} as ShowActions);

const ShowProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [selectedShow, setSelectedShow] = useState<string>("");
  const [selectedSeason, setSelectedSeason] = useState<number>(0);
  const [selectedEpisode, setSelectedEpisode] = useState<number>(0);
  const [selectedScreen, setSelectedScreen] = useState<ScreenI>("shows");

  return (
    <ShowContext.Provider
      value={{
        setSelectedShow,
        selectedShow,
        setSelectedSeason,
        selectedSeason,
        setSelectedScreen,
        selectedScreen,
        setSelectedEpisode,
        selectedEpisode,
      }}
    >
      {children}
    </ShowContext.Provider>
  );
};

export const useShow = () => {
  const context = useContext(ShowContext);

  if (!context) {
    throw new Error("useShow must be placed within a showProvider.");
  }

  return context;
};

export default ShowProvider;
