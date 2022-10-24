import { IProjetos } from "../../../types/types";
import { Badge } from "../../Badge";
import style from './Projetos.module.css'

export function Projetos({name, description, topics, html_url, homepage}:IProjetos){
    return (
        <div className={style.projeto}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={style.badges}>
                {topics.map(topic=>(
                    <Badge>{topic}</Badge>
                ))}
            </div>
            <div className={style['projeto-img']}>
                <img src="/assets/image/perfil.jpeg" alt="" />
            </div>
            <div className={style['projeto-button']}>
                <a href={homepage} target="_blank">Acessar Projeto</a>
                <a href={html_url} target="_blank">Acessar Repositório</a>
            </div>
        </div>
    )
}