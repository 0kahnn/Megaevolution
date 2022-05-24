import React from "react";
import usflag from "../../assets/icons/usflag.webp";
import koreaflag from "../../assets/icons/koreaflag.webp";
import japanflag from "../../assets/icons/japanflag.webp";
import { menuItems } from "./menuItems";
import { NavLink } from "react-router-dom";

const DesktopMenu = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav d-flex align-items-center justify-content-end">
        {menuItems.map((el, i) => {
          return el.marketting ? (
            <li className="nav-item" key={i}>
              <NavLink className="nav-link marketting" to={el.link}>
                <span dangerouslySetInnerHTML={{ __html: el.name }}></span>
              </NavLink>
            </li>
          ) : el.myspace ? (
            <li className="nav-item" key={i}>
              <NavLink className="nav-link myspace" to={el.link}>
                {el.name}
              </NavLink>
            </li>
          ) : (
            <li className="nav-item" key={i}>
              <NavLink className="nav-link " to={el.link}>
                {el.name}
              </NavLink>
            </li>
          );
        })}

        <div className="mobile-view">
          <li className="nav-item px-0">
            <a className="nav-link" href="#">
              <img alt="usflag" src={usflag} className="flag" />
            </a>
          </li>
          <li className="nav-item px-0">
            <a className="nav-link" href="#">
              <img alt="koreaflag" src={koreaflag} className="flag" />
            </a>
          </li>
          <li className="nav-item px-0">
            <a className="nav-link" href="#">
              <img alt="japanflag" src={japanflag} className="flag" />
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};
export default DesktopMenu;
