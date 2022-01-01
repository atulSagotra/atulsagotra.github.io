import React, { useState, useContext } from "react";
import Icon from "./Icon";
import { AppContext, Pages } from "../Main";
import { FaUserAlt, FaWindowClose, FaBriefcase, FaBars } from "react-icons/fa";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const {
    appUI: { isDesktop, isMobile },
    currentPage,
  } = useContext(AppContext);
  return (
    <div className={isDesktop ? `grid grid-rows h-screen text-center` : ``}>
      <div className="p-2 mt-2">
        <div className="">logo</div>
        {isMobile &&
          (showNav ? (
            <button
              onClick={() => {
                setShowNav(false);
              }}
            >
              <div className="icon top-0 right-0 absolute p-4 text-2xl">
                <FaWindowClose />
              </div>
            </button>
          ) : (
            <button
              onClick={() => {
                setShowNav(true);
              }}
            >
              <div className="icon top-0 right-0 absolute p-4 text-2xl">
                <FaBars />
              </div>
            </button>
          ))}
      </div>
      {(showNav || isDesktop) && (
        <div className="icons place-self-end mb-2">
          <Icon
            iconLogo={<FaUserAlt />}
            info="Profile"
            selected={currentPage === Pages.Profile}
            action={Pages.Profile}
          />
          <Icon
            iconLogo={<FaBriefcase />}
            info="Skills"
            selected={currentPage === Pages.Skills}
            action={Pages.Skills}
          />
        </div>
      )}
    </div>
  );
}
