import { useAppContext } from "provider/AppProvider";

const HomePage = () => {
  const { handleFavoriteEvent, favoritesEvents } = useAppContext();

  return (
    <div>
      <button onClick={() => handleFavoriteEvent("121")}>
        Add to favorite
      </button>
      {favoritesEvents?.map((eventId, index) => (
        <p key={index}>{eventId}</p>
      ))}
    </div>
  );
};

export default HomePage;
