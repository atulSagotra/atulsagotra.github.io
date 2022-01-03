import React, { useState, useContext } from "react";
import emailjs from "emailjs-com";
import { AppContext } from "../Main";
import logo_name_white from "../../Static/Images/logo_name_white.png";

export default function Contact() {
  const {
    appUI: { isDesktop },
  } = useContext(AppContext);

  function sendEmail(e) {
    emailjs
      .sendForm(
        "service_oz0d2cf",
        "template_610b4ob",
        e.target,
        "user_j0mKGOrbbp5aRN01HkfLi"
      )
      .then(
        () => {
          console.log("Form Submitted");
        },
        (error) => {
          window.alert(
            "Sorry Your couldn't be send due to " +
              error.text +
              " Please try again"
          );
        }
      );
  }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFieldChange = (fieldKey, fieldValue) => {
    if (fieldValue) {
      setFormData((previous) => {
        let newValues = { ...previous, [fieldKey]: fieldValue };
        return newValues;
      });
    }
  };

  return (
    <div id="contact" className="h-1/5 p-6 bg-gray-600">
      <div className="text-4xl font-mono font-bold">Contact Me</div>
      <p className="text-justify py-2">
        Get in touch, to discuss innovative ideas or to work on awesome
        projects.
      </p>
      <div className="lg:flex lg:flex-row-2">
        <form className="flex flex-col lg:w-1/2" onSubmit={sendEmail}>
          <div className={isDesktop ? "flex flex-row-2 py-1" : ""}>
            <div
              className={
                isDesktop ? "flex flex-col w-1/2 mr-4" : "flex flex-col"
              }
            >
              <label>Name</label>
              <input
                required
                placeholder="Name"
                className="rounded-md p-2 black"
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => handleFieldChange("name", e.target.value)}
              />
            </div>
            <div
              className={isDesktop ? "flex flex-col w-1/2" : "flex flex-col"}
            >
              <label>Email</label>
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                className="rounded-md p-2 black"
                value={formData.email}
                onChange={(e) => handleFieldChange("email", e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col py-1">
            <label>Message</label>
            <textarea
              required
              name="message"
              placeholder="Enter Your Message"
              className="rounded-md p-2 black"
              value={formData.message}
              onChange={(e) => handleFieldChange("message", e.target.value)}
            />
          </div>
          <div className={isDesktop ? "w-1/3 py-1" : "py-1"}>
            <input
              type="submit"
              className="opal-bg rounded-lg text-2xl p-2 shadow-xl w-full mt-1"
              value="Send"
            />
          </div>
        </form>
        <div className="lg:block hidden w-1/2 pl-40">
          <img
            src={logo_name_white}
            alt="logo"
            className="w-3/5 shadow-4xl rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
