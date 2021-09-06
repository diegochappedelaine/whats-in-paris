import { useFetch } from "hooks";
import { useParams } from "react-router-dom";
import { useAppContext } from "provider/AppProvider";

import { GET_EVENT_BY_ID } from "api/end-points";
import { GetEventByIdQuery } from "global.d";

const EventPage = () => {
  const { id } = useParams<{ id: string }>();
  const { handleFavoriteEvent, favoritesEvents } = useAppContext();
  const { data, loading } = useFetch<GetEventByIdQuery>(
    `${GET_EVENT_BY_ID}/${id}`
  );

  if (loading) return <p>Loading</p>;
  if (!data) return <p>No data</p>;

  const isFavorite = favoritesEvents.includes(id);

  return (
    <div
      style={{
        background: isFavorite ? "red" : "white",
      }}
    >
      <button onClick={() => handleFavoriteEvent(id)}>
        {isFavorite ? "Retirer" : "Ajouter"} aux favoris
      </button>
      {data?.record.fields.title}
    </div>
  );
};

export default EventPage;
