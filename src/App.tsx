import { useFetch } from "hooks";
import { SEARCH_EVENTS_URL, GET_EVENT_BY_ID } from "api/end-points";

const RANDOM_EVENT_ID = "b14a501dcac06e7b08d870fb94b7528f38e0d093";
const RANDOM_SEARCH = "danse";

const App = () => {
  const { data: searchData } = useFetch(
    `${SEARCH_EVENTS_URL}&search=${RANDOM_SEARCH}`
  );
  const { data: eventData } = useFetch(`${GET_EVENT_BY_ID}/${RANDOM_EVENT_ID}`);

  console.log(eventData, searchData);
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

export default App;
