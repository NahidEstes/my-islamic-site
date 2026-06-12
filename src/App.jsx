import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Book from "./pages/Book";
import NavBar from "./components/NavBar";
import Quran from "./pages/Quran";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quran" element={<Quran />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
