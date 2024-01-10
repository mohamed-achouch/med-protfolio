import React from "react";
import image from "../assets/images/mohamed.jpg";
import Button from "./Button";
const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="Sub-title">About Section</h1>
      <div className="details">
        <img src={image} alt="" />
        <div className="details_mohamed">
          <h1>Mohamed Achouch</h1>
          <p>
            Hi, I'm mohamed achouch, and I graduated from the ecole miage in
            rabat.
            <br /> My interests are in Front End Engineering, and I love to
            create beautiful and performant products with delightful user
            experiences.
            <br /> I previously worked as a freelancer .<br /> I'm interested in
            the Front End Engineer role because I like working in this
          </p>
          <Button contnet="LET’S GET IN TOUCH"/>
        </div>
      </div>
    </section>
  );
};

export default About;
