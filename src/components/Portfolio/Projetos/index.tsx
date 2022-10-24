import { Badge } from "../../Badge";
import style from './Projetos.module.css'
export function Projetos(){
    return (
        <div className={style.projeto}>
            <h3>Título do Projeto</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eius, labore in eos laboriosam excepturi.</p>
            <div>
                <Badge>ReactJS</Badge>
                <Badge>Typescript</Badge>
            </div>
            <div className={style['projeto-img']}>
                <img src="/assets/image/perfil.jpeg" alt="" />
            </div>
        </div>
    )
}