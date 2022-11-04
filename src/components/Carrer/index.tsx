import { Badge } from '../Badge'
import style from './Carrer.module.css'
export function Carrer() {
    return (
        <section className={style.carrer} id='carrer'>
            <Badge fill>Carreira</Badge>
            <h3 className={style['carrer-desc']}>Experiência até o momento</h3>
            <div className={style['carrer-content']}>
                <div className={style.experience}>
                    <div className={style['experiences-type--desc']}>
                            <h4>
                                Profissional
                            </h4>
                            <p>2020 - Atualmente</p>
                    </div>
                    <div className={style['experiences']}>
                        <div className={style['experiences-box']}>
                                    <h3>Coordenador de Marketing<br/>CONNAT Soluções</h3>
                                    <p>Responsável por coordenar equipe de Assessoria em Mídia Sociais,
                                        utilizando de indicadores estratégicos de marketing e táticos através das métricas de redes sociais.</p>
                                    <div className={style['experiences-box--details']}>
                                        <p className={style['experiences-box--date']}>1 ano e  3 meses</p>
                                        <p className={style['experiences-box--date']}>01/01/20 - 31/12/2020</p>
                                    </div>
                                </div>
                                <div className={style['experiences-box']}>
                                    <h3>Diretor de Tecnologia e Inovação<br/>CONNAT Soluções</h3>
                                    <p>Responsável por alinhar recursos humanos e tecnologicos da empresa com planejamento da diretória estratégica.
                                    Garantir o funcionamento das ferramentas, sistemas e buscar inovações que melhorem a eficácia, eficiencia e efetividade dos serviços oferecidos.
                                    </p>
                                    <div className={style['experiences-box--details']}>
                                        <p className={style['experiences-box--date']}>Em execução</p>
                                        <p className={style['experiences-box--date']}>01/01/21 até hoje</p>
                                    </div>
                                </div>
                            <div className={style['experiences-box']}>
                                <h3>Professor - Superior em Gestão de T.I<br/>Instituto Federal de Sergipe</h3>
                                <p>Ministrador das seguintes disciplinas:<br/> Fundamentos em Gestão de T.I;
                                    Segurança da Informação; Arquitetura de Computadores.</p>
                                <div className={style['experiences-box--details']}>
                                    <p className={style['experiences-box--date']}>Em execução</p>
                                    <p className={style['experiences-box--date']}>01/01/21 até hoje</p>
                                </div>
                            </div>
                            <div className={style['experiences-box']}>
                                <h3>Product Owner<br/>CONNAT Soluções</h3>
                                <p>Atuo como P.O em Projetos de Consultoria que possuem um contexto mais direcionado a tecnologia</p>
                                <div className={style['experiences-box--details']}>
                                    <p className={style['experiences-box--date']}>Em execução</p>
                                    <p className={style['experiences-box--date']}>01/01/21 até hoje</p>
                                </div>
                            </div>
                            <div className={style['experiences-box']}>
                                <h3>Srum Master<br/>CONNAT Soluções</h3>
                                <p>Responsável por garantir o alinhamento dos SQUAD com a metodologia SCRUM,
                                    além de retirar impedimentos durante a execução de projetos.</p>
                                <div className={style['experiences-box--details']}>
                                    <p className={style['experiences-box--date']}>Em execução</p>
                                    <p className={style['experiences-box--date']}>01/01/21 até hoje</p>
                                </div>
                            </div>
                    </div>
                </div>
                <div className={style.experience}>
                    <div className={style['experiences-type--desc']}>
                            <h4>
                                Acadêmica
                            </h4>
                            <p>2020 - Atualmente</p>
                    </div>
                    <div className={style['experiences']}>
                        <div className={style['experiences-box']}>
                            <h3>Técnico da Manutenção e Suporte a Informática<br/>Instituto Federal de Sergipe</h3>
                            <p>Realizar manutenção preventiva e corretiva de equipamentos de informática,
                                    identificando os principais componentes de um computador e suas funcionalidades.
                                    Identificar as arquiteturas de rede e analisa meios físicos, dispositivos e padrões de comunicação.</p>
                            <div className={style['experiences-box--details']}>
                                <p className={style['experiences-box--date']}>2 anos</p>
                                <p className={style['experiences-box--date']}>2019 até 2021</p>
                            </div>
                        </div>
                        <div className={style['experiences-box']}>
                            <h3>Superior em Gestão de Tecnologia da Informação<br/>Instituto Federal de Sergipe</h3>
                            <p>Curso focado em formar gestores com extenso conhecimento em diversas áreas da tecnologia.
                                O Gestor em T.I deve ter conhecimento nos principais elementos de T.I:
                                Software; Hardware; Redes; Dados.</p>
                            <div className={style['experiences-box--details']}>
                                <p className={style['experiences-box--date']}>3 anos</p>
                                <p className={style['experiences-box--date']}>2019 até 2022</p>
                            </div>
                        </div>
                        <div className={style['experiences-box']}>
                            <h3>Desenvolvimento Web<br/>Trybe</h3>
                            <p>Curso intensivo para formar profissionais Full-Stack em desenvolvimento Web</p>
                            <div className={style['experiences-box--details']}>
                                <p className={style['experiences-box--date']}>1 ano</p>
                                <p className={style['experiences-box--date']}>2022 até o momento</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}