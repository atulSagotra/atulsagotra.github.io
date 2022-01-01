import React, { useState, useContext } from "react";
import Icon from "./Icon";
import { AppContext } from "../Main";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const {
    appUI: { isDesktop, isMobile },
  } = useContext(AppContext);
  return (
    <div className={isDesktop ? `grid grid-rows h-screen text-center` : ``}>
      <div className="p-2">
        <div className="icon">logo</div>
        {isMobile &&
          (showNav ? (
            <button
              onClick={() => {
                setShowNav(false);
              }}
            >
              <i className="icon top-0 right-0 absolute p-4 fa fa-times"></i>
            </button>
          ) : (
            <button
              onClick={() => {
                setShowNav(true);
              }}
            >
              <i className="icon top-0 right-0 absolute p-4 fas fa-bars"></i>
            </button>
          ))}
      </div>
      {(showNav || isDesktop) && (
        <div className="icons place-self-end">
          <Icon iconLogo="far fa-user" info="Profile" selected={true} />
          <Icon iconLogo="fas fa-briefcase" info="Skills" />
        </div>
      )}
    </div>
  );
}
