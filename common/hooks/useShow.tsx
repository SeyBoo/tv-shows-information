import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface ShowActions {
  setSelectedShow: (value: string) => void;
  selectedShow: string;
  setSelectedSeason: (value: string) => void;
  selectedSeason: string;
}

const ShowContext = createContext({} as ShowActions);

const ShowProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [selectedShow, setSelectedShow] = useState<string>("");
  const [selectedSeason, setSelectedSeason] = useState<string>("");

  return (
    <ShowContext.Provider
      value={{
        setSelectedShow,
        selectedShow,
        setSelectedSeason,
        selectedSeason,
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
