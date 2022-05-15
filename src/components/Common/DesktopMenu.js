import React from "react";
import usflag from "../../assets/icons/usflag.webp";
import koreaflag from "../../assets/icons/koreaflag.webp";
import japanflag from "../../assets/icons/japanflag.webp";
import { menuItems } from "./menuItems";

const DesktopMenu = () => {
  return (
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav d-flex align-items-center justify-content-end">
        {menuItems.map((el, i) => {
          return el.marketting ? (
            <li className="nav-item" key={i}>
              <a className="nav-link marketting" href="#">
                <span dangerouslySetInnerHTML={{ __html: el.name }}></span>
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
  );
};
export default DesktopMenu;
