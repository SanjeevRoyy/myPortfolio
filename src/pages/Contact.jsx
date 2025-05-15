import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  const form = useRef(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const name = form.current.to_name.value;
    const email = form.current.from_name.value;
    const message = form.current.message.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!name || !email || !message) {
      setErrorMessage("All fields are required.");
      return false;
    }

    if (!emailPattern.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs
      .sendForm("service_ri1hxne", "template_4fgqwoe", form.current, {
        publicKey: "vPU6zmxt3tS6MWxoh",
      })
      .then(
        () => {
          form.current.reset(); // No need for ! in JS
          setSuccessMessage("Message sent successfully!");
          setTimeout(() => setSuccessMessage(""), 5000);
        },
        () => {
          setErrorMessage("Failed to send the message. Please try again.");
          setTimeout(() => setErrorMessage(""), 5000);
        }
      );
  };
  return (
    <section id="contact" className="contact">
      {successMessage && (
        <div className="notification success">{successMessage}</div>
      )}
      {errorMessage && <div className="notification error">{errorMessage}</div>}

      <h4 className="contact__subtitle">GET IN TOUCH</h4>

      <div className="contact__card">
        {/* ────── left column ────── */}
        <div className="contact__details">
          <div className="contact__item">
            <FaLocationDot className="contact__icon" />
            <div>
              <h3>Address</h3>
              <p>New Baneshwor, Kathmandu</p>
            </div>
          </div>
          <div className="contact__item">
            <FaPhoneAlt className="contact__icon" />
            <div>
              <h3>Phone</h3>
              <p>+977 9829310011</p>
            </div>
          </div>
          <div className="contact__item">
            <IoMdMail className="contact__icon" />
            <div>
              <h3>Email</h3>
              <p>abiralmanausya9@gmail.com</p>
            </div>
          </div>
        </div>

        {/* ────── right column ────── */}
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input
            name="to_name"
            type="text"
            placeholder="Your Name"
            className="input"
          />
          <input
            name="from_name"
            type="email"
            placeholder="Email Address"
            className="input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="textarea"
          />
          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
