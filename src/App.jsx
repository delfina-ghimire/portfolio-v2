import "./App.css";
import { About, Hero, Navbar } from "./components";

function App() {
  return (
    <div className="p-24">
      <Navbar />
      <div className="mt-20">
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
