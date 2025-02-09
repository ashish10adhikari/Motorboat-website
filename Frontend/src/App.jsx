import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Book from "./Pages/Book";
import OurBoats from "./Pages/OurBoats";
import Packages from "./Pages/Packages";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
        <Route path="/ourboats" element={<OurBoats />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
