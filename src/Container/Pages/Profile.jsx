import React, { useContext } from "react";
import { AppContext } from "../Main";
import profile_photo from "../../Static/Images/profile_photo.png";
import TypeWriter from "./Effects/TypeWriter";

export default function Profile() {
  const {
    appUI: { isDesktop, isMobile },
  } = useContext(AppContext);
  return (
    <div id="profile" className="page bg-black-900">
      <div
        className={`${
          isDesktop && "flex flex-row justify-center h-3/5"
        } opal-bg p-2 rounded-xl drop-shadow-2xl shadow-black`}
      >
        <div
          className={`${
            isMobile ? "w-1/2" : "w-1/4"
          } drop-shadow-2xl shadow-black self-center`}
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
        <h1 className="text-3xl font-bold font-mono text-left pt-4">About</h1>
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
        <h1 className="text-3xl font-bold font-mono text-left pt-4">Education</h1>
        <p className="text-justify">
          I have pursued Bachelor of Technology in Computer Science Engineering
          from&nbsp;
          <a
            href="https://www.cgc.edu.in/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            {"Chandigarh Group of Colleges"}
          </a>.
        </p>
      </div>
    </div>
  );
}
