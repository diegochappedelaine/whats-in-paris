import { useFetchFavoritesEvents } from "hooks";

const FavoritesPage = () => {
  const { data } = useFetchFavoritesEvents();

  console.log(data);
  return <div></div>;
};

export default FavoritesPage;
