import styled from "styled-components";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useFetchLazy, useQuery } from "hooks";
import { EventCard, Input, HeroBanner, Loading } from "components";

import { SEARCH_EVENTS_URL } from "api/end-points";
import { GetEventsWithSearchQuery } from "types";
import { Container as _Container } from "components/layouts";
import { handlePagination } from "utils";
import Pagination from "components/Pagination/Pagination";

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

const EVENTS_PER_PAGE = 10;

const EventsPage = () => {
  const history = useHistory();
  const [search, setSearch] = useState<string>("");
  const { data, fetchData, loading } = useFetchLazy<GetEventsWithSearchQuery>();

  const query = useQuery();

  const currentPage = query.page ? Number(query.page) : 1;

  const fetchingDatas = (page: number) => {
    let url = `${SEARCH_EVENTS_URL}&limit=${EVENTS_PER_PAGE}`;

    const searchParams = query.search;

    if (searchParams) {
      url += `&search=${searchParams.replace(" ", "%20")}`;
    }

    url += `&offset=${handlePagination(page, EVENTS_PER_PAGE).offset}`;
    fetchData(url);
  };

  useEffect(() => {
    fetchingDatas(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
    history.push({ search: `?search=${e.target.value}` });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!search.trim().length) return;
    fetchingDatas(1);
  };

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
        {!!data?.total_count && (
          <Pagination
            // currentPage={page}
            // changePage={changePage}
            currentPage={Number(currentPage)}
            lastPage={Math.ceil(data.total_count / EVENTS_PER_PAGE)}
          />
        )}
      </Container>
    </>
  );
};

export default EventsPage;
