// styles
import { AppContainer } from "./App.styles";
// components
import { Navbar } from "./components/Navbar";
import { MainPage } from "./components/MainPage";

import "./i18n";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GardenPlanner from './components/gardenPlanner/GardenPlanner';

const App = () => {
  return (
    <AppContainer className="App">
      <Router>
        <Route exact path="/">
          <Navbar />
          <MainPage />
        </Route>
        <Route exact path="/garden">
          <GardenPlanner />
        </Route>
      </Router>
    </AppContainer>
  );
};

export default App;
