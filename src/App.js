import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React, {useState } from "react";
//Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cursor from "./components/Cursor";
import { useDarkMode } from "./components/UseDarkMode";
import { Toggle } from "./components/Toggle";
import { GlobalStyles, lightTheme, darkTheme } from "./components/GlobalStyles";
import styled, {ThemeProvider} from 'styled-components';

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Single from "./pages/Single";
import Work from "./pages/Work";



function App() {

  //calling the 
  const [theme, toggleTheme] = useDarkMode();

  const location = useLocation();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  // Custom CSS Height Fix for mobile devices
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

 

  

  return (
    <div className="wrapper">
      <ThemeProvider theme={themeMode} >
 
            <GlobalStyles/>
              <Header/>
                <Toggle theme={theme} toggleTheme={toggleTheme}/>
                  <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/project/:id" element={<Single />} />
                    <Route path="/work" element={<Work/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound/>} />
                  </Routes>

            <Cursor/>
            {/* <Footer /> */}

    </ThemeProvider>
    </div>
  );
}

export default App;
