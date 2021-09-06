import { useFetch } from "hooks";
import { GetEventsWithSearchQuery } from "global.d";
import { RETREIVE_LAST_EVENT } from "api/end-points";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { data, loading } =
    useFetch<GetEventsWithSearchQuery>(RETREIVE_LAST_EVENT);

  if (loading) return <p>Loading</p>;
  if (!data) return <p>No data</p>;

  const event = data?.records[0].record;
  console.log(event);
  return (
    <div>
      <Link to={{ pathname: `/event/${event.id}` }}>{event.fields.title}</Link>
    </div>
  );
};

export default HomePage;
