import React, { useContext } from "react";
import { AppContext } from "./Main";

export default function Profile() {
  const {
    appUI: { isDesktop, isMobile },
  } = useContext(AppContext);
  return (
    <div className="page">
      <header className="App-header">
        <p>Hi there, I will be Atul Sagotra's Super awesome Portfolio</p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/atulsagotra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Atul Sagotra
        </a>
      </header>
    </div>
  );
}
