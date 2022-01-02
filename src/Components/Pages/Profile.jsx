import React, { useContext } from "react";
import { AppContext } from "../Main";
import profile_photo from "../../Static/Images/profile_photo.png";
import TypeWriter from "./Effects/TypeWriter";
import ContactUs from "./Effects/ContactUs";
import Social from "./Effects/Social";

export default function Profile() {
  const {
    appUI: { isDesktop, isMobile },
  } = useContext(AppContext);
  return (
    <div id="profile" className="page bg-black-900">
      <div
        className={`${
          isDesktop && "flex flex-row justify-center"
        } opal-bg p-2 rounded-xl drop-shadow-2xl shadow-black`}
      >
        <div
          className={`${
            isMobile ? "w-1/2" : "w-1/5"
          } drop-shadow-2xl shadow-black`}
        >
          <img
            src={profile_photo}
            alt="profile"
            className="rounded-full border-8"
          />
        </div>
        <div className="self-center p-6">
          <h1 className="text-4xl font-mono font-bold">Atul Sagotra</h1>
          <TypeWriter
            heading={"I"}
            messages={[
              "am Software Engineer.",
              "am Web Developer.",
              "created this website.",
              "am Proud Indian.",
            ]}
          />
        </div>
      </div>
      <div className="p-2">
        <p className="text-justify">
          Hi I am Atul Sagotra, a 23 year old Web Developer living in Jammu
          (Jammu and Kashmir), India. I am Computer Science Engineer, currently
          working with awesome folks at&nbsp;
          <a
            href="https://www.xoriant.com/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            {"Xoriant"}
          </a>
          . I am innovative Software Enginer having 2 years of expertise in
          Front-end application development with in-depth knowledge of
          developing UI/UX, Front-end applications, micro-frontend applications,
          Product development, Git and many more technologies.
        </p>
        <Social />
      </div>
    </div>
  );
}