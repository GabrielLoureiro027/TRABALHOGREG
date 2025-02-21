import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import db from "../db.json";
import style from "../Css/Home.module.css"

const Home = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    setCursos(db.cursos); // Access the cursos array
  }, []);

  return (
    <div className={style.ajeitar}>
      {cursos.map((curso) => (
        <Card style={{ width: '18rem' }} key={curso.id}>
          <Card.Img variant="top" src={curso.img} />
          <Card.Body>
            <Card.Title>{curso.nome}</Card.Title>
            <Card.Text maxlength='60'>{curso.descricao}</Card.Text>
            <Button variant=""className={style.btn}>Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Home;
