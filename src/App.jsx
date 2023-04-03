import "./App.css";
import { About, Hero, Navbar } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
