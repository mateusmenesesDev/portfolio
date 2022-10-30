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
      <h3>{name.toUpperCase()}</h3>
      <p>{description}</p>
      <div className={style.badges}>
        {topics.map((topic) => (
          <Badge size="14px">{topic}</Badge>
        ))}
      </div>
      <div className={style["projeto-img"]}>
        <img
          src={`https://raw.githubusercontent.com/mateusmenesesDev/${name}/main/preview/preview.png`}
          alt=""
        />
      </div>
      <div className={style["projeto-button"]}>
        <a href={homepage} target="_blank">
          Acessar Projeto
        </a>
        <a href={html_url} target="_blank">
          Acessar Repositório
        </a>
      </div>
    </div>
  );
}
