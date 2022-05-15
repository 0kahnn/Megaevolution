import React, { useState } from "react";

import logo from "../../assets/icons/logo.png";
import usflag from "../../assets/icons/usflag.webp";
import koreaflag from "../../assets/icons/koreaflag.webp";
import japanflag from "../../assets/icons/japanflag.webp";
import { Offcanvas } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { menuItems } from "./menuItems";

const OffCanvasMenu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="d-md-none">
      <button onClick={handleShow} class="offcanvas-toggler">
        <FaBars />
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <a class="navbar-brand" href="#">
              <img src={logo} />{" "}
            </a>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul class="navbar-nav d-flex justify-content-end">
            {menuItems.map((el, i) => {
              return el.marketting ? (
                <li className="nav-item" key={i}>
                  <a className="nav-link marketting" href="#">
                    <span dangerouslySetInnerHTML={{ __html: el.name }}></span>
                  </a>
                </li>
              ) : el.myspace ? (
                <li className="nav-item mt-2" key={i}>
                  <a className="nav-link myspace" href="#">
                    {el.name}
                  </a>
                </li>
              ) : (
                <li className="nav-item" key={i}>
                  <a className="nav-link marketting" href="#">
                    {el.name}
                  </a>
                </li>
              );
            })}
            <div className="mobile-view mt-3">
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
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
export default OffCanvasMenu;
