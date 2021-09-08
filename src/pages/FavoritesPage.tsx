import { useFetchFavoritesEvents } from "hooks";
import styled from "styled-components";
import { EventCard, Loading } from "components";
import { Container as _Container } from "components/layouts";
import { useAppContext } from "provider/AppProvider";

const Container = styled(_Container)`
  padding: 0 8px;
  @media (min-width: 800px) {
    padding: 0;
  }
`;

const UnorderedList = styled.ul`
  margin-top: 60px;
  list-style-type: none;
`;

const FavoritesPage = () => {
  const { data, loading } = useFetchFavoritesEvents();
  const { favoritesEvents } = useAppContext();

  const favorites = data?.filter(({ record: event }) =>
    favoritesEvents.includes(event.id)
  );

  if (loading) return <Loading />;
  if (!favorites) return <p>No data</p>;

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
                img: `${event.fields.cover.url}`,
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
