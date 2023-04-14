import "./App.css";
import { About, ContactMe, Hero, Navbar, Projects, Skills } from "./components";

function App() {
  return (
    <div className="p-24">
      <Navbar />
      <div className="mt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
