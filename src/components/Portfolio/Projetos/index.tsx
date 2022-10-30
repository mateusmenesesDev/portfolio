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
      <div className={style['projeto-header']}>
        <h3>{name.toUpperCase()}</h3>
        <p>{description}</p>
        <div className={style.badges}>
          {topics.map((topic) => (
            <Badge size="14px">{topic}</Badge>
          ))}
        </div>
      </div>
      <div className={style["projeto-img"]}>
        <img
          src={`https://raw.githubusercontent.com/mateusmenesesDev/${name}/main/preview/preview.png`}
          alt="Imagem do Projeto"
        />
      </div>
      <div className={style["projeto-button"]}>
        <a href={homepage} target="_blank" rel="noreferrer" className={style.button}>
          Projeto
        </a>
        <a href={html_url} target="_blank" rel="noreferrer" className={style.button}>
          Repositório
        </a>
      </div>
    </div>
  );
}
