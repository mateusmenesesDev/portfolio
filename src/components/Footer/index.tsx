import style from './Footer.module.css'
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'

export function Footer() {
    return (
        <footer className={style.footer}>
            <p>Desenvolvido por: <strong>Mateus Meneses</strong></p>
            <div className={style.social}>
                <a href='https://www.linkedin.com/in/mateus-meneses/' target='_blank'>
                    <BsLinkedin size={24}/>
                </a>
                <a href='https://github.com/mateusmenesesDev' target='_blank'>
                    <AiFillGithub size={24}/>
                </a>
                <a href=""></a>
            </div>
        </footer>
    )
}