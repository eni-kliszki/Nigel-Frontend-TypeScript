// styles
import { AppContainer } from "./App.styles"
// components
import { Navbar } from './components/Navbar';
import { MainPage } from './components/MainPage';

import './i18n';

const App = () => {
  return (
    <AppContainer className="App">
      <Navbar />
      <MainPage />
  </AppContainer>
  );
}

export default App;
