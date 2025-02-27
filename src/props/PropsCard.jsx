import React from "react";
import style from "../Css/PropsCards.module.css";
import { useNavigate } from "react-router-dom";

const PropsCard = ({ id, img, nome, modalidade, localizacao, horas }) => {
  const navigate = useNavigate();

  const irParaDetalhes = () => {
    console.log(id); 
    navigate(`/detalhes/${id}`); 
  };

  return (
    <div id="props" className={style.props}>
      <div id="card" className={style.card}>
        <img src={img} alt={nome} className={style.foto} />
        <h2 className={style.titulo}>{nome}</h2>
        <p>{horas} horas</p>
        <p>{modalidade}</p>
        <p>{localizacao}</p>
        <button className={style.btn} onClick={irParaDetalhes}>
          Visualizar
        </button>
      </div>
    </div>
  );d
};

export default PropsCard;
