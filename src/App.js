import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
//Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cursor from "./components/Cursor";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Single from "./pages/Single";
import Work from "./pages/Work";
function App() {

  const location = useLocation();
  // Custom CSS Height Fix for mobile devices
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  return (
    <div className="wrapper">
      <Header />

      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home sort="popular" layoutId="poster" />} />
          <Route path="/project/:id" element={<Single />} />
          <Route path="/work" element={<Work/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Cursor/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
