import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_yvg82tn",
        "template_tgkt6k7",
        {
          user_name: firstName + " " + lastName,
          email: email,
          message: message,
        },
        "ZCRYIZ__9hL-Y1_Ej"
      )
      .then(
        (result) => {
          toast.success("your message send successfuly", {
            position: "top-right",
            autoClose: 990,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          setError(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div className="container">
        <h1 className="Sub-title">Contact Me</h1>
        <div className="contact">
          <h2>JOIN Mohamed Achouch</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="414"
            height="2"
            viewBox="0 0 414 2"
            fill="none"
          >
            <path d="M0 1H414" stroke="url(#paint0_linear_13_46)" />
            <defs>
              <linearGradient
                id="paint0_linear_13_46"
                x1="414"
                y1="1.00238"
                x2="0"
                y2="1"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#343045" />
                <stop offset="0.348958" stop-color="#C0B7E8" />
                <stop offset="0.6875" stop-color="#8176AF" />
                <stop offset="1" stop-color="#343045" />
              </linearGradient>
            </defs>
          </svg>
          <p>Let’s Build Your VR Experience</p>
          <div className="input">
            <input
              type="text"
              required
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              required
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input">
            <input
              type="email"
              required
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <textarea
            onChange={(e) => setMessage(e.target.value)}
            className="message"
            required
            type="text"
            placeholder="Type Somting"
          />
          <button className="btn" onClick={sendMail}>
            Send To Mohamed
          </button>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
