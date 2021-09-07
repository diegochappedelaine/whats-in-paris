import { Switch, Route, useLocation } from "react-router-dom";
import { HomePage, EventsPage, EventPage, FavoritesPage } from "pages";
import Theme from "core/Theme";
import { Layout } from "components/layouts";
import { Header, HeroBanner } from "components";

const App = () => {
  const location = useLocation();

  return (
    <Theme>
      <Header />
      <Layout>
        {/* <HeroBanner /> */}
        <Switch location={location} key={location.pathname}>
          <Route path="/favorites" component={FavoritesPage} exact />
          <Route path="/event/:id" component={EventPage} exact />
          <Route path="/events" component={EventsPage} exact />
          <Route path="/" component={HomePage} />
        </Switch>
      </Layout>
    </Theme>
  );
};

export default App;
