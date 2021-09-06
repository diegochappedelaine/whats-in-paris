import { useState } from "react";
import { useAppContext } from "provider/AppProvider";
import { useFetchLazy } from "hooks";
import { SEARCH_EVENTS_URL } from "api/end-points";
import { GetEventsWithSearchQuery } from "global.d";

const HomePage = () => {
  const { handleFavoriteEvent, favoritesEvents } = useAppContext();
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
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

export default HomePage;
