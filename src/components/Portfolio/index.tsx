import axios from "axios";
import { useEffect, useState } from "react";
import { IProjetos } from "../../types/types";
import { Badge } from "../Badge";
import { Carousel } from "../Carousel";
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
    <section id="portfolio" className={style.portfolio}>
      <div className={style['portfolio-badges']}>
        <Badge fill>Portfólio</Badge>
      </div>
      <div className={style["portfolio-header"]}>
        <h2>Trabalhos e projetos</h2>
        <div className={style["portfolio-header--filters"]}>
        </div>
      </div>
      {/* <div className={style["portfolio-cards"]}>
        {projetos.map(projeto=>(
          projeto.name.toUpperCase() !== 'MATEUSMENESESDEV' && 
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
      </div> */}
      <Carousel projetos={projetos}/>
    </section>
    
  );
}
