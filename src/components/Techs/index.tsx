import { Badge } from '../Badge'
import style from './Techs.module.css'
import { FaBootstrap, FaCss3, FaGit, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiAsana, SiClockify, SiTailwindcss, SiTypescript, SiVisualstudio } from 'react-icons/si';
import { DiScrum } from 'react-icons/di';
import { BsKanbanFill } from 'react-icons/bs'
import { CgMonday } from 'react-icons/cg'

export function Techs(){
    return (
        <section className={style.techs}>
            <div className={style['techs-header']}>
                <Badge fill>Skills</Badge>
                <h3>Skills | Ferramentas | Agile</h3>
            </div>
            <div className={style['techs-box']}>
                <div className={style['techs-box-list']}>
                    <p>Techs</p>
                    <div className={style['techs-box-list--icons']}>
                        <FaHtml5 color='#FFC300' size={35}/>
                        <FaCss3 color='#FFC300' size={35}/>
                        <FaGit color='#FFC300' size={35}/>
                        <FaBootstrap color='#FFC300' size={35}/>
                        <SiTailwindcss color='#FFC300' size={35}/>
                        <FaJs color='#FFC300' size={35}/>
                        <SiTypescript color='#FFC300' size={35}/>
                        <FaReact color='#FFC300' size={35}/>
                    </div>
                </div>
                <div className={style['techs-box-list']}>
                    <p>Ferramentas e Agile</p>
                    <div className={style['techs-box-list--icons']}>
                        <DiScrum color='#FFC300' size={40}/>
                        <BsKanbanFill color='#FFC300' size={35}/>
                        <SiAsana color='#FFC300' size={35}/>
                        <CgMonday color='#FFC300' size={35}/>
                        <SiClockify color='#FFC300' size={35}/>
                        <SiVisualstudio color='#FFC300' size={35}/>
                        
                    </div>
                </div>
            </div>  
        </section>
    )
}