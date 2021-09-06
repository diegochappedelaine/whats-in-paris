import { useState, useEffect } from "react";
import { useAppContext } from "provider/AppProvider";
import { useFetchLazy } from "hooks";
import { SEARCH_EVENTS_URL } from "api/end-points";
import { GetEventsWithSearchQuery } from "global.d";
import { useHistory, useLocation } from "react-router-dom";

const EventsPage = () => {
  const history = useHistory();
  const location = useLocation();

  const { handleFavoriteEvent, favoritesEvents } = useAppContext();
  const [search, setSearch] = useState<string>("");

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

  const { data, fetchData } = useFetchLazy<GetEventsWithSearchQuery>();

  return (
    <div>
      <button onClick={() => handleFavoriteEvent("121")}>
        Add to favorite
      </button>

      <form onSubmit={handleSubmit}>
        <input value={search} onChange={handleChange} type="text" />
        <button type="submit">Search</button>
      </form>

      <ol>
        {data?.records.map(({ record: event }, index) => {
          const eventId = event.fields.id;
          const isFavorite = favoritesEvents.includes(event.fields.id);
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
              {event.fields.title}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default EventsPage;
