import React from "react";
import logo from "../../assets/icons/logo.png";
import OffCanvasMenu from "./OffCanvasMenu";
import DesktopMenu from "./DesktopMenu";

const Header = () => {
  return (
    <>
      <div className="custom-container">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent mt-3 mr-auto">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="logo" />{" "}
          </a>
          <button
            class="navbar-toggler d-none"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"> </span>
          </button>
          <OffCanvasMenu />
          <DesktopMenu />
        </nav>
      </div>
    </>
  );
};
export default Header;
