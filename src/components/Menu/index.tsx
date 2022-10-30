import style from './Menu.module.css'

export function Menu(){
    return (
        <header className={style.header}>
            <div className={style['header-logo']}>{`</>`}</div>
            <div className={style['header-itens']}>
                <ul>
                    <a href="#home"><li>Home</li></a>
                    <a href="#about-me"><li>Sobre mim</li></a>
                    <a href="#portfolio"><li>Portfólio</li></a>
                    <a href="#skills"><li>Skills</li></a>
                    <a href="#carrer"><li>Carreira</li></a>
                    <a href="#recomendacao"><li>Recomendações</li></a>
                    <a href="#contact"><li>Contato</li></a>
                </ul>
            </div>
        </header>
    )
}