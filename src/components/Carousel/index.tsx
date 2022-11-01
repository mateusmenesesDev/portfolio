
import style from './Carousel.module.css'
import './Carousel.module.css'
export function Carousel({props}:any) {
    props.forEach((projeto:any)=>{
        console.log(projeto.name)
    })
    return (
    <div className={style.container}>
        <div className={style.carousel}>         
            {props.map((projeto:any)=>(
                <figure><img src={`https://raw.githubusercontent.com/mateusmenesesDev/${projeto.name}/main/preview/preview.png`} alt='img'></img></figure>
            ))}
        </div>
    </div>
    )
}