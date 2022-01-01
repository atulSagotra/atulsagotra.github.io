import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Profile from "./Profile";

export const AppContext = React.createContext();

export default function Main() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const myContext = {
    appUI: {
      isDesktop: isDesktop,
      isMobile: isMobile,
    },
  };

  useEffect(() => {
    function handleresize() {
      if (window.innerWidth < 720) {
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
    <div>
      <div className={isDesktop ? `flex flex-row` : ``}>
        <AppContext.Provider value={myContext}>
          <Header />
          <Profile />
        </AppContext.Provider>
      </div>
    </div>
  );
}
