// styles
import { AppContainer } from "./App.styles"
// components
import { Navbar } from './components/Navbar';
import { MainPage } from './components/MainPage';
import { BrowserRouter as Router, Route} from "react-router-dom";
import GardenPlanner from './components/gardenPlanner/GardenPlanner';

import './i18n';

const App = () => {
  return (
    <AppContainer className="App">
      <Router>
        <Route exact path="/">
          <Navbar />
          <MainPage />
        </Route>
        <Route path="/garden" component={GardenPlanner}/>
      </Router>
    </AppContainer>
  );
}

export default App;
