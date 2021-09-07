import styled from "styled-components";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useFetchLazy, useDebounce } from "hooks";
import { EventCard, Input, HeroBanner } from "components";

import { SEARCH_EVENTS_URL } from "api/end-points";
import { GetEventsWithSearchQuery } from "global.d";
import { Container } from "components/layouts";

const OrderedList = styled.ol`
  margin-top: 60px;
  list-style-type: none;
`;

const EventsPage = () => {
  const history = useHistory();
  const location = useLocation();
  const { data, fetchData } = useFetchLazy<GetEventsWithSearchQuery>();
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce(search, 500);

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

        <OrderedList>
          {data?.records.map(({ record: event }, index) => {
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
