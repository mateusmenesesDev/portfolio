import { Badge } from '../../Badge'
import style from './AboutMe.module.css'

export function AboutMe(){
    return (
        <section id='about-me' className={style.aboutMe}>
            <div className={style['aboutMe-photo']}>
                <img src="/assets/image/perfil.jpeg" alt="" />
            </div>
            <div>
                <Badge fill>Sobre mim</Badge>
                <p className={style['aboutMe-name']}>Mateus Meneses de Albuquerque Silva</p>
                <p>Me chamo Mateus Meneses, obrigado por estar visualizando o meu portfólio!
                <br/><br/>
                Trabalho com tecnologia há mais de 3 anos e já passei por diversos cargos! 
                Já atuei como P.O ou SCRUM Master em diversos projetos de Consultoria. E no momento, estou focado em me tornar um Desenvolvedor.
                </p>
            </div>
        </section>
    )
}