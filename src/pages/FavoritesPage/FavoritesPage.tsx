import { useFetchFavoritesEvents, useTitle } from "hooks";
import { Error, EventCard, Loading, FavoriteEmptyState } from "components";
import { useAppContext } from "provider/AppProvider";
import { Container, UnorderedList } from "./FavoritesPage.styled";

const FavoritesPage = () => {
  const { data, loading, error } = useFetchFavoritesEvents();
  const { favoritesEvents } = useAppContext();
  useTitle("quoiDeNeuf? Vos favoris");

  const favorites = data?.filter(({ record: event }) =>
    favoritesEvents.includes(event.id)
  );

  if (loading) return <Loading height={"calc(100vh - 68px)"} />;
  if (error) return <Error />;
  if (!favorites?.length) return <FavoriteEmptyState />;

  return (
    <Container>
      <UnorderedList>
        {favorites.map(({ record: event }, index) => (
          <li key={index}>
            <EventCard
              event={{
                title: event.fields.title,
                description: event.fields.lead_text,
                date_start: event.fields.date_start,
                date_end: event.fields.date_end,
                img: event.fields.cover.url,
                id: event.id,
              }}
            />
          </li>
        ))}
      </UnorderedList>
    </Container>
  );
};

export default FavoritesPage;
