import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="ContactDiv">
      <h2>GET IN TOUCH</h2>
      <div className="Details">
        <div>
          <FaLocationDot />
          <h3>Address</h3>
          <p>New Baneshwor, Kathmandu</p>
        </div>
        <div>
          <FaPhoneAlt />
          <h3>Phone</h3>
          <p>9829310011</p>
        </div>
        <div>
          <IoMdMail />
          <h3>Email</h3>
          <p>abiralmanausya9@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
