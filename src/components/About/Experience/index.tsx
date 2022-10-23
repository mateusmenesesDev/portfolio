import style from './Experience.module.css'

export function Experience(){
    return (
        <section className={style.experience}>
                <div className={style['experience-years']}>
                    <div className={style['experience-years--border']}>
                        <i className="fa-solid fa-code fa-4x"></i>
                        <p className={style['experience-years--secondary']}>1 ano como</p>
                        <p className={style['experience-years--main']}>Desenvolvedor</p>
                    </div>
                    <div>
                        <p className={style['experience-years--secondary']}>3 anos de</p>
                        <p className={style['experience-years--main']}>Trabalhos</p>
                    </div>
                    <div className={style['experience-years--border']}>
                        <p className={style['experience-years--secondary']}>2 anos de</p>
                        <p className={style['experience-years--main']}>SCRUM</p>
                    </div>
                </div>
                <div className={style['experience-jobs']}>
                    <div>
                        <p>Gestor em</p>
                        <p>T.I</p>
                    </div>
                    <div>
                        <p>Gestor em</p>
                        <p>T.I</p>
                    </div>
                    <div>
                        <p>Gestor em</p>
                        <p>T.I</p>
                    </div>
                </div>
        </section>
    )
}