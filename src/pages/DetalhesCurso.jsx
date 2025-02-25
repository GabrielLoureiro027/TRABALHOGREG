import React from 'react'
import PropsDetalhesCurso from '../props/PropsDetalhesCurso'

const DetalhesCurso = () => {

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
      <PropsDetalhesCurso
      key={cursos.id}
      img={cursos.img}
      nome={cursos.nome}
      modalidade={cursos.modalidade}
      localizacao={cursos.localizacao}
      horas={cursos.horas}/>
    </div>
  )
}

export default DetalhesCurso
