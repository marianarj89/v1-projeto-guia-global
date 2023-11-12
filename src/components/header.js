import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../images/logo.png";
import * as headerStyles from "./header.module.css";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={headerStyles.header}>
      <Link className="nav-link" to="/">
        <img className={headerStyles.logo} src={logo} alt="logo Guia Global" />
      </Link>
      <nav
        className={`navbar navbar-expand-lg navbar-light  ${headerStyles.customNavbar}`}
      >
        <a className="navbar-brand" href="#">
          {" "}
        </a>
        <button
          className={`navbar-toggler ${headerStyles.customTogglerButton}`}
          type="button"
          onClick={handleToggle}
        >
          <span
            className={`navbar-toggler-icon ${headerStyles.customTogglerIcon}`}
          ></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active"></li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                🏠 Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre-nos">
                😄 Sobre Nós
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/clima">
                ☁️ Clima
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/viagens">
                🧳 Viagens
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mapas">
                🗺️ Mapas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                📒 Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fale-conosco">
                📧 Fale Conosco
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
