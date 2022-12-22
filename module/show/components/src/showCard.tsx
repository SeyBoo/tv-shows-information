import { FunctionComponent } from "react";
import Image from "next/image";
import { useShow } from "../../../../common/hooks/useShow";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks/store";
import { selectNewShow } from "../../store/thunks";

interface ShowCardProps {
  image: string;
  title: string;
  id: string;
  type: "intro" | "application";
}

export const ShowCard: FunctionComponent<ShowCardProps> = ({
  image,
  title,
  id,
  type,
}) => {
  const { selectedShow, setSelectedShow, setSelectedScreen } = useShow();
  const defaultStyle = "relative w-[300px] h-[400px] rounded-2xl";
  const dispatch = useAppDispatch();
  const selectedShows = useAppSelector((state) => state.shows.selectedShows);

  const handleSelectNewShow = async () => {
    try {
      await dispatch(selectNewShow({ show: { image, title, id } }));
    } catch (e) {
      console.log(e);
    }
  };

  const isSelected = (): Boolean => {
    if (type === "application") {
      return selectedShow === id;
    } else {
      const isShowSelected = selectedShows?.filter((show) => show.id === id);
      return Boolean(isShowSelected && isShowSelected?.length > 0);
    }
  };

  const handleClick = () => {
    if (isSelected()) return;
    if (type === "application") {
      setSelectedShow(id);
      setSelectedScreen("seasons");
    } else {
      handleSelectNewShow();
    }
  };

  return (
    <button
      className={
        isSelected()
          ? defaultStyle + " border-green-500 border-8"
          : defaultStyle + " hover:border-8 hover:border-green-200"
      }
      onClick={() => handleClick()}
    >
      <Image
        src={image}
        alt={`${title} illustration`}
        fill
        sizes="1"
        className="rounded-lg"
      />
    </button>
  );
};
