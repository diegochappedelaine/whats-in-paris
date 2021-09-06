import { useState, useEffect } from "react";
import { useAppContext } from "provider/AppProvider";
import { useHistory, useLocation, Link } from "react-router-dom";
import { useFetchLazy, useDebounce } from "hooks";

import { SEARCH_EVENTS_URL } from "api/end-points";
import { GetEventsWithSearchQuery } from "global.d";

const EventsPage = () => {
  const history = useHistory();
  const location = useLocation();
  const { data, fetchData } = useFetchLazy<GetEventsWithSearchQuery>();
  const { handleFavoriteEvent, favoritesEvents } = useAppContext();
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
    <div>
      <form onSubmit={handleSubmit}>
        <input value={search} onChange={handleChange} type="text" />
      </form>

      <ol>
        {data?.records.map(({ record: event }, index) => {
          const eventId = event.fields.id;
          const isFavorite = favoritesEvents.includes(eventId);
          return (
            <li
              style={{
                background: isFavorite ? "red" : "white",
              }}
              key={index}
            >
              <button onClick={() => handleFavoriteEvent(eventId)}>
                Add to favorite
              </button>
              <Link to={{ pathname: `/event/${event.id}` }}>
                {event.fields.title}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default EventsPage;
