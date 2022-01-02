import React from "react";
import { ImLinkedin, ImMail3, ImFacebook2, ImTwitter } from "react-icons/im";

export default function Social() {
  return (
    <div className="flex flex-row-reverse my-2">
      <a href="" target="_blank" rel="noreferrer" className="p-2">
        <ImFacebook2 style={{ color: "#4267B2" }} className="text-2xl" />
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
  );
}
