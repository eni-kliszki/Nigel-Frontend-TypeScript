// styles
import { AppContainer } from "./App.styles"
// components
import { Navbar } from './components/Navbar';
import { MainPage } from './components/MainPage';


const App = () => {
  return (
    <AppContainer className="App">
      <Navbar />
      <MainPage />
  </AppContainer>
  );
}

export default App;
