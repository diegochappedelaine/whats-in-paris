import styled from "styled-components";
import { FaBookmark } from "react-icons/fa";
import { useAppContext } from "provider/AppProvider";

type HandleFavoriteProps = {
  id: string;
};

const AbsoluteElement = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  margin: 10px;
`;

const Button = styled.button<{ isFavorite: boolean }>`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 14px;
  border: none;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  background: ${({ isFavorite }) => (isFavorite ? "lightpink" : "white")};
`;

const Icon = styled(FaBookmark)<{ isFavorite: boolean }>`
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  color: ${({ theme: { colors }, isFavorite }) =>
    isFavorite ? "white" : colors.grey600};
`;

const HandleFavorite: React.FC<HandleFavoriteProps> = ({ id }) => {
  const { favoritesEvents, handleFavoriteEvent } = useAppContext();
  const isFavorite = favoritesEvents.includes(id);
  return (
    <AbsoluteElement>
      <Button
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
