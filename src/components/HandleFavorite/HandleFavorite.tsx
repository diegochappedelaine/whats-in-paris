import { useAppContext } from "provider/AppProvider";
import { AbsoluteElement, Button, Icon } from "./HandleFavorite.styled";

type HandleFavoriteProps = {
  id: string;
  defaultBackgroundColor?: string;
  className?: string;
};

const HandleFavorite: React.FC<HandleFavoriteProps> = ({
  id,
  defaultBackgroundColor = "white",
  className,
}) => {
  const { favoritesEvents, handleFavoriteEvent } = useAppContext();
  const isFavorite = favoritesEvents.includes(id);

  return (
    <AbsoluteElement className={className}>
      <Button
        defaultBackgroundColor={defaultBackgroundColor}
        isFavorite={isFavorite}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation();
          e.preventDefault();
          handleFavoriteEvent(id);
        }}
      >
        <Icon isFavorite={isFavorite} />
      </Button>
    </AbsoluteElement>
  );
};

export default HandleFavorite;
