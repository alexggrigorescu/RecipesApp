import "./App.css";

import Landing from "./pages/Landing";
import Header from "./components/Header";
import { CarouselProvider } from "./contexts/CarouselContext";

function App() {
  return (
    <div className="App">
      <CarouselProvider>
        <Header />
        <Landing />
      </CarouselProvider>
    </div>
  );
}

export default App;
