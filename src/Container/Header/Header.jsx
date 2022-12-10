import React, { useContext } from "react";
import Icon from "./Icon";
import { AppContext, Pages } from "../Main";
import { useNavigate } from "react-router-dom";
import logo_name_white from "../../Static/Images/logo_name_white.png";
import { FaUserAlt, FaWindowClose, FaBars, FaBriefcase } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { MdContactMail } from "react-icons/md";

export default function Header() {
  const navigate = useNavigate();
  const {
    appUI: { isDesktop, isMobile, scrollPageApp },
    currentPage,
    showNav,
    setShowNav,
    setCurrentPage,
  } = useContext(AppContext);

  return (
    <div
      className={
        isDesktop
          ? `grid grid-rows h-screen text-center blue-bg shadow-lg`
          : `blue-bg shadow-lg`
      }
    >
      <div className="">
        <div
          className={
            isMobile ? "pt-4 pl-4 cursor-pointer" : "pt-4 cursor-pointer icon"
          }
          onClick={() => {
            if (!scrollPageApp) {
              navigate("/");
            }
            setCurrentPage(Pages.Profile);
            setShowNav(false);
          }}
        >
          <a href="#profile">
            <img src={logo_name_white} alt="logo" className="w-20" />
          </a>
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
            iconLogo={<MdContactMail />}
            info="Contact"
            selected={currentPage === Pages.Contact}
            action={Pages.Contact}
            route={"contact"}
          />
        </div>
      )}
    </div>
  );
}
