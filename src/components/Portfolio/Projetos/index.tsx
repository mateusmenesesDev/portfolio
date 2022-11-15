import { IProjetos } from "../../../types/types";
import { Badge } from "../../Badge";
import style from "./Projetos.module.css";

export function Projetos({
  name,
  description,
  topics,
  html_url,
  homepage,
}: IProjetos) {
  return (
    <div className={style.projeto}>
      <div className={style["projeto-img"]}>
        <img
          src={`https://raw.githubusercontent.com/mateusmenesesDev/${name}/main/preview/preview.png`}
          alt="Imagem do Projeto"
        />
      </div>
      <div className={style['projeto-buttons']}>
        <a href={homepage} target='_blank'>Acessar Projeto</a>
        <a href={html_url} target='_blank'>Acessar Repositório</a>
      </div>
      <div className={style['projeto-details']}>
        <div className={style['projeto-details--left']}>
          <div className={style['projeto-details--title']}>
            {name}
          </div>
          <div className={style['projeto-details--badges']}>
            {topics.map(topic => (
              <Badge fill size="16px">{topic}</Badge>
            ))}
          </div>
        </div>
        <div className={style['projeto-details--right']}>
          <div>
            {description}
          </div>
        </div>
      </div>
     
    </div>
  );
}
