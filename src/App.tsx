import { useFetch } from "hooks";
import { SEARCH_EVENTS_URL, GET_EVENT_BY_ID } from "api/end-points";
import { GetEventByIdQuery, GetEventsWithSearchQuery } from "global.d";
import HomePage from "pages/HomePage";

const RANDOM_EVENT_ID = "b14a501dcac06e7b08d870fb94b7528f38e0d093";
const RANDOM_SEARCH = "danse";

const App = () => {
  const { data: searchData } = useFetch<GetEventsWithSearchQuery>(
    `${SEARCH_EVENTS_URL}&search=${RANDOM_SEARCH}`
  );
  const { data: eventData } = useFetch<GetEventByIdQuery>(
    `${GET_EVENT_BY_ID}/${RANDOM_EVENT_ID}`
  );

  eventData && console.log(eventData);
  searchData && console.log(searchData);

  return (
    <div>
      <h1>Hello world</h1>
      <HomePage />
    </div>
  );
};

export default App;
