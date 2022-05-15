import React, { useState } from "react";

import logo from "../../assets/icons/logo.png";
import usflag from "../../assets/icons/usflag.webp";
import koreaflag from "../../assets/icons/koreaflag.webp";
import japanflag from "../../assets/icons/japanflag.webp";
import { Button, Offcanvas } from "react-bootstrap";
import OffCanvasMenu from "./OffCanvasMenu";
import { menuItems } from "./menuItems";

const Header = () => {
  return (
    <>
      <div className="custom-container">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent mt-3 mr-auto">
          <a class="navbar-brand" href="#">
            <img src={logo} />{" "}
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

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav d-flex align-items-center justify-content-end">
              {menuItems.map((el, i) => {
                return el.marketting ? (
                  <li className="nav-item" key={i}>
                    <a className="nav-link marketting" href="#">
                      <span
                        dangerouslySetInnerHTML={{ __html: el.name }}
                      ></span>
                    </a>
                  </li>
                ) : el.myspace ? (
                  <li className="nav-item" key={i}>
                    <a className="nav-link myspace" href="#">
                      {el.name}
                    </a>
                  </li>
                ) : (
                  <li className="nav-item" key={i}>
                    <a className="nav-link " href="#">
                      {el.name}
                    </a>
                  </li>
                );
              })}

              <div className="mobile-view">
                <li className="nav-item px-0">
                  <a className="nav-link" href="#">
                    <img src={usflag} className="flag" />
                  </a>
                </li>
                <li className="nav-item px-0">
                  <a className="nav-link" href="#">
                    <img src={koreaflag} className="flag" />
                  </a>
                </li>
                <li className="nav-item px-0">
                  <a className="nav-link" href="#">
                    <img src={japanflag} className="flag" />
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Header;
