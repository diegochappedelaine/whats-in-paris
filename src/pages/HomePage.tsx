import styled from "styled-components";
import { useFetch } from "hooks";
import { GetEventsWithSearchQuery } from "global.d";
import { RETREIVE_LAST_EVENT } from "api/end-points";
import { EventCard, Loading, HeroBanner } from "components";
import { Container as _Container } from "components/layouts";
import { Link } from "react-router-dom";

const Container = styled(_Container)`
  margin-top: 60px;
`;

const Redirect = styled(Link)`
  ${({ theme: { colors, fontSize } }) => `
    font-size: ${fontSize.heading3};
    font-weight: 700;
    color: ${colors.grey800};
    margin: 60px auto 0;
  `}
`;

const HomePage = () => {
  const { data, loading } =
    useFetch<GetEventsWithSearchQuery>(RETREIVE_LAST_EVENT);

  const event = data?.records[0].record;

  return (
    <>
      <HeroBanner />
      <Container>
        {loading && <Loading />}
        {event && (
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
