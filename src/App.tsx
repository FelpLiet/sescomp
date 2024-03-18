import "./App.css";
import { About } from "./components/About";
import { AboutEvent } from "./components/AboutEvent/intex";
import { Banner } from "./components/Banner";
import { Navbar } from "./components/Navbar/Index";
import { Slider } from "./components/Slider";
import { Strip } from "./components/Strip";

function App() {
  const labels = [
    "Inicio",
    "Programação",
    "Manual",
    "Loja oficial",
    "Patrocinadores",
  ];
  return (
    <>
      <Navbar.Root>
        {labels.map((item) => (
          <Navbar.Item key={item} href="#" label={item} />
        ))}
      </Navbar.Root>
      <Slider />
      <Strip.Root>
        <Strip.Content />
      </Strip.Root>
      <About />
      <Banner />
      display
      <AboutEvent />
    </>
  );
}

export default App;
