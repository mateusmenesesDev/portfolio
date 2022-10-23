import style from './Menu.module.css'

export function Menu(){
    return (
        <header className={style.header}>
            <div className={style['header-logo']}>{`</>`}</div>
            <div className={style['header-itens']}>
                <ul>
                    <a href=""><li>Home</li></a>
                    <a href=""><li>Sobre mim</li></a>
                    <a href=""><li>Portfólio</li></a>
                    <a href=""><li>Skills</li></a>
                    <a href=""><li>Carreira</li></a>
                    <a href=""><li>Recomendações</li></a>
                    <a href=""><li>Contato</li></a>
                </ul>
            </div>
        </header>
    )
}