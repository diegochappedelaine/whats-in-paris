import { useFetch } from "hooks";
import { GetEventsWithSearchQuery } from "global.d";
import { RETREIVE_LAST_EVENT } from "api/end-points";

const HomePage = () => {
  const { data, loading } =
    useFetch<GetEventsWithSearchQuery>(RETREIVE_LAST_EVENT);

  if (loading) return <p>Loading</p>;
  if (!data) return <p>No data</p>;

  const event = data?.records[0].record.fields;
  console.log(data?.records[0].record);
  return <div>{event.title}</div>;
};

export default HomePage;
