import React, { useContext } from "react";
import { AppContext } from "../Main";

export default function Icon(props) {
  const {
    appUI: { isDesktop, isMobile },
  } = useContext(AppContext);
  return (
    <div
      className={`p-2 ${
        props.selected
          ? isDesktop
            ? "selected_icon_desktop"
            : "selected_icon_mobile"
          : ""
      }`}
    >
      {isDesktop ? (
        <i className={`icon px-2 py-1 ${props.iconLogo}`}></i>
      ) : null}
      <p className="px-2">{props.info}</p>
      {!props.selected && isMobile ? <hr className="mt-1"></hr> : null}
      {props.selected && isDesktop ? (
        <hr className="underline mt-1"></hr>
      ) : null}
    </div>
  );
}
