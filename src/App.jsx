import { useState, useEffect } from "react";
import Header from "./components/header.jsx";
import Home from "./components/home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Band from "./components/band.jsx";

import "./App.css";

function App() {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  useEffect(() => {
    const Scroll = () => {
      const min = window.innerHeight / 3;

      if (window.scrollY > min) {
        setIsHeaderHidden(true);
      } else {
        setIsHeaderHidden(false);
      }
    };

    window.addEventListener("scroll", Scroll);
    return () => window.removeEventListener("scroll", Scroll);
  }, []);
  return (
    <div className="App">
      <div className={`header ${isHeaderHidden ? "header-hidden" : ""}`}>
        <Header />
      </div>
      <div className="hero">
        <Home />
      </div>
      <div className="band">
        <Band />
      </div>
    </div>
  );
}

export default App;
