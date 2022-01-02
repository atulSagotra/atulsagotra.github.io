import React from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_oz0d2cf",
        "template_610b4ob",
        e.target,
        "user_j0mKGOrbbp5aRN01HkfLi"
      )
      .then(
        () => {
          window.location.reload();
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

  return (
    <form className="contact-form text-black" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="html_message" />
      <input type="submit" value="Send" />
    </form>
  );
}
