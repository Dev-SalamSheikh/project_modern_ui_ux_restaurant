import React from "react";
import { SubHeading } from "../../components";
import HeaderImage from "../../assets/welcome.png";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper-info">
      <SubHeading title="chase the New Falbour" />
      <h1 className="app__header-h1">The Key is Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus
      </p>
      <button type="button" className="custom__button">
        Explore Now
      </button>
    </div>
    <div className="app__header-img">
      <img src={HeaderImage} alt="headerImage" />
    </div>
  </div>
);

export default Header;
