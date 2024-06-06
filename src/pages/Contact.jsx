import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(JSON.stringify(values, null, 2));

  return (
    <div id="contact" className="ContactDiv">
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="ContactForm">
            <input type="text" placeholder="Enter Your Name" />
            <input
              type="text"
              placeholder="Enter a valid email address"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              })}
            />
            {errors.email && <p style={{ color: "red" }}>Invalid email</p>}
            <textarea type="text" placeholder="Enter Your Message" />
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
