import { useState } from "react";
import LoadingScreen from "./Components/LoadingScreen";
import "./index.css";
import Navbar from "./Components/Navbar";
import MobileMenu from "./Components/MobileMenu";
import Home from "./Components/Sections/Home";
import About from "./Components/Sections/About";
import Projects from "./Components/Sections/Projects";
import Contact from "./Components/Sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOPen, SetMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-100"
        } bg-black text-gray-100 `}
      >
        <Navbar menuOPen={menuOPen} SetMenuOpen={SetMenuOpen} />
        <MobileMenu menuOpen={menuOPen} setMenuOpen={SetMenuOpen}/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
