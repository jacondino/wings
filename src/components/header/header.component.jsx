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
            <a><img src={logo} /></a>
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
            <Link href={"/main"}>
              <a onClick={() => showSidebar()}>
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li className={"nav-text"}>
            <Link href={"/categorias"}>
              <a onClick={() => showSidebar()}>
                <span>Cursos</span>
              </a>
            </Link>
          </li>
          <li className={"nav-text"}>
            <Link href={"/assistance"}>
              <a onClick={() => showSidebar()}>
                <span>Assistentes</span>
              </a>
            </Link>
          </li> 
        </ul>
      </nav>
    </div>
  );
};
