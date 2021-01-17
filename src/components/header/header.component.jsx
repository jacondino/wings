import React, { useState } from "react";
import Link from "next/link";
import bar from "../../../public/bars.png";
import close from "../../../public/close.png";
import logo from "../../../public/logo.png";
import "./style.scss";

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="header">
      <div className="navbar">
        <button className="menu-bars" onClick={showSidebar}>
          <img src={bar} />
        </button>
        <span className="logo">
          <Link href={"/"}>
            <img className="logo" src={logo} alt=""/>
          </Link>
        </span>
        <span className="user">MW</span>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-hrefggle">
            <button className="menu-bars" onClick={showSidebar}>
              <img src={close} width="18" />
            </button>
          </li>
          <li className={"nav-text"}>
            <Link href={"/cursos"}>
              <a onClick={() => showSidebar()}>
                <span>Cursos</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
