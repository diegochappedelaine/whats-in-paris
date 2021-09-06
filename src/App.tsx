import { Switch, Route, useLocation } from "react-router-dom";
import { HomePage, EventsPage } from "pages";

const App = () => {
  const location = useLocation();

  return (
    <Switch location={location} key={location.pathname}>
      <Route path="/events" component={EventsPage} exact />
      <Route component={HomePage} />
    </Switch>
  );
};

export default App;
