import "./App.css";
import { About, Hero, Navbar, Skills } from "./components";

function App() {
  return (
    <div className="p-24">
      <Navbar />
      <div className="mt-20">
        <Hero />
        <About />
        <Skills />
      </div>
    </div>
  );
}

export default App;
