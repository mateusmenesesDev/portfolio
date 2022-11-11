import style from "./Carousel.module.css";
import { IProjetos } from "../../types/types";
import { Projetos } from "../Portfolio/Projetos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

interface props {
    projetos: IProjetos [];
}

export function Carousel(props:props) {
    console.log(props.projetos)
  return (
    <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{clickable:true,}}
        modules={[Navigation]}
        className={style.mySwiper}
    >
        {props.projetos.map(projeto => (
            projeto.name.toUpperCase() !== 'MATEUSMENESESDEV' && 
            <SwiperSlide className={style.slide}>
              <Projetos
                homepage={projeto.homepage}
                id={projeto.id}
                name={projeto.name}
                description={projeto.description}
                url={projeto.url}
                topics={projeto.topics}
                html_url={projeto.html_url}
              />
            </SwiperSlide>
          
        ))}
    </Swiper>
      
  );
}
