import React from "react";
import style from "../Css/Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={style.nav}>
      <a href="/"><img src="logo.png" alt="" className={style.img}/></a>
      <ul className={style.ul}>
        <li><a href="/" className={style.a}>Home</a></li>
        <li><a href="/historia" className={style.a}>Historia</a></li>
        <li><a href="/cadastro" className={style.a}>Cadastro</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;