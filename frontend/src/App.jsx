import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Privacy from "./pages/Privacy.jsx";

function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
=======
    <div>
      <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes> */}
        <h1>HELLO WORLD</h1>
        <Footer />
      </BrowserRouter>
    </div>
>>>>>>> a6ce7302f269df583941900800163695fc751223
  );
}

export default App;
