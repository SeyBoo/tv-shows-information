import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

type ScreenI = "shows" | "seasons" | "episodes" | "episode";

interface SelectedShowI {
  id: number;
  title: string;
}
interface ShowActions {
  setSelectedShow: (value: SelectedShowI) => void;
  selectedShow: SelectedShowI;
  setSelectedSeasonNumber: (value: number) => void;
  selectedSeasonNumber: number;
  setSelectedScreen: (value: ScreenI) => void;
  selectedScreen: ScreenI;
  setSelectedEpisodeNumber: (value: number) => void;
  selectedEpisodeNumber: number;
}

const ShowContext = createContext({} as ShowActions);

const ShowProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [selectedShow, setSelectedShow] = useState<SelectedShowI>({
    id: 0,
    title: "",
  });
  const [selectedSeasonNumber, setSelectedSeasonNumber] = useState<number>(0);
  const [selectedEpisodeNumber, setSelectedEpisodeNumber] = useState<number>(0);
  const [selectedScreen, setSelectedScreen] = useState<ScreenI>("shows");

  return (
    <ShowContext.Provider
      value={{
        setSelectedShow,
        selectedShow,
        setSelectedSeasonNumber,
        selectedSeasonNumber,
        setSelectedScreen,
        selectedScreen,
        setSelectedEpisodeNumber,
        selectedEpisodeNumber,
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
