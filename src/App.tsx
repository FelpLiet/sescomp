import "./App.css";
import { About } from "./components/About";
import { AboutEvent } from "./components/AboutEvent/intex";
import { Banner } from "./components/Banner";
import { Schedule } from "./components/Schedule";
import { Slider } from "./components/Slider";
import { Speakers } from "./components/Speakers";
import { Strip } from "./components/Strip";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Layout.tsx";
import { EmBreve } from "./components/EmBreve/Index";

function App() {

    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <>
                    <Slider />
                    <Strip.Root>
                      <Strip.Content />
                    </Strip.Root>
                    <About />
                    <Banner />
                    <AboutEvent />
                    <Speakers />
                    <Schedule />
                  </>
                }
              />
              <Route path="programacao" element={<EmBreve />} />
              <Route path="manual" element={<EmBreve />} />
              <Route path="patrocinadores" element={<EmBreve />} />
              <Route path="em-breve" element={<EmBreve />} />
            </Route>
          </Routes>
        </Router>
      </>
    );
}

export default App;
