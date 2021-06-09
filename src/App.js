import "./App.css";

import Landing from "./pages/Landing";
import Header from "./components/Header";
import { CarouselProvider } from "./contexts/CarouselContext";
import { DetailsProvider } from "./contexts/DetailsContext";

function App() {
  return (
    <div className="App">
      <CarouselProvider>
        <Header />
        <DetailsProvider>
          <Landing />
        </DetailsProvider>
      </CarouselProvider>
    </div>
  );
}

export default App;
