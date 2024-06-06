import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  const form = useRef();
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

    if (validateForm()) {
      emailjs
        .sendForm("service_ri1hxne", "template_4fgqwoe", form.current, {
          publicKey: "vPU6zmxt3tS6MWxoh",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            form.current.reset();
            setSuccessMessage("Message sent successfully!");
            setTimeout(() => {
              setSuccessMessage("");
            }, 5000); // Clear the message after 5 seconds
          },
          (error) => {
            console.log("FAILED...", error.text);
            setErrorMessage("Failed to send the message. Please try again.");
            setTimeout(() => {
              setErrorMessage("");
            }, 5000); // Clear the message after 5 seconds
          }
        );
    }
  };

  return (
    <div id="contact" className="ContactDiv">
      {successMessage && <div className="notification success">{successMessage}</div>}
      {errorMessage && <div className="notification error">{errorMessage}</div>}
      <h3 style={{ textAlign: "center" }}>GET IN TOUCH</h3>
      <div className="ContactSection">
        <div className="Details">
          <div>
            <div className="AddressSection">
              <h3>Address</h3>
              <FaLocationDot />
            </div>
            <p>New Baneshwor, Kathmandu</p>
          </div>
          <div>
            <div className="AddressSection">
              <h3>Phone</h3>
              <FaPhoneAlt />
            </div>
            <p>+977-9829310011</p>
          </div>
          <div>
            <div className="AddressSection">
              <h3>Email</h3>
              <IoMdMail />
            </div>
            <p>abiralmanausya9@gmail.com</p>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="ContactForm">
            <input name="to_name" type="text" placeholder="Enter Your Name" />
            <input
              name="from_name"
              type="text"
              placeholder="Enter a valid email address"
            />
            <textarea
              name="message"
              type="text"
              placeholder="Enter Your Message"
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
