import style from './Experience.module.css'
import {DiScrum} from 'react-icons/di'
export function Experience(){
    return (
        <section className={style.experience}>
                <div className={style['experience-years']}>
                    <div className={style['experience-years--border']}>
                        <i className="fa-solid fa-code fa-3x"></i>
                        <p className={style['experience-years--secondary']}>1 ano como</p>
                        <p className={style['experience-years--main']}>Desenvolvedor</p>
                    </div>
                    <div className={style['experience-years--noborder']}>
                        <i className="fa-solid fa-briefcase fa-3x main"></i>
                        <p className={style['experience-years--secondary']}>3 anos de</p>
                        <p className={style['experience-years--main']}>Trabalhos</p>
                    </div>
                    <div className={style['experience-years--border']}>
                        <DiScrum size={92} color='#FFC300'/>
                        <p className={style['experience-years--secondary']}>2 anos de</p>
                        <p className={style['experience-years--main']}>SCRUM</p>
                    </div>
                </div>
                <div className={style['experience-jobs']}>
                    <div className={style['experience-jobs--one']}>
                        <p className={style['experience-jobs--secondary']}>Gestor em</p>
                        <p className={style['experience-jobs--main']}>T.I</p>
                    </div>
                    <div className={style['experience-jobs--two']}>
                        <p className={style['experience-jobs--secondary']}>Participação como P.O em diversos</p>
                        <p className={style['experience-jobs--main']}>Projetos</p>
                    </div>
                    <div className={style['experience-jobs--three']}>
                        <p className={style['experience-jobs--secondary']}>Diversas ferramentas</p>
                        <p className={style['experience-jobs--main']}>AGILE</p>
                    </div>
                </div>
        </section>
    )
}