import axios from "axios";
import { useEffect, useState } from "react";
import { IProjetos } from "../../types/types";
import { Badge } from "../Badge";
import style from "./Portfolio.module.css";
import { Projetos } from "./Projetos";

export function Portfolio() {
  const [projetos, setProjetos] = useState<IProjetos[] | []>([]);

  const fetchData = async () => {
    const results = await axios.get("/.netlify/functions/gitHub");
    const repo: IProjetos[] = results.data;
    setProjetos([...repo]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={style.portfolio}>
      <Badge fill>Portfólio</Badge>
      <div className={style["portfolio-header"]}>
        <h2>Trabalhos e projetos</h2>
        <div className={style["portfolio-header--filters"]}>
          <Badge fill pointer>
            Front End
          </Badge>
          <Badge pointer>Fullstack</Badge>
          <Badge pointer>Back End</Badge>
        </div>
      </div>
      <div className={style["portfolio-cards"]}>
        {projetos.map((projeto) => (
          <Projetos
            homepage={projeto.homepage}
            id={projeto.id}
            name={projeto.name}
            description={projeto.description}
            url={projeto.url}
            topics={projeto.topics}
            html_url={projeto.html_url}
          />
        ))}
      </div>
    </section>
  );
}
