import React, { useContext } from "react";
import { AppContext } from "../Main";
import { useNavigate } from "react-router-dom";

export default function Icon(props) {
  const navigate = useNavigate();
  const {
    appUI: { isDesktop, isMobile },
    setCurrentPage,
    setShowNav,
  } = useContext(AppContext);

  const handleIconClick = () => {
    if (isMobile) {
      setShowNav(false);
    }
    setCurrentPage(props.action);
    navigate(props.route);
  };
  return (
    <div
      className={`p-1 m-1 ${
        props.selected
          ? isDesktop
            ? "selected_icon_desktop"
            : "selected_icon_mobile"
          : ""
      }`}
      onClick={handleIconClick}
    >
      {isDesktop ? (
        <div className={`icon px-2 text-2xl`}>{props.iconLogo}</div>
      ) : null}
      <p className="">{props.info}</p>
      {!props.selected && isMobile ? <hr className="mt-1"></hr> : null}
      {props.selected && isDesktop ? (
        <hr className="underline mx-2"></hr>
      ) : null}
    </div>
  );
}
