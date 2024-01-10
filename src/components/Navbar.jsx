import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import "../assets/styles/navbar.css";
import { Fade } from "react-awesome-reveal";
import MenuButton from '../components/MenuButton'
const Navbar = () => {
  const [open,setOpen]= useState(true);

const OpenAndClose = () => {
  setOpen(!open)
}

  return (
    <Fade>
      <div className="header">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
         <div className={`menu_header ${open ? 'close' : ''}`}>
         <ul className=" nav">
            <li>
              <a href="/#" onClick={OpenAndClose}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={OpenAndClose}>About</a>
            </li>
            <li>
              <a href="/#services" onClick={OpenAndClose}>Services</a>
            </li>
            <li>
              <a href="/#" onClick={OpenAndClose}>Projects</a>
            </li>
            <li>
              <a href="#skills" onClick={OpenAndClose}>Skills</a>
            </li>
            <li>
              <a href="/#" onClick={OpenAndClose}>Testimonials</a>
            </li>
          </ul>
          <ul className="review_contact">
            <li>
              <a href="/#contact" onClick={OpenAndClose}>Contact</a>
            </li>
            <li>
              <a href="/#" onClick={OpenAndClose}>Add Reviews</a>
            </li> 
          </ul>
         </div>
         <div className="close_open" onClick={OpenAndClose}>
         <MenuButton/>
         </div>
        </div>
      </div>
    </Fade>
  );
};

export default Navbar;
