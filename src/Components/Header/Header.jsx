import React, { useContext } from "react";
import Icon from "./Icon";
import { AppContext, Pages } from "../Main";
import { useNavigate } from "react-router-dom";
import logo_name_white from "../../Static/Images/logo_name_white.png";
// import profile_photo from "../../Static/Images/profile_photo.png"
import {
  FaUserAlt,
  FaWindowClose,
  FaBars,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";

export default function Header() {
  const navigate = useNavigate();
  const {
    appUI: { isDesktop, isMobile },
    currentPage,
    showNav,
    setShowNav,
    setCurrentPage,
  } = useContext(AppContext);

  return (
    <div
      className={
        isDesktop
          ? `grid grid-rows h-screen text-center black-bg shadow-lg`
          : `black-bg shadow-lg`
      }
    >
      <div className="">
        <div
          className={
            isMobile ? "pt-4 pl-4 cursor-pointer" : "pt-4 cursor-pointer icon"
          }
          onClick={() => {
            navigate("/");
            setCurrentPage(Pages.Profile);
            setShowNav(false);
          }}
        >
          <img src={logo_name_white} alt="logo" className="w-20" />
        </div>
        {isMobile && (
          <button
            onClick={() => {
              showNav ? setShowNav(false) : setShowNav(true);
            }}
          >
            <div className="icon top-0 right-0 absolute pt-10 pr-4 text-2xl">
              {showNav ? <FaWindowClose /> : <FaBars />}
            </div>
          </button>
        )}
      </div>
      {(showNav || isDesktop) && (
        <div className="icons place-self-end mb-2 pb-2">
          <Icon
            iconLogo={<FaUserAlt />}
            info="Profile"
            selected={currentPage === Pages.Profile}
            action={Pages.Profile}
            route={""}
          />
          <Icon
            iconLogo={<FaBriefcase />}
            info="Experience"
            selected={currentPage === Pages.Experience}
            action={Pages.Experience}
            route={"experience"}
          />
          <Icon
            iconLogo={<HiLightBulb className="text-xl" />}
            info="Skills"
            selected={currentPage === Pages.Skills}
            action={Pages.Skills}
            route={"skills"}
          />
          <Icon
            iconLogo={<FaGraduationCap />}
            info="Education"
            selected={currentPage === Pages.Education}
            action={Pages.Education}
            route={"education"}
          />
        </div>
      )}
    </div>
  );
}
