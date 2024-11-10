import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Layout from "./Layout.tsx";
import { EmBreve } from "./components/EmBreve/Index";
import { Programacao } from "./pages/programacao/index.tsx";
import { Sponsors } from "./pages/patrocinadores/index.tsx";
import { Home } from "./pages/home/index.tsx";
import { Shop } from "./pages/Shop/index.tsx";
import { Manual } from "./pages/manual/index.tsx";

function App() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index  element={<Home />} />
              <Route path="programacao" element={<Programacao />} />
              <Route path="manual" element={<Manual />} />
              <Route path="patrocinadores" element={<Sponsors />} />
              <Route path="loja" element={<Shop />} />
              <Route path="em-breve" element={<EmBreve />} />
            </Route>
          </Routes>
        </Router>
      </>
    );
}

export default App;
