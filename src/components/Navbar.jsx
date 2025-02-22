import React from "react";
import style from "../Css/Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={style.nav}>
      <a href="/"><img src="logo.png" alt="" className={style.img}/></a>
      <ul className={style.ul}>
        <li><a href="/" className={style.a}>Home</a></li>
        <li><a href="/cadastros" className={style.a}>Cadastro</a></li>
        <li><a href="/history" className={style.a}>Historia</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;