import { Badge } from '../Badge'
import style from './Carrer.module.css'
export function Carrer() {
    return (
        <section className={style.carrer}>
            <Badge fill>Carreira</Badge>
            <h3>Experiência até o momento</h3>
            <div className={style['experiences']}>
                <div className={style['experiences-type']}>
                    <h4>
                        Profissional
                    </h4>
                    <p>2020 - Atualmente</p>
                    <div className={style['experiences-box']}>
                        <h3>Coordenador de Criação<br/>CONNAT Soluções</h3>
                        <p>Responsável por coordenar equipe de Assessoria em Mídia Sociais, 
                            utilizando de indicadores estratégicos de marketing e táticos através das métricas de redes sociais.</p>
                        <div className={style['experiences-box--details']}>
                            <p>1 ano e  3 meses</p>
                            <p>Data x até data y</p>
                        </div>
                    </div>
                    <div className={style['experiences-box']}>
                        <h3>Coordenador de Criação<br/>CONNAT Soluções</h3>
                        <p>Responsável por coordenar equipe de Assessoria em Mídia Sociais, 
                            utilizando de indicadores estratégicos de marketing e táticos através das métricas de redes sociais.</p>
                        <div className={style['experiences-box--details']}>
                            <p>1 ano e  3 meses</p>
                            <p>Data x até data y</p>
                        </div>
                    </div>
                </div>

                <div className={style['experiences-type']}>
                    <h4>
                        Acadêmica
                    </h4>
                    <p>2020 - Atualmente</p>
                    <div className={style['experiences-box']}>
                        <h3>Coordenador de Criação<br/>CONNAT Soluções</h3>
                        <p>Minha experiência</p>
                        <div className={style['experiences-box--details']}>
                            <p>1 ano e  3 meses</p>
                            <p>Data x até data y</p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </section>
    )
}