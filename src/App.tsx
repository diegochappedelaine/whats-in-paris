import { Switch, Route, useLocation } from "react-router-dom";
import HomePage from "pages/HomePage";

const App = () => {
  const location = useLocation();

  return (
    <Switch location={location} key={location.pathname}>
      <Route component={HomePage} />
    </Switch>
  );
};

export default App;
