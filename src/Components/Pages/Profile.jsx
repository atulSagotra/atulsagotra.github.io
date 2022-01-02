import React, { useContext } from "react";
import { AppContext } from "../Main";
import profile_photo from "../../Static/Images/profile_photo.png";

export default function Profile() {
  const {
    appUI: { isDesktop, isMobile },
  } = useContext(AppContext);
  return (
    <div className="page">
      <div className="grid-cols">
        <div className={isMobile ? "w-1/2" : "w-1/4"}>
          <img
            src={profile_photo}
            alt="profile"
            className="rounded-full border-8"
          />
        </div>
      </div>
    </div>
  );
}
