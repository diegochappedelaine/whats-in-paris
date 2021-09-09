import { Switch, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import { HomePage, EventsPage, EventPage, FavoritesPage } from "pages";
import Theme from "core/Theme";
import { Layout } from "components/layouts";
import { Header, Footer } from "components";

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const location = useLocation();

  return (
    <Theme>
      <AppWrapper>
        <Header />
        <Layout>
          <Switch location={location} key={location.pathname}>
            <Route path="/favorites" component={FavoritesPage} exact />
            <Route path="/event/:id" component={EventPage} exact />
            <Route path="/events" component={EventsPage} exact />
            <Route path="/" component={HomePage} />
          </Switch>
        </Layout>
        <Footer />
      </AppWrapper>
    </Theme>
  );
};

export default App;
