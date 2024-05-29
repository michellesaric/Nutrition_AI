import { useState } from "react";
import HeaderBackground from "../../../assets/images/HeaderBackground";
import MediumIcon from "../../../assets/icons/MediumIcon";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  const [className, setClassName] = useState("header__link-wrapper");

  const handleOpen = () => {
    setClassName((prevClassName) => "header__link-wrapper-mobile");
  };

  const handleClose = () => {
    setClassName((prevClassName) => "header__link-wrapper");
  };
  return (
    <header className="header">
      <HeaderBackground className="header__background" />
      <div className="header__wrapper">
        <div className="header__link-logo-wrapper">
          <Link to="/" className="header__logo">
            recipix<span className="header__logo-dot">.</span>
          </Link>
          <div className="header__medium-icon" onClick={handleOpen}>
            <MediumIcon />
          </div>
          <div className={className}>
            <p className="header__link" onClick={handleClose}>
              calorie calculator
            </p>
            <p className="header__link" onClick={handleClose}>
              recipes
            </p>
            <p className="header__link" onClick={handleClose}>
              placeholder
            </p>
          </div>
        </div>
        <h1 className="header__main-title">Living smart? Living healthy?</h1>
        <p className="header__main-title-subtext">
          Create your own healthy multi-course meal based on whatever
          ingredients you like
        </p>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
