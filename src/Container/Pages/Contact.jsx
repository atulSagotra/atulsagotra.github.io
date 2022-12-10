import React, { useState, useContext } from "react"
import { AppContext } from "../Main"
import logo_name_black from "../../Static/Images/logo_name_black.png"
import keys from "../emailKeys"
import axios from "axios"
import { showNotification } from "../Components/ShowNotification"
import { ToastContainer } from "react-toastify"

export default function Contact() {
  const {
    appUI: { isDesktop },
  } = useContext(AppContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
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

  function sendEmail(e) {
    e.preventDefault()
    const data = {
      service_id: keys.SERVICE_ID,
      template_id: keys.TEMPLATE_ID,                                                                                               
      user_id: keys.PUBLIC_KEY,
      template_params: {
        ...formData
      }
    }
    axios.post('https://api.emailjs.com/api/v1.0/email/send/', {
      ...data
    }).then((response) => {
      console.log(response)
      showNotification('success', 'Your Message has been Successfully Sent')
    }).catch((error) => {
      showNotification('error', error.message)
    });
  }

  return (
    <div id="contact" className="h-1/5 p-6 background-primary">
        <ToastContainer />
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
                className="rounded-md p-2"
                type="text"
                name="name"
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
                className="rounded-md p-2"
                onChange={(e) => handleFieldChange("email", e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col py-1">
          <div
              className={isDesktop ? "flex flex-col w-1/2" : "flex flex-col"}
            >
              <label>Contact Number</label>
              <input
                required
                type="number"
                name="phone_number"
                placeholder="Phone Number"
                className="rounded-md p-2"
                onChange={(e) => handleFieldChange("phone_number", e.target.value)}
              />
            </div>
            <label>Message</label>
            <textarea
              required
              name="message"
              placeholder="Enter Your Message"
              className="rounded-md p-2 black"
              onChange={(e) => handleFieldChange("message", e.target.value)}
            />
          </div>
          <div className={isDesktop ? "w-1/3 py-4" : "py-4"}>
            <input
              type="submit"
              className="blue-bg text-white rounded-lg text-2xl p-2 shadow-xl w-full mt-1"
              value="Send"
            />
          </div>
        </form>
        <div className="lg:block hidden w-1/2 pl-40">
          <img
            src={logo_name_black}
            alt="logo"
            className="w-3/5 shadow-4xl rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
