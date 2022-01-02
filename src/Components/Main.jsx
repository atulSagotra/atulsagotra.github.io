import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Profile from "./Pages/Profile";
import { Routes, Route } from "react-router-dom";
import Education from "./Pages/Education";
import Skills from "./Pages/Skills";

export const AppContext = React.createContext();

export const Pages = {
  Profile: 0,
  Skills: 1,
  Experience: 2,
  Education: 3,
};

export default function Main() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [currentPage, setCurrentPage] = useState(Pages.Profile);

  const myContext = {
    appUI: {
      isDesktop: isDesktop,
      isMobile: isMobile,
    },
    showNav: showNav,
    setShowNav: setShowNav,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
  };

  useEffect(() => {
    function handleresize() {
      if (window.innerWidth < 600) {
        setIsMobile(true);
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", handleresize);
    handleresize();
  }, []);
  return (
    <>
      <div className={isDesktop ? `flex flex-row` : ``}>
        <AppContext.Provider value={myContext}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Profile />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </AppContext.Provider>
      </div>
    </>
  );
}
