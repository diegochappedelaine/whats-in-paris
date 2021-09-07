import { useFetchFavoritesEvents } from "hooks";
import { EventCard } from "components";
import { Container } from "components/layouts";

const FavoritesPage = () => {
  const { data, loading } = useFetchFavoritesEvents();

  if (loading) return <p>Loading</p>;
  if (!data) return <p>No data</p>;

  console.log(data);

  console.log(data);
  return (
    <Container>
      {data.map(({ record: event }, index) => (
        <EventCard
          key={index}
          event={{
            title: event.fields.title,
            description: event.fields.lead_text,
            date_start: event.fields.date_start,
            date_end: event.fields.date_end,
            img: `${event.fields.cover.url}`,
            id: event.id,
          }}
        />
      ))}
    </Container>
  );
};

export default FavoritesPage;
