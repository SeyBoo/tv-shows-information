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
  const { selectedShow, setSelectedShow } = useShow();
  const defaultStyle = "relative w-[300px] h-[200px]";
  const dispatch = useAppDispatch();
  const selectedShows = useAppSelector((state) => state.shows.selectedShows);

  const handleSelectNewShow = async () => {
    try {
      await dispatch(selectNewShow({ show: { image, title, id } }));
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = () => {
    if (type === "application") {
      setSelectedShow(id);
    } else {
      handleSelectNewShow();
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

  return (
    <button
      className={isSelected() ? defaultStyle + " scale-110" : defaultStyle}
      onClick={() => handleClick()}
    >
      <Image src={image} alt={`${title} illustration`} fill sizes="1" />
    </button>
  );
};
