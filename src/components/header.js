import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.png";
import * as headerStyles from "./header.module.css";

export default function Header() {
  return (
    <div className={headerStyles.header}>
      <img className={headerStyles.logo} src={logo} alt="logo Guia Global" Link to="/"/>
      <nav className={headerStyles.topnav}>
        <Link to="/">🏠 Home</Link>
        <Link to="/sobre-nos">😄 Sobre nós</Link>
        <Link to="/clima"> ☁️ Clima</Link>
        <Link to="/fale-conosco"> 📧 Fale Conosco</Link>
        <Link to="/viagens">🧳 Viagens</Link>
        <Link to="/mapas">🗺️ Mapas</Link>
        <Link to="/blog">📒 Blog</Link>
      </nav>
    </div>
  );
}
