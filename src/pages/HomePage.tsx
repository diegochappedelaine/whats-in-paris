import { useFetch } from "hooks";
import { GetEventsWithSearchQuery } from "global.d";
import { RETREIVE_LAST_EVENT } from "api/end-points";
import { EventCard, Loading } from "components";
import { Container } from "components/layouts";

const HomePage = () => {
  const { data, loading } =
    useFetch<GetEventsWithSearchQuery>(RETREIVE_LAST_EVENT);

  if (loading) return <Loading />;
  if (!data) return <p>No data</p>;

  const event = data?.records[0].record;
  console.log(event);
  return (
    <Container>
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
    </Container>
  );
};

export default HomePage;
