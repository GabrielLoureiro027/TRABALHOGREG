import React from 'react'

const PropsDetalhesCurso = ({id,img,nome,descricao, turno,horas,localizacao,modalidade}) => {
  return (
    
    <div>
        <img src={img} alt="" key={id}/>
      <h1>{nome}</h1>
      <p>{turno}</p>
      <p>{horas}</p>
      <p>{modalidade}</p>
      <p>{localizacao}</p> 
      <p>{descricao}</p>
    </div>
  )
}

export default PropsDetalhesCurso
