import style from './Badge.module.css'

interface props{
    children: React.ReactNode
    fill?:boolean,
    pointer?:boolean
}

export function Badge({children, fill, pointer}:props){
    const color = '#FFC300'
    
    return (
        <span className={fill ? style.fill : style.nonFill}
        style={{
            cursor: pointer ? 'pointer': '',
            backgroundColor: fill ? color : ''
          }} >
            {children}
        </span>
    )
}