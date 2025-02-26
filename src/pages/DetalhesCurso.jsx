import React from "react";
import PropsDetalhesCurso from "../props/PropsDetalhesCurso";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const url = "http://localhost:5000/cursos";

const DetalhesCurso = () => {

  const [cursos, SetCursos] = useState([]);

  useEffect(() => {
    async function fetchCursos() {
      //busca os dados da api
      const res = await fetch(url);
      //Convetendo a resposta para json
      const data = await res.json();
      //Atualiza a variavel de estado cursos com os dados da api
      SetCursos(data);
      console.log(cursos);
    }
    fetchCursos();
  });

  return (
    <div>
      <PropsDetalhesCurso
        key={cursos.id}
        img={cursos.img}
        nome={cursos.nome}
        modalidade={cursos.modalidade}
        localizacao={cursos.localizacao}
        horas={cursos.horas}
      />
    </div>
  );
};

export default DetalhesCurso;
