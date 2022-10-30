import style from './About.module.css'
import { AboutMe } from './AboutMe'
import { Card } from './Card'
import { Experience } from './Experience'

export function About(){
    return (
        <div>
            
            <section id='home' className={style.about}>
                <div>
                    <h1>Mateus Meneses</h1>
                    <p>Front-end developer | Gestor em T.I</p>
                    <div className={style['about-social']}>
                        <a href="https://github.com/mateusmenesesDev" target='_blank'>
                            <i className="fa-brands fa-github fa-2xl"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/mateus-meneses/" target='_blank'>
                            <i className="fa-brands fa-linkedin fa-2xl"></i>
                        </a>
                    </div>
                </div>
                <Card/>
                <div className={style['about-links']}>
                    <a href="">Baixar CV <i className="fa-regular fa-circle-down"></i></a>
                    <a href="" className={style['about-links--contact']}><i className="fa-brands fa-whatsapp"></i> Entrar em contato</a>
                </div>
            </section>
            <Experience/>
            <AboutMe/>
        </div>
    )
}