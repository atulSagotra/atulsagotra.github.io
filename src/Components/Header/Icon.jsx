import React, { useContext } from "react";
import { AppContext, Pages } from "../Main";

export default function Icon(props) {
  const {
    appUI: { isDesktop, isMobile },
    setCurrentPage,
  } = useContext(AppContext);

  const handleIconClick = () => {
    setCurrentPage(props.action);
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
      {props.selected && isDesktop ? <hr className="underline"></hr> : null}
    </div>
  );
}
