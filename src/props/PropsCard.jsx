import React from "react";
import style from '../Css/PropsCards.module.css'

// Agora o PropsCard recebe as props
const PropsCard = ({ img, nome, descricao, modalidade, localizacao, horas }) => {
  return (
    <div>
      <div id="card" className={style.card}>
        <img src={img} alt='' className={style.foto}/>
        <h2 className={style.titulo}>{nome}</h2>
        <p>{horas} horas</p>
        <p>{modalidade}</p>
        <p>{localizacao}</p>
        <button className={style.btn}>Visualizar</button>
      </div>
    </div>
  );
};

export default PropsCard;
