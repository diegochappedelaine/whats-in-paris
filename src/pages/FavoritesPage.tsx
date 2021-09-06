import { useFetchFavoritesEvents } from "hooks";

const FavoritesPage = () => {
  const { data, loading } = useFetchFavoritesEvents();

  if (loading) return <p>Loading</p>;
  if (!data) return <p>No data</p>;

  console.log(data);
  return <div></div>;
};

export default FavoritesPage;
