import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderBackground from "../../assets/images/HeaderBackground";
import MediumIcon from "../icons/MediumIcon";
import SearchBar from "../SearchBar/SearchBar";
import HeaderBackgroundRecipe from "../../assets/images/HeaderBackgroundRecipe";

const Header = () => {
  const [className, setClassName] = useState("header__link-wrapper");
  const location = useLocation();

  const handleOpen = () => {
    setClassName("header__link-wrapper-mobile");
  };

  const handleClose = () => {
    setClassName("header__link-wrapper");
  };

  const isHome = location.pathname === "/";

  return (
    <header className="header">
      {isHome ? (
        <HeaderBackground className="header__background" />
      ) : (
        <HeaderBackgroundRecipe />
      )}
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
        {isHome && (
          <>
            <h1 className="header__main-title">
              Living smart? Living healthy?
            </h1>
            <p className="header__main-title-subtext">
              Create your own healthy multi-course meal based on whatever
              ingredients you like
            </p>
            <SearchBar />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
