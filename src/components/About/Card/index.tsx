import style from './Card.module.css'

export function Card() {
    return (
        <div className={style.card}>
            <div className={style['card-header']}>
                <a href="https://github.com/mateusmenesesDev" target='_blank'>
                    <i className="fa-brands fa-github 2x"></i>
                </a>
            </div>
            <div className={style['card-photo']}>
                <img src="/assets/image/perfil2.jpg" alt="Foto de Perfil" />
            </div>
            <div className={style['card-info']}>
                <div className={style['card-info--content']}>
                    <p>14</p>
                    <p>Seguidores</p>
                </div>
                <div className={style['card-info--content']}>
                    <p>14</p>
                    <p>Seguidores</p>
                </div>
                <div className={style['card-info--content']}>
                    <p>14</p>
                    <p>Seguidores</p>
                </div>
            </div>
        </div>
    )
}