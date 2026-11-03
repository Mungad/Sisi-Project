
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Wards from "./pages/Wards";
import Participate from "./pages/Participate";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-cream text-forest">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/wards" element={<Wards />} />
            <Route path="/participate" element={<Participate />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
