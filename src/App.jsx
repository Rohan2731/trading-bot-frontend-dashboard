import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Strategy from "./pages/Strategy";
import Results from "./pages/Results";
import About from "./pages/About";

function App() {
  const [results, setResults] = useState(null);
  

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              results={results}
              setResults={setResults}
            />
          }
        />

        <Route path="/strategy" element={<Strategy />} />

        <Route
          path="/results"
          element={<Results results={results} />}
        />

        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;