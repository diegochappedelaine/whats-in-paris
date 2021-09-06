import { Switch, Route, useLocation } from "react-router-dom";
import { HomePage, EventsPage, EventPage, FavoritesPage } from "pages";

const App = () => {
  const location = useLocation();

  return (
    <Switch location={location} key={location.pathname}>
      <Route path="/favorites" component={FavoritesPage} exact />
      <Route path="/event/:id" component={EventPage} exact />
      <Route path="/events" component={EventsPage} exact />
      <Route component={HomePage} />
    </Switch>
  );
};

export default App;
