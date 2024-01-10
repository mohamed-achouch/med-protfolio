import React from "react";
import services from "../services";
const Services = () => {
  return (
    <section className="services" id="services">      
        <div className="container">
          <h1 className="Sub-title">Services Section</h1>
          <div className="list_services">
            {services.map((item, index) => (
              <div key={index} className="service">
                <img src={item.image} alt="" />
                <h2>{item.title}</h2>              
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Services;
