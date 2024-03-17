import "./App.css";
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
          <Navbar.Item href="#" label={item} />
        ))}
      </Navbar.Root>
      <Slider />
      <Strip.Root>
        <Strip.Content />
      </Strip.Root>
    </>
  );
}

export default App;
