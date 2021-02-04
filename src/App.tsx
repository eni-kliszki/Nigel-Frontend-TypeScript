// styles
import { AppContainer } from "./App.styles"
// components
import { Navbar } from './components/Navbar';
import { MainPage } from './components/MainPage';
import { BrowserRouter as Router, Route} from "react-router-dom";

import './i18n';

const App = () => {
  return (
    <AppContainer className="App">
      <Router>
        <Route path="/">
          <Navbar />
          <MainPage />
        </Route>
      </Router>
    </AppContainer>
  );
}

export default App;
