import React from "react";
import cd from "../Css/Cadastro.module.css";
import titulo from '../Css/Titulos.module.css'

const Cadastro = () => {
  return (
    <div className={cd.ajeitar}>
      <h1 className={titulo.titulos}>Login</h1>
      <form action="" className={cd.container}>
        <label htmlFor="" className={cd.label}>
          <span>Nome</span>
          <input type="text" />
        </label>
        <label htmlFor="" className={cd.label}>
          <span>Email</span>
          <input type="email" />
        </label>
        <label htmlFor="" className={cd.label}>
          <span>Senha</span>
          <input type="password" />
        </label>

        <label htmlFor="" className={cd.label}>
          <span>CEP</span>
          <input type="" />
        </label >
        <label htmlFor="" className={cd.label}>
          <span>Logradouro</span>
          <input type="" />
        </label>
        <label htmlFor="" className={cd.label}>
          <span>Bairro</span>
          <input type="" />
        </label>
        <label htmlFor="" className={cd.label}>
          <span>Cidade</span>
          <input type="" />
        </label>
        <label htmlFor="" className={cd.label}>
          <span>Estado  </span>
          <input type="" />
        </label>
      </form>
    </div>
  );
};

export default Cadastro;
