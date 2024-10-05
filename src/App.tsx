import "./App.css";
import { About } from "./components/About";
import { AboutEvent } from "./components/AboutEvent/intex";
import { Banner } from "./components/Banner";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar/Index";
import { Organization } from "./components/Organization";
import { Schedule } from "./components/Schedule";
import { Slider } from "./components/Slider";
import { Speakers } from "./components/Speakers";
import { Strip } from "./components/Strip";
import { Ticket } from "./components/Ticke";

function App() {
  const labels = [
    "Inicio",
    "Programação",
    "Manual",
      "Patrocinadores"
  ];
  return (
    <>
      <Navbar.Root>
        {labels.map((item) => (
          <Navbar.Item
            key={item}
            href="https://images7.memedroid.com/images/UPLOADED634/5c9a4084625f2.jpeg"
            target="_blank"
            label={item}
          />
        ))}
      </Navbar.Root>
      <Slider />
      <Strip.Root>
        <Strip.Content />
      </Strip.Root>
      <About />
      <Banner />
      <AboutEvent />
      <Speakers />
      <Schedule />
      <Ticket />
      <Organization />
      {/* <Sponsors />
      <Shop /> */}
      <Footer />
    </>
  );
}

export default App;
