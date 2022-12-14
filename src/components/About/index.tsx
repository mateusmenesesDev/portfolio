import style from './About.module.css'
import { AboutMe } from './AboutMe'
import { Experience } from './Experience'

export function About(){
    return (
        <div>
            <section id='home' className={style.about}>
                <div className={style['about-desc']}>
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
                <div className={style['about-links']}>
                    <a href="/assets/download/Currículo.pdf" download='Currículo Mateus Meneses'>Baixar CV <i className="fa-regular fa-circle-down"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=5579999320778" target='_blank' className={style['about-links--contact']}><i className="fa-brands fa-whatsapp"></i> Entrar em contato</a>
                </div>
            </section>
            <Experience/>
            <AboutMe/>
        </div>
    )
}