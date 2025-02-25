import React from "react";
import titulos from '../Css/Titulos.module.css'
import historia from '../Css/Historia.module.css'

const Historia = () => {
  return (
    <div >
      <h1 className={titulos.titulos}s>Historia</h1>
      <p className={historia.ajeitar}>
        O Senai (Serviço Nacional de Aprendizagem Industrial) foi criado em 1942
        com o objetivo de capacitar os trabalhadores brasileiros para atender à
        crescente demanda do setor industrial no país, especialmente após a
        Segunda Guerra Mundial, quando o Brasil passou a investir mais em sua
        industrialização. A fundação do Senai foi uma resposta à necessidade de
        qualificação profissional e ao desenvolvimento de uma mão de obra
        especializada.
      </p>
      <p className={historia.ajeitar}>
        Ele surgiu por meio da Lei nº 4.048, de 22 de janeiro de 1942, em um
        momento de transformação da economia brasileira, que começava a se
        industrializar, principalmente com o apoio do governo federal para a
        construção de infraestrutura e desenvolvimento das indústrias. O Senai
        foi criado dentro do Sistema S, que também inclui outras entidades como
        o Sesc, Sesi, Senac, entre outras, todas com o intuito de promover
        educação, saúde e bem-estar à população brasileira.
      </p>
      <p className={historia.ajeitar}>
        Ao longo das décadas, o Senai se expandiu e se consolidou como uma das
        principais instituições de formação profissional do Brasil. Ele oferece
        cursos e programas de qualificação nas mais diversas áreas industriais,
        desde a formação inicial até cursos de aperfeiçoamento técnico e
        superior.
      </p>
    </div>
  );
};

export default Historia;
