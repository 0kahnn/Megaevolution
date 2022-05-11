import React from "react";

import logo from "../../assets/icons/logo.png";
import usflag from "../../assets/icons/usflag.webp";
import koreaflag from "../../assets/icons/koreaflag.webp";
import japanflag from "../../assets/icons/japanflag.webp";

export default function Header() {
  return (
    <>
      <div className="custom-container">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent mt-3 mr-auto">
          <a class="navbar-brand" href="#">
            <img src={logo} />{" "}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"> </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav d-flex align-items-center justify-content-end">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Partners
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link marketting" href="#">
                  Marketing <span>Home</span>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link myspace" href="#">
                  My Space
                </a>
              </li>
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
}
