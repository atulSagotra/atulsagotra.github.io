import React, { useContext } from "react";
import { ImLinkedin, ImMail3, ImGithub, ImTwitter } from "react-icons/im";
import { AppContext } from "../../Main";

export default function Social() {
  const {
    appUI: { isDesktop },
  } = useContext(AppContext);
  return (
    <div
      className={isDesktop ? "fixed right-0 bottom-0 my-4 p-4" : "pr-6 pb-6"}
    >
      <div className="text-right text-xl font-sans font-bold pr-6">
        Find me on:
      </div>
      <div className="flex flex-row-reverse">
        <a
          href="https://github.com/atulSagotra"
          target="_blank"
          rel="noreferrer"
          className="p-2"
        >
          <ImGithub style={{ color: "#6e5494" }} className="text-2xl" />
        </a>
        <a
          href="https://twitter.com/Atulsagotra"
          target="_blank"
          rel="noreferrer"
          className="p-2"
        >
          <ImTwitter style={{ color: "#1DA1F2" }} className="text-2xl" />
        </a>

        <a
          href="mailto:atulsagotra774@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="p-2"
        >
          <ImMail3 style={{ color: "#DB4437" }} className="text-2xl" />
        </a>

        <a
          href="https://www.linkedin.com/in/atulsagotra/"
          target="_blank"
          rel="noreferrer"
          className="p-2"
        >
          <ImLinkedin
            style={{ color: "#0077b5" }}
            className="text-sky-700 text-2xl"
          />
        </a>
      </div>
    </div>
  );
}
