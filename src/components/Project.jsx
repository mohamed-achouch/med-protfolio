import React from "react";

const Project = ({ item }) => {
  return (
    <div className="project">
      <div className="image">
        <img src={item.image} alt="" />
      </div>
      <div className="details">
        <h1>{item.name}</h1>
        <p>{item.desc}</p>
      </div>
      <div className="buttons">
        <a href={item.demo}>Demo</a>
        <a href={item.repo}>repo</a>
      </div>
    </div>
  );
};

export default Project;
