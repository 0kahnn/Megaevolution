import React from "react";
import logo from "../../assets/icons/logo.png";
import OffCanvasMenu from "./OffCanvasMenu";
import DesktopMenu from "./DesktopMenu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="custom-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent mt-3 mr-auto">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />{" "}
          </Link>
          <button
            className="navbar-toggler d-none"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <OffCanvasMenu />
          <DesktopMenu />
        </nav>
      </div>
    </>
  );
};
export default Header;
