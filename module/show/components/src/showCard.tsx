import { FunctionComponent } from "react";
import Image from "next/image";
import { useShow } from "../../../../common/hooks/useShow";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks/store";
import { selectNewShow } from "../../store/thunks";
import { ShowI } from "../../types/show.interface";

interface ShowCardProps {
  type: "intro" | "application";
  show: ShowI;
}

export const ShowCard: FunctionComponent<ShowCardProps> = ({ type, show }) => {
  const { selectedShow, setSelectedShow, setSelectedScreen } = useShow();
  const defaultStyle = "relative w-[300px] h-[400px] rounded-2xl";
  const dispatch = useAppDispatch();
  const selectedShows = useAppSelector((state) => state.shows.selectedShows);

  const handleSelectNewShow = async () => {
    try {
      await dispatch(
        selectNewShow({
          show,
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleSelectShow = () => {
    setSelectedShow({
      id: show.id,
      title: show.title,
    });
    setSelectedScreen("seasons");
  };

  const isSelected = (): Boolean => {
    if (type === "application") {
      return selectedShow.id === show.id;
    } else {
      const isShowSelected = selectedShows?.filter(
        (selectedShow) => selectedShow.id === show.id
      );
      return Boolean(isShowSelected && isShowSelected?.length > 0);
    }
  };

  const handleClick = () => {
    if (isSelected()) return;

    if (type === "application") {
      handleSelectShow();
    } else {
      handleSelectNewShow();
    }
  };

  return (
    <button
      className={
        isSelected()
          ? defaultStyle + " border-green-500 border-8 filter grayscale"
          : defaultStyle + " hover:border-8 hover:border-green-200"
      }
      onClick={() => handleClick()}
    >
      <Image
        src={show.image}
        alt={`${show.title} illustration`}
        fill
        sizes="1"
        className="rounded-lg"
      />
    </button>
  );
};
