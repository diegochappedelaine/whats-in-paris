import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useFetchLazy, useQuery, useTitle } from "hooks";
import {
  EventCard,
  Input,
  HeroBanner,
  Loading,
  Button,
  Pagination,
} from "components";
import { Form, Container, OrderedList } from "./EventsPage.styled";

import { SEARCH_EVENTS_URL } from "api/end-points";
import { GetEventsWithSearchQuery } from "types";
import { getPaginationOffset } from "utils";

const EVENTS_PER_PAGE = 10;

const EventsPage = () => {
  const history = useHistory();
  const [search, setSearch] = useState<string>("");
  const query = useQuery();
  const { data, fetchData, loading } = useFetchLazy<GetEventsWithSearchQuery>();
  useTitle(`quoiDeNeuf? ${search}`);

  const currentPage = query.page ? Number(query.page) : 1;

  const fetchingDatas = (page: number) => {
    let url = `${SEARCH_EVENTS_URL}&limit=${EVENTS_PER_PAGE}`;

    const searchParams = query.search;

    if (searchParams) {
      url += `&search=${searchParams.replace(" ", "%20")}`;
    }

    url += `&offset=${getPaginationOffset(page, EVENTS_PER_PAGE)}`;
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
        <Form onSubmit={handleSubmit}>
          <Input value={search} handleChange={handleChange} />
          <Button>Rechercher</Button>
        </Form>

        {loading && <Loading height="1200px" />}
        <OrderedList>
          {!loading &&
            data?.records?.map(({ record: event }, index) => {
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
            currentPage={Number(currentPage)}
            lastPage={Math.ceil(data.total_count / EVENTS_PER_PAGE)}
          />
        )}
      </Container>
    </>
  );
};

export default EventsPage;
