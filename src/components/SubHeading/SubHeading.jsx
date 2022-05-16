import React from "react";
import Spoon from "../../assets/spoon.png";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{title}</p>
    <img src={Spoon} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
