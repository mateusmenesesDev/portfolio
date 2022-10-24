import { Badge } from '../Badge'
import style from './Portfolio.module.css'
import { Projetos } from './Projetos'
export function Portfolio(){
    return (
        <section className={style.portfolio}>
            <Badge fill>Portfólio</Badge>
            <div className={style['portfolio-header']}>
                <h2>Trabalhos e projetos</h2>
                <div className={style['portfolio-header--filters']}>
                    <Badge fill pointer>Front End</Badge>
                    <Badge pointer>Fullstack</Badge>
                    <Badge pointer>Back End</Badge>
                </div>
            </div>
            <div className={style['portfolio-cards']}>
                <Projetos/>
                <Projetos/>
                <Projetos/>
                <Projetos/>
                <Projetos/>
                <Projetos/>
                <Projetos/>
                <Projetos/>
            </div>
        </section>
    )
}