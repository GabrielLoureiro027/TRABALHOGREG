import React from "react";
import { useEffect, useState } from "react";

const Contato = () => {

  const [cursos, SetCursos] = useState([]);
  
    useEffect(() => {
        async function fetchCursos () {
          //busca os dados da api
          const res = await fetch('http://localhost:5000/cursos')
          //Convetendo a resposta para json
          const data = await res.json();
          //Atualiza a variavel de estado cursos com os dados da api
          SetCursos(data);
          console.log(cursos);
        }
        fetchCursos();
    })

  return (
    <div>
      <h1>Contatos</h1>

    </div>
  );
};

export default Contato;
