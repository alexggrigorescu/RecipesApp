import "./App.css";

import Landing from "./pages/Landing";
import Header from "./components/Header";
import { CarouselProvider } from "./contexts/CarouselContext";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselProvider>
        <Landing />
      </CarouselProvider>
    </div>
  );
}

export default App;
