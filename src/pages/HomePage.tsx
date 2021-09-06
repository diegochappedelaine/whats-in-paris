import { useFetch } from "hooks";
import { RETREIVE_LAST_EVENT } from "api/end-points";
import { GetEventsWithSearchQuery } from "global.d";

const HomePage = () => {
  const { data, loading } =
    useFetch<GetEventsWithSearchQuery>(RETREIVE_LAST_EVENT);

  if (loading) return <p>Loading</p>;
  if (!data) return <p>No data</p>;

  const event = data?.records[0].record.fields;
  return <div>{event.title}</div>;
};

export default HomePage;
