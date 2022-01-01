import React, { useContext } from "react";
import Icon from "./Icon";
import { AppContext, Pages } from "../Main";
import { useNavigate } from "react-router-dom";
import {
  FaUserAlt,
  FaWindowClose,
  FaBriefcase,
  FaBars,
  FaGraduationCap,
} from "react-icons/fa";

export default function Header() {
  const navigate = useNavigate();
  const {
    appUI: { isDesktop, isMobile },
    currentPage,
    showNav,
    setShowNav,
  } = useContext(AppContext);

  return (
    <div
      className={
        isDesktop
          ? `grid grid-rows h-screen text-center header shadow-lg `
          : `header shadow-lg`
      }
    >
      <div className="">
        <div
          className={
            isMobile ? "pt-4 pl-4 cursor-pointer" : "pt-4 cursor-pointer"
          }
          onClick={() => {
            navigate("/");
          }}
        >
          logo
        </div>
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
            route={"/"}
          />
          <Icon
            iconLogo={<FaBriefcase />}
            info="Skills"
            selected={currentPage === Pages.Skills}
            action={Pages.Skills}
            route={"/skills"}
          />
          <Icon
            iconLogo={<FaGraduationCap />}
            info="Education"
            selected={currentPage === Pages.Education}
            action={Pages.Education}
            route={"/education"}
          />
        </div>
      )}
    </div>
  );
}
