import React from "react";
import { useEffect, useState } from "react";
import db from "../data/db.json";
import style from "../Css/Home.module.css";
import PropsCard from "../props/PropsCard";

const Home = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    setCursos(db.cursos);
  }, []);

  return (
    <div className={style.ajeitar}>
      {cursos.map((curso) => (
        <PropsCard
          key={curso.id}
          img={curso.img}
          nome={curso.nome}
          modalidade={curso.modalidade}
          localizacao={curso.localizacao}
          horas={curso.horas}
        />
      ))}
    </div>
  );
};

export default Home;

{
  /* <Card style={{ width: '18rem' }} key={curso.id}>
<Card.Img variant="top" src={curso.img} />
<Card.Body>
  <Card.Title>{curso.nome}</Card.Title>
  <Card.Text maxlength='60'>{curso.descricao}</Card.Text>
  <Button variant=""className={style.btn}>Go somewhere</Button>
</Card.Body>
</Card> */
}
