import styled from "styled-components";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useFetchLazy, useDebounce } from "hooks";
import { EventCard, Input, HeroBanner, Loading } from "components";

import { SEARCH_EVENTS_URL } from "api/end-points";
import { GetEventsWithSearchQuery } from "types";
import { Container as _Container } from "components/layouts";

const Container = styled(_Container)`
  padding: 0 8px;
  @media (min-width: ${({ theme: { breakpoints } }) =>
      `${breakpoints.mobile}px`}) {
    padding: 0;
  }

  form {
    padding: 0 32px;
  }
`;

const OrderedList = styled.ol`
  margin-top: 60px;
  list-style-type: none;
`;

const EventsPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce(search, 500);
  const { data, fetchData, loading } = useFetchLazy<GetEventsWithSearchQuery>();

  useEffect(() => {
    const searchParams = location.search.split("=")?.[1];
    if (searchParams) {
      setSearch(searchParams);
    }
  }, [location.search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
    history.push({ search: `?search=${e.target.value}` });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    fetchData(`${SEARCH_EVENTS_URL}&search=${search}`);
  };

  useEffect(() => {
    if ((debouncedSearch as string).length) {
      fetchData(`${SEARCH_EVENTS_URL}&search=${debouncedSearch}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  return (
    <>
      <HeroBanner />
      <Container>
        <form onSubmit={handleSubmit}>
          <Input value={search} handleChange={handleChange} />
        </form>

        {loading && <Loading />}
        <OrderedList>
          {data?.records?.map(({ record: event }, index) => {
            return (
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
            );
          })}
        </OrderedList>
      </Container>
    </>
  );
};

export default EventsPage;
