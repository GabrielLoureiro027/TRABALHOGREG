import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import PropsDetalhesCurso from '../props/PropsDetalhesCurso';

const DetalhesCurso = () => {
    const { id } = useParams(); 
    const [curso, setCurso] = useState(null); 

    useEffect(() => {
        async function fetchCurso() {
            const res = await fetch(`http://localhost:5000/cursos/${id}`);
            const data = await res.json();
            setCurso(data); 
        }

        fetchCurso();
    }, [id]); 
    return (
        <div>
            {curso ? (
                <PropsDetalhesCurso
                    key={curso.id}
                    img={curso.img}
                    nome={curso.nome}
                    modalidade={curso.modalidade}
                    localizacao={curso.localizacao}
                    horas={curso.horas}
                    descricao={curso.descricao} 
                />
            ) : (
                <p>Carregando...</p> 
            )}
        </div>
    );
};

export default DetalhesCurso;
