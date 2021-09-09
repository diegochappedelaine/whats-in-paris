import { useFetch, useTitle } from "hooks";
import { GetEventsWithSearchQuery } from "types";
import { RETREIVE_LAST_EVENT } from "api/end-points";
import { Loading, HeroBanner, Error } from "components";
import { Container, EventCard, Redirect } from "./HomePage.styled";

const HomePage = () => {
  const { data, loading, error } =
    useFetch<GetEventsWithSearchQuery>(RETREIVE_LAST_EVENT);
  useTitle("quoiDeNeuf à Paris ?");
  const event = data?.records?.[0].record;

  return (
    <>
      <HeroBanner />
      <Container>
        {loading && <Loading />}
        {error && <Error />}
        {!loading && event && (
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
        )}
        <Redirect to="/events?search=danse">d'autres idées</Redirect>
      </Container>
    </>
  );
};

export default HomePage;
