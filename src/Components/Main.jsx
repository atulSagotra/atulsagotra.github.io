import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Profile from "./Pages/Profile";
import { Routes, Route } from "react-router-dom";
import Education from "./Pages/Education";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";

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

  const scrollPageApp = true;

  const myContext = {
    appUI: {
      isDesktop: isDesktop,
      isMobile: isMobile,
      scrollPageApp: scrollPageApp,
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

  useEffect(() => {
    function handleScroll() {
      let value = window.scrollY;
      if (value < 500) setCurrentPage(Pages.Profile);
      else if (value > 500 && value < 1000) setCurrentPage(Pages.Experience);
      else if (value > 1000 && value < 1500) setCurrentPage(Pages.Skills);
      else if (value > 1500 && value < 2000) setCurrentPage(Pages.Education);
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }, []);

  return (
    <>
      <div className={isDesktop ? `flex flex-row` : ``}>
        <AppContext.Provider value={myContext}>
          <div className={scrollPageApp && isDesktop ? "fixed" : ""}>
            <Header />
          </div>

          {!scrollPageApp ? (
            <>
              <Routes>
                <Route exact path="/" element={<Profile />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/education" element={<Education />} />
              </Routes>
            </>
          ) : (
            <div className={isDesktop ? "ml-20 pl-2" : ""}>
              <Profile />
              <Experience />
              <Skills />
              <Education />
            </div>
          )}
        </AppContext.Provider>
      </div>
    </>
  );
}
