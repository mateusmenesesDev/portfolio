import style from './Carousel.module.css'
import { IProjetos } from "../../types/types";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import { Badge } from '../Badge';
interface props {
    projetos: IProjetos[] | []
}
export function Carousel({projetos}:props) {
    return (
        <div className={style.carousel}>
                <Swiper
                    slidesPerView={3}
                    slidesPerGroup={1}
                    spaceBetween={20}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation, Thumbs]}
                    grabCursor={true}
                    className={style['carousel-imgs-swiper']}
                >
                    {projetos.map(projeto=> projeto.name.toUpperCase() !== 'MATEUSMENESESDEV' && (
                            <SwiperSlide className={style.slide}>
                                <div className={style['slide-header']}>
                                    <h3>{projeto.name}</h3>
                                    <p>{projeto.description}</p>
                                </div>

                                <div className={style['slide-img-box']}>
                                    {projeto.topics.map(topic=>(
                                        <Badge size='14px'>{topic}</Badge>
                                    ))}
                                    <img
                                        src={`https://raw.githubusercontent.com/mateusmenesesDev/${projeto.name}/main/preview/preview.png`}
                                        alt="Imagem do Projeto"
                                    />
                                </div>
                                <div className={style['slide-buttons']}>
                                    <a href={projeto.homepage} target="_blank" rel="noreferrer" className={style.button}>
                                        Projeto
                                    </a>
                                    <a href={projeto.html_url} target="_blank" rel="noreferrer" className={style.button}>
                                        Repositório
                                    </a>
                                </div>
                            </SwiperSlide>
                    ))}
                    
                </Swiper>
        </div>
    )
}